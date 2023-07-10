import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

// components
import { Button, Labeled, TagSelectDeprecated } from 'cosmos-components';
import { SearchableTagSelect } from '../search/SearchableTagSelect';

// actions
import { actions as agentGroupListActions } from '../ducks/agentGroup/agentGroups';
import { actions as typesActions } from '../ducks/agentType/agentTypes';
import { actions as agentSubGroupActions } from '../ducks/agentSubGroup/agentSubGroups';
import { actions as pointActions } from 'core/ducks/points';
import { actions as marketListActions } from '../ducks/marketCode/marketCodes';

// selectors
import {
    getAgentGroupOptionsWithLoading,
    getAgentTypeOptions,
    getAgentSubGroupOptionsWithLoading,
    getAddressCountries,
    getMarketCodeOptionsWithLoading,
} from '../selectors';

// messages
import coreMsg from 'core/messages';
import msg from '../messages';

// types
import { StatusBase } from 'core/enums';
import { FilterName, FilterProps, FilterValue, Status } from '../types';

// helpers
import { mainStatusOptions } from 'core/helpers/options';
import { convertFiltersForBackend } from '../helpers';
import { FILTER_MAX_SUB_GROUP_LIMIT } from '../constants';

const initialState: FilterProps = {
    status: mainStatusOptions.find(
        (status) => status.value === StatusBase.Active,
    ),
    type: null,
    group: null,
    subGroups: [],
    market: null,
    billingCountryCode: null,
};

export const Filters = ({ setFiltersCallback, resetPagination }) => {
    const intl = useIntl();
    const dispatch = useDispatch();

    const [filters, setFilters] = useState<FilterProps>(initialState);

    const { options: typeOptions, loading: typeLoading } = useSelector(
        getAgentTypeOptions,
    );
    const { options: groupOptions, loading: groupLoading } = useSelector(
        getAgentGroupOptionsWithLoading,
    );
    const { options: subGroupOptions, loading: subGroupLoading } = useSelector(
        getAgentSubGroupOptionsWithLoading,
    );
    const { options: marketOptions, loading: marketLoading } = useSelector(
        getMarketCodeOptionsWithLoading,
    );
    const countryCodeOptions = useSelector(getAddressCountries);

    useEffect(() => {
        searchForTypes();
        searchForGroups();
        fetchMarkets();
        fetchCountryCodes();
    }, []);

    const searchForTypes = (keyword = null) => {
        dispatch(
            typesActions.listRequest({
                ...(keyword && { query: `*${keyword}*` }),
            }),
        );
    };

    const searchForGroups = (keyword = null) => {
        dispatch(
            agentGroupListActions.listRequest({
                text: keyword,
                groupStatus: 'Active',
                hasParent: false,
            }),
        );
    };

    const fetchSubGroups = (groupId) => {
        dispatch(
            agentSubGroupActions.listRequest({
                groupId,
                groupStatus: Status.Active,
            }),
        );
    };

    const fetchMarkets = () => {
        dispatch(
            marketListActions.listRequest({
                consistent: true,
            }),
        );
    };

    const fetchCountryCodes = () => {
        dispatch(
            pointActions.request({
                consistent: true,
                search: 'and(status=Active,type=Country)',
            }),
        );
    };

    const setFilter = (name: string, value: FilterValue) => {
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    const setGroupfilter = (value: FilterValue) => {
        setFilters({
            ...filters,
            [FilterName.Group]: value,
            [FilterName.SubGroups]: [],
        });
    };

    const handleFilter = () => {
        convertAndApplyFilters(filters);
    };

    const handleReset = () => {
        setFilters(initialState);
        convertAndApplyFilters(initialState);
    };

    const convertAndApplyFilters = (rawFilters: FilterProps) => {
        const filtersWithSubGroupIds = {
            ...rawFilters,
            subGroupIds: rawFilters.subGroups
                ?.map((subGroup) => subGroup.value)
                .join(','),
        };
        const convertedFilters = convertFiltersForBackend(
            filtersWithSubGroupIds,
        );
        setFiltersCallback(convertedFilters);
        resetPagination();
    };

    const onSubGroupsSelect = (selected) => {
        const isWithinSubGroupsLimit =
            selected.length <= FILTER_MAX_SUB_GROUP_LIMIT;
        isWithinSubGroupsLimit && setFilter(FilterName.SubGroups, selected);
    };

    return (
        <FiltersWrapper>
            <DropDownWrapper>
                <Labeled
                    isInverted
                    label={intl.formatMessage(msg.fields.status)}
                >
                    <TagSelectDeprecated
                        isInverted
                        options={mainStatusOptions}
                        placeholder={intl.formatMessage(msg.fields.all)}
                        value={filters.status}
                        onChange={(value) => {
                            setFilter(FilterName.Status, value);
                        }}
                    />
                </Labeled>
            </DropDownWrapper>

            <DropDownWrapper>
                <Labeled
                    isInverted
                    label={<FormattedMessage {...msg.fields.type} />}
                >
                    <SearchableTagSelect
                        placeholder={intl.formatMessage(msg.fields.all)}
                        isLoading={typeLoading}
                        isMulti={false}
                        isClearable
                        options={typeOptions}
                        value={filters.type}
                        onSearch={searchForTypes}
                        onChange={(value) => {
                            setFilter(FilterName.Type, value);
                        }}
                    />
                </Labeled>
            </DropDownWrapper>

            <DropDownWrapper>
                <Labeled
                    isInverted
                    label={intl.formatMessage(msg.fields.group)}
                >
                    <SearchableTagSelect
                        placeholder={intl.formatMessage(msg.fields.all)}
                        isLoading={groupLoading}
                        isMulti={false}
                        isClearable
                        options={groupOptions}
                        value={filters.group}
                        onSearch={searchForGroups}
                        onChange={(selected) => {
                            setGroupfilter(selected);
                            fetchSubGroups(selected.value);
                        }}
                    />
                </Labeled>
            </DropDownWrapper>

            <DropDownWrapper>
                <Labeled
                    isInverted
                    label={intl.formatMessage(msg.fields.subGroup)}
                >
                    <TagSelectDeprecated
                        isLoading={subGroupLoading}
                        isSearchable
                        isInverted
                        isClearable
                        isMulti
                        options={subGroupOptions}
                        placeholder={intl.formatMessage(msg.fields.all)}
                        value={filters.subGroups}
                        onChange={onSubGroupsSelect}
                    />
                </Labeled>
            </DropDownWrapper>

            <DropDownWrapper>
                <Labeled
                    isInverted
                    label={intl.formatMessage(msg.fields.market)}
                >
                    <TagSelectDeprecated
                        isLoading={marketLoading}
                        isSearchable
                        isInverted
                        isClearable
                        options={marketOptions}
                        placeholder={intl.formatMessage(msg.fields.all)}
                        value={filters.market}
                        onChange={(value) => {
                            setFilter(FilterName.Market, value);
                        }}
                    />
                </Labeled>
            </DropDownWrapper>

            <DropDownWrapper>
                <Labeled
                    isInverted
                    label={intl.formatMessage(msg.fields.addressCountry)}
                >
                    <TagSelectDeprecated
                        isSearchable
                        isInverted
                        isClearable
                        options={countryCodeOptions}
                        placeholder={intl.formatMessage(msg.fields.all)}
                        value={filters.billingCountryCode}
                        onChange={(value) => {
                            setFilter(FilterName.BillingCountryCode, value);
                        }}
                    />
                </Labeled>
            </DropDownWrapper>

            <FilterButton
                onClick={handleFilter}
                data-test-id="schedule-Filters-Button-filter"
            >
                <FormattedMessage {...coreMsg.buttons.filter} />
            </FilterButton>
            <ResetButton
                isInverted
                variant="text"
                onClick={handleReset}
                data-test-id="schedule-Filters-Button-resetFilter"
            >
                <FormattedMessage {...coreMsg.buttons.resetFilters} />
            </ResetButton>
        </FiltersWrapper>
    );
};

const FiltersWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0.7rem;
    font-size: 14px;
`;

const FullRowWidth = css`
    grid-column: 1 / span 2;
`;

const DropDownWrapper = styled.div`
    ${FullRowWidth}
`;

const FilterButton = styled(Button)`
    ${FullRowWidth}
    margin-top: 3rem;
    color: white;
`;

const ResetButton = styled(Button)`
    ${FullRowWidth}
    margin-top: 1rem;
    color: white;
`;
