import { useSearchParams } from 'cosmos-components';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FormattedFilters, Status } from '../types';
import { exportTradePartners, listTradePartners } from '../../../apis/trade-partners.api';
import { tradePartnerActions } from '../actions/trade-partners.action';

const defaultPageSize = 20;

export const useAgentsSearch = ({ filters }) => {
    const localDispatch = useDispatch();
    const [paginationParams, setPaginationParams] = useSearchParams({
        page: 1,
        pageSize: defaultPageSize,
        text: '',
    });
    const { page, pageSize, text } = paginationParams;
    const offset = pageSize * (page - 1);

    const setSearchPagination = useCallback(
        (pageSelected: number, pageSizeSelected: number = defaultPageSize) => {
            setPaginationParams({
                page: pageSelected,
                pageSize: pageSizeSelected,
            });
        },
        [setPaginationParams],
    );

    const setSearchText = useCallback(
        (searchText: string) => {
            setPaginationParams({
                text: searchText,
            });
            setSearchPagination(1, pageSize);
        },
        [setPaginationParams],
    );

    const loadPageData = (
        loadPage: any,
        loadPageSize: number,
        loadSearch: string,
        loadFilters: FormattedFilters,
    ) => {
        if (!loadPage || !loadPageSize) {
            return;
        }

        const fetchTradePartners = async () => {
            return await listTradePartners({
              ...(loadSearch && { text: loadSearch }),
              limit: pageSize,
              offset,
              consistent: true,
                summary: true,
                ...transformFilters(loadFilters)
            });
        };

        localDispatch(tradePartnerActions.triggered());

        fetchTradePartners().then(resp => {
            localDispatch(tradePartnerActions.loaded(resp));
        });
    };

    const transformFilters = ({
        status,
        type,
        group,
        subGroupIds,
        market,
        billingCountryCode,
    }: FormattedFilters) => {
        const formattedStatus = !status
            ? Status.Active
            : status !== Status.All
            ? status
            : null;

        return {
            status: formattedStatus,
            typeId: type,
            groupId: group,
            subGroupIds,
            marketId: market,
            billingCountryCode,
        };
    };

    const loadPageDataCallback = useCallback(loadPageData, [
        page,
        pageSize,
        text,
        filters,
    ]);

    useEffect(() => {
        loadPageDataCallback(page, pageSize, text, filters);
    }, [loadPageDataCallback, page, pageSize, text, filters]);

    const resetPagination = () => {
        setSearchPagination(1, pageSize);
    };

    const initiateDownload = useCallback(() => {
        exportTradePartners({
            ...transformFilters(filters),
            text,
        });
    }, [transformFilters, setSearchText]);

    const handlePagination = (clickAction: 'next' | 'previous') => {
        const pageChange = clickAction === 'next' ? 1 : -1;
        setSearchPagination(page + pageChange, pageSize);
    };

    const handlePaginationSize = (
        pageSizeSelected: number = defaultPageSize,
    ) => {
        setSearchPagination(1, pageSizeSelected);
    };

    return {
        page,
        pageSize,
        offset,
        text,
        handlePagination,
        handlePaginationSize,
        setSearchText,
        resetPagination,
        initiateDownload,
    };
};
