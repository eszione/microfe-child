import { defineMessages } from 'react-intl';

const prefix = 'mod.agents';
const dataField = `${prefix}.dataField`;
const btnScope = `${prefix}.buttons`;
const titleScope = `${prefix}.titles`;
const validationScope = `${prefix}.validation`;
const contentScope = `${prefix}.contents`;
const linkScope = `${prefix}.links`;
const optionScope = `${prefix}.options`;
const subscriptionScope = `${prefix}.subscription`;
const radioOptionsScope = `${prefix}.radioOptions`;

const fields = defineMessages({
    type: {
        id: `${dataField}.type`,
        defaultMessage: 'Type',
    },
    email: {
        id: `${dataField}.email`,
        defaultMessage: 'Email',
    },
    code: {
        id: `${dataField}.code`,
        defaultMessage: 'Code',
    },
    name: {
        id: `${dataField}.name`,
        defaultMessage: 'Name',
    },
    tags: {
        id: `${dataField}.tags`,
        defaultMessage: 'Tags',
    },
    group: {
        id: `${dataField}.group`,
        defaultMessage: 'Group',
    },
    subGroup: {
        id: `${dataField}.subGroup`,
        defaultMessage: 'Sub Group',
    },
    debtorStatus: {
        id: `${dataField}.debtorStatus`,
        defaultMessage: 'Debtor Status',
    },
    billingAddress: {
        id: `${dataField}.billingAddress`,
        defaultMessage: 'Billing Address',
    },
    status: {
        id: `${dataField}.status`,
        defaultMessage: 'Status',
    },
    addressCountry: {
        id: `${dataField}.addressCountry`,
        defaultMessage: 'Address Country',
    },
    market: {
        id: `${dataField}.market`,
        defaultMessage: 'Market',
    },
    all: {
        id: `${dataField}.all`,
        defaultMessage: 'All',
    },
    brand: {
        id: `${dataField}.brand`,
        defaultMessage: 'Brand',
    },
    driverLicenceCondition: {
        id: `${dataField}.driverLicenceCondition`,
        defaultMessage: 'Driver Licence Condition',
    },
    channel: {
        id: `${dataField}.channel`,
        defaultMessage: 'Channel',
    },
    fileType: {
        id: `${dataField}.fileType `,
        defaultMessage: 'File Type',
    },
});

const buttons = defineMessages({
    create: {
        id: `${btnScope}.createButton`,
        defaultMessage: 'Create Trade Partner',
    },
    update: {
        id: `${btnScope}.updateButton`,
        defaultMessage: 'Save Trade Partner',
    },
    add: {
        id: `${btnScope}.addButton`,
        defaultMessage: 'Add Trade Partner',
    },
    createAgentGroup: {
        id: `${btnScope}.create.agent.group`,
        defaultMessage: 'Create Trade Partner Group',
    },
    createMarketCode: {
        id: `${btnScope}.create.market.code`,
        defaultMessage: 'Create Market Code',
    },
    exportToCsv: {
        id: `${btnScope}.exportCSV`,
        defaultMessage: `Export To CSV`,
    },
    addSubscription: {
        id: `${btnScope}.addSubscription`,
        defaultMessage: 'Add Subscription',
    },
});

const titles = defineMessages({
    list: {
        id: `${titleScope}.list`,
        defaultMessage: 'Trade Partners',
    },
    create: {
        id: `${titleScope}.create`,
        defaultMessage: 'Create Trade Partner',
    },
    detail: {
        id: `${titleScope}.detail`,
        defaultMessage: 'Trade Partner',
    },
    addAgentGroup: {
        id: `${titleScope}.add.agent.group`,
        defaultMessage: 'Add trade partner group',
    },
    addMarketCode: {
        id: `${titleScope}.add.market.code`,
        defaultMessage: 'Add market code',
    },
    flexList: {
        id: `${titleScope}.flexList`,
        defaultMessage: 'Flex File Subscription',
    },
    createSubscription: {
        id: `${titleScope}.createSubscription`,
        defaultMessage: 'Create Subscription',
    },
    editSubscription: {
        id: `${titleScope}.editSubscription`,
        defaultMessage: 'Edit Subscription',
    },
});

const validation = defineMessages({
    codeRequired: {
        id: `${validationScope}.code.required`,
        defaultMessage: 'Code is required',
    },
    nameRequired: {
        id: `${validationScope}.name.required`,
        defaultMessage: 'Name is required',
    },
    emailValidation: {
        id: `${validationScope}.email.format`,
        defaultMessage: 'Email address is invalid',
    },
    emailDuplicatedValidation: {
        id: `${validationScope}.email.duplicated`,
        defaultMessage: 'Email address is duplicated',
    },
    requiredValidation: {
        id: `${validationScope}.required`,
        defaultMessage: 'This is required',
    },
});

const links = defineMessages({
    details: {
        id: `${linkScope}.details`,
        defaultMessage: 'Details',
    },
    staffContacts: {
        id: `${linkScope}.staffContacts`,
        defaultMessage: 'Staff Contacts',
    },
});

const contents = defineMessages({});

const options = defineMessages({
    statusAll: {
        id: `${optionScope}.statusAll`,
        defaultMessage: 'All',
    },
    statusActive: {
        id: `${optionScope}.statusActive`,
        defaultMessage: 'Active',
    },
    statusInactive: {
        id: `${optionScope}.statusInactive`,
        defaultMessage: 'Inactive',
    },

    statusCredit: {
        id: `${optionScope}.statusCredit`,
        defaultMessage: 'Credit',
    },
    statusPrepay: {
        id: `${optionScope}.statusPrepay`,
        defaultMessage: 'Prepay',
    },
    statusCredit20: {
        id: `${optionScope}.statusCredit20`,
        defaultMessage: 'Credit 20th FM',
    },
    statusPrepay60: {
        id: `${optionScope}.statusPrepay60`,
        defaultMessage: 'Prepay 60 days',
    },
});

const editProductRates = defineMessages({
    agentsSelected: {
        id: `${linkScope}.agentsSelected`,
        defaultMessage: '{selected} Trade Partners selected',
    },
    title: {
        id: `${linkScope}.title`,
        defaultMessage: 'Edit Product Rates',
    },
    clear: {
        id: `${linkScope}.clear`,
        defaultMessage: 'Clear',
    },
    code: {
        id: `${contentScope}.code`,
        defaultMessage: 'Code',
    },
    selectAProductRate: {
        id: `${contentScope}.selectAProductRate`,
        defaultMessage: 'Select a product rate',
    },
    remove: {
        id: `${btnScope}.remove`,
        defaultMessage: 'Remove',
    },
    add: {
        id: `${btnScope}.add`,
        defaultMessage: 'Add',
    },
    addSucceed: {
        id: `${btnScope}.addSucceed`,
        defaultMessage: '{code} has been added to Trade Partners',
    },
    removeSucceed: {
        id: `${btnScope}.removeSucceed`,
        defaultMessage: '{code} has been removed from Trade Partners',
    },
});

const subscription = defineMessages({
    brand: {
        id: `${subscriptionScope}.brand`,
        defaultMessage: 'Brand',
    },
    driverLicenceCondition: {
        id: `${subscriptionScope}.driverLicenceCondition`,
        defaultMessage: 'Driver Licence Condition',
    },
    channel: {
        id: `${subscriptionScope}.channel`,
        defaultMessage: 'Channel',
    },
    fileType: {
        id: `${subscriptionScope}.fileType`,
        defaultMessage: 'File Type',
    },
    selectChannelType: {
        id: `${subscriptionScope}.selectChannelType`,
        defaultMessage: 'Select Channel Type',
    },
    emailAddress: {
        id: `${subscriptionScope}.emailAddress`,
        defaultMessage: 'Email Address',
    },
    createSubscription: {
        id: `${subscriptionScope}.createSubscription`,
        defaultMessage: 'Create Subscription',
    },
    saveSubscription: {
        id: `${titleScope}.saveSubscription`,
        defaultMessage: 'Save Subscription',
    },
    statusSelectPlaceHolder: {
        id: `${subscriptionScope}.statusSelectPlaceHolder`,
        defaultMessage: 'Select status',
    },
});

const radioOptions = defineMessages({
    ftp: {
        id: `${radioOptionsScope}.ftp`,
        defaultMessage: 'FTP',
    },
    email: {
        id: `${radioOptionsScope}.email`,
        defaultMessage: 'Email',
    },
    domestic: {
        id: `${radioOptionsScope}.domestic`,
        defaultMessage: 'Domestic',
    },
    international: {
        id: `${radioOptionsScope}.international`,
        defaultMessage: 'International',
    },
    all: {
        id: `${radioOptionsScope}.all`,
        defaultMessage: 'All',
    },
});

export default {
    fields,
    buttons,
    titles,
    validation,
    contents,
    links,
    options,
    editProductRates,
    subscription,
    radioOptions,
};
