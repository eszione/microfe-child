import { useState, useMemo, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { Link as RouterLink } from 'react-router-dom';

import msg from '../messages';
import { Link } from 'cosmos-components';
import { testIds } from '../types';
/*import { usePermissions } from 'core/permissions';
import { PermissionCode } from 'core/types';*/

export const useAgentsTable = () => {
    const [selectedAgents, setSelectedAgents] = useState([]);

    const intl = useIntl();
    /*const hasProductManagementPermission = usePermissions(
        PermissionCode.ManageProduct,
    );*/
    const hasProductManagementPermission = true;

    const tableConfiguration = useMemo(
        () => [
            {
                Header: intl.formatMessage(msg.fields.name),
                accessor: ({ id, name }) => (
                    <Link
                        data-test-id={testIds.editAgentTestId}
                        as={RouterLink}
                        to={`/agents/${id.agentId}`}
                    >
                        {name}
                    </Link>
                ),
            },
            {
                Header: intl.formatMessage(msg.fields.debtorStatus),
                accessor: 'debtorStatus',
            },
            {
                Header: intl.formatMessage(msg.fields.type),
                accessor: 'type',
            },
            {
                Header: intl.formatMessage(msg.fields.group),
                accessor: 'group',
            },
            {
                Header: intl.formatMessage(msg.fields.subGroup),
                accessor: 'subGroup',
            },
            {
                Header: intl.formatMessage(msg.fields.billingAddress),
                accessor: 'billingAddress',
            },
            {
                Header: intl.formatMessage(msg.fields.status),
                accessor: 'status',
            },
        ],
        [],
    );

    const selectHandler = useCallback(
        hasProductManagementPermission &&
            ((selectedRows) => {
                setSelectedAgents(selectedRows);
            }),
        [],
    );

    return {
        selectedAgents,
        setSelectedAgents,
        tableConfiguration,
        selectHandler,
    };
};
