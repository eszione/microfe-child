import { OptionProps, SelectOptionProps } from 'cosmos-components';

export const Status = {
    All: 'All',
    Active: 'Active',
    Inactive: 'Inactive',
} as const;

export enum FilterName {
    Status = 'status',
    Type = 'type',
    Group = 'group',
    SubGroups = 'subGroups',
    Market = 'market',
    BillingCountryCode = 'billingCountryCode',
}

export interface FilterProps {
    status?: SelectOptionProps;
    type?: SelectOptionProps;
    group?: SelectOptionProps;
    subGroups?: SelectOptionProps[];
    market?: SelectOptionProps;
    billingCountryCode?: SelectOptionProps;
}

export type FilterValue = OptionProps & SelectOptionProps;

export interface FormattedFilters {
    status?: string;
    type?: string;
    group?: string;
    subGroupIds?: string;
    market?: string;
    billingCountryCode?: string;
}

const testId = 'agent-list';
export const testIds = {
    agentTableTestId: `${testId}-agent-table`,
    searchAgentTestId: `${testId}-search-agent`,
    statusSelectAgentTestId: `${testId}-status-agent`,
    createAgentTestId: `${testId}-create-agent`,
    editAgentTestId: `${testId}-edit-agent`,
    allocateProductRateModal: `${testId}-allocate-product-modal`,
    agentCsvTestId: `${testId}-agent-csv-download-link`,
};
