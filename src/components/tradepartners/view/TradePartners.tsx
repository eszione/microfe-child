import { FC, Fragment, useContext, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { RouteConfig } from 'react-router-config';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

// components
import {
    H1,
    Page,
    Select,
    HorizontalField,
    //SidepanelContext,
    TextButton,
    Modal,
    Pagination,
} from 'cosmos-components';

import { Table } from 'cosmos-components/dist/components/Table';
import SearchBox from '../../search';
import { Filters } from '../../filters/Filters'

// selectors
import { getTradePartners } from '../selectors';

// messages
import msg from '../messages';

// hooks
import { useAgentsSearch } from '../hooks';
import { AllocateRateModalContent } from '../../allocate-rate-modal/AllocateRateModalContent';
import { useAgentsTable } from '../hooks/useAgentsTable';
import { testIds } from '../types';

export const TradePartners: FC<{ location: RouteConfig['location'] }> = ({
    location,
}) => {
    const intl = useIntl();
    //const { pushContent, popContent } = useContext(SidepanelContext);
    const [filters, setFilters] = useState({});
    const [editRatesModalOpen, setEditRatesModalOpen] = useState(false);

    const { loading, data, totalCount } = useSelector(getTradePartners);

    const {
        selectedAgents,
        setSelectedAgents,
        tableConfiguration,
        selectHandler,
    } = useAgentsTable();

    const {
        page,
        pageSize,
        offset,
        text: searchText,
        handlePagination,
        handlePaginationSize,
        setSearchText,
        resetPagination,
        initiateDownload,
    } = useAgentsSearch({ filters });

    /*useEffect(() => {
        pushContent(
            <Filters
                setFiltersCallback={setFilters}
                resetPagination={resetPagination}
            />,
        );
        return popContent;
    }, [location.state]);*/

    useEffect(() => {
        if (loading) {
            setSelectedAgents([]);
        }
    }, [loading]);

    const onLastPage = page * pageSize >= totalCount;
    const pageCount = onLastPage ? totalCount - offset : pageSize;

    const showAll = 'ALL';
    const paginationSizes = [20, 50, 100, 250, showAll];
    const paginationSize = pageSize === totalCount ? showAll : pageSize;
    const isLoaded = !loading && totalCount;
    if (isLoaded && paginationSizes.indexOf(paginationSize) === -1) {
        handlePaginationSize();
    }
    const handlePaginationSizeEvent = (event) => {
        const onChangeSize =
            event.target.value === showAll
                ? totalCount
                : Number.parseInt(event.target.value, 10);
        handlePaginationSize(onChangeSize);
    };

    return (
        <Page
            header={
                <Fragment>
                    <H1>{intl.formatMessage(msg.titles.list)}</H1>
                    <ButtonsWrapper>
                        <TextButton
                            data-test-id={testIds.agentCsvTestId}
                            onClick={initiateDownload}
                        >
                            {intl.formatMessage(msg.buttons.exportToCsv)}
                        </TextButton>
                        <TextButton
                            data-test-id={testIds.createAgentTestId}
                            as={RouterLink}
                            to="/agents/new"
                        >
                            {intl.formatMessage(msg.buttons.add)}
                        </TextButton>
                    </ButtonsWrapper>
                </Fragment>
            }
        >
            <PaginationWrapper>
                <HorizontalField htmlFor="page-size" label={'Rows:'}>
                    <Select
                        id="page-size"
                        options={paginationSizes}
                        value={paginationSize}
                        onChange={handlePaginationSizeEvent}
                    />
                </HorizontalField>
                <Pagination
                    pageCount={pageCount}
                    offset={offset}
                    totalCount={totalCount}
                    handlePagination={handlePagination}
                    isNextDisabled={onLastPage || loading}
                    isPreviousDisabled={page <= 1 || loading}
                />
            </PaginationWrapper>

            <SearchBarWrapper>
                <Search
                    data-test-id={testIds.searchAgentTestId}
                    value={searchText}
                    minLength={2}
                    onFilterUpdate={setSearchText}
                />
            </SearchBarWrapper>
            {!!selectedAgents.length && (
                <EditProductRatesWrapper>
                    <div>
                        {intl.formatMessage(
                            msg.editProductRates.agentsSelected,
                            { selected: selectedAgents.length },
                        )}
                    </div>
                    <LinkWrapper>
                        <LinkWithLeftBorder
                            onClick={() => setEditRatesModalOpen(true)}
                        >
                            {intl.formatMessage(msg.editProductRates.title)}
                        </LinkWithLeftBorder>
                    </LinkWrapper>
                </EditProductRatesWrapper>
            )}

            <Table
                testId={testIds.agentTableTestId}
                isLoading={loading}
                configuration={tableConfiguration}
                data={data}
                selectableRows={selectHandler}
            />

            <Modal
                data-test-id={testIds.allocateProductRateModal}
                title={intl.formatMessage(msg.editProductRates.title)}
                visible={editRatesModalOpen}
                onClose={() => setEditRatesModalOpen(false)}
                maskClosable={false}
                destroyOnClose
            >
                {/* <AllocateRateModalContent selectedAgents={selectedAgents} /> */}
            </Modal>
        </Page>
    );
};

const Search = styled(SearchBox)`
    width: 100%;

    input {
        padding-left: 5rem;
        font-size: 1.5rem;
        height: 4rem;
        border-radius: 0;
        border-color: ${({ theme: { colors } }) => colors?.primaryBorder};
        border-bottom: 0;
    }

    i {
        left: 1rem;
    }
`;

const SearchBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
`;

const EditProductRatesWrapper = styled.div`
    width: 100%;
    height: 4rem;
    background-color: #157efb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    color: white;
`;

const LinkWrapper = styled.div`
    display: flex;
`;

const LinkWithLeftBorder = styled.div`
    padding: 0 1.5rem;
    border-left: 1px solid white;
    cursor: pointer;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
`;
