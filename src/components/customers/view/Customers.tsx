import { FC, Fragment, ReactNode, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

// components
import { H1 } from 'cosmos-components/dist/components/Headers';
import { Link } from 'cosmos-components/dist/components/Link';
import { Page } from 'cosmos-components/dist/components/Page';
import { PaginatedTableDeprecated } from 'cosmos-components/dist/components/deprecated/PaginatedTableDeprecated';
import { TextButton } from 'cosmos-components/dist/components/Button';

import SearchBox from "../../search-box";

// hooks
import { useCustomersSearch } from "../hooks";

// messages
import * as msg from "../messages";

// selectors
import { getCustomers } from "../selectors";

import { useSelector } from 'react-redux';

const testId = "customers-list";
export const testIds = {
  customerTableTestId: `${testId}-customer-table`,
  searchCustomersTestId: `${testId}-search-customer`,
  createCustomerTestId: `${testId}-create-customer`,
  editCustomerTestId: `${testId}-edit-customer`,
};

interface CustomersProps {
  customHeader?: ReactNode;
  linkGenerator?: (id: any) => string;
}

interface PassengersProps {
  noOfAdults: any;
  noOfChildren: any;
  noOfInfants: any;
  lastBookingPassengers: any;
}

export const Customers: FC<CustomersProps> = ({
  customHeader,
  linkGenerator,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const { loading, data, totalCount } = useSelector(getCustomers);
  useEffect(() => {
    setIsLoading(loading);
  }, [loading])
  
  const [page, pageSize, search, setSearchPagination, setSearchText] = useCustomersSearch();
  
  return (
    <Page
      header={
        customHeader ? (
          <Fragment>{customHeader}</Fragment>
        ) : (
          <Fragment>
            <H1>
              <FormattedMessage {...msg.titles.list} />
            </H1>

            <TextButton
              data-test-id={testIds.createCustomerTestId}
              as={RouterLink}
              to="/customers/new"
            >
              <FormattedMessage {...msg.buttons.addCustomer} />
            </TextButton>
          </Fragment>
        )
      }
    >
      <Search
        testId={testIds.searchCustomersTestId}
        value={search}
        minLength={2}
        onFilterUpdate={setSearchText}
      />

      <PaginatedTableDeprecated
        testId={testIds.customerTableTestId}
        isLoading={isLoading}
        configuration={tableConfiguration(linkGenerator)}
        currentPageNumber={page}
        currentPageSize={pageSize}
        totalItems={totalCount}
        data={data}
        onChange={setSearchPagination}
      />
    </Page>
  );
};

const tableConfiguration = (linkGenerator) => [
  {
      columnName: <FormattedMessage {...msg.headers.name} />,
      renderCell: ({ id, name }) => (
          <Link
              data-test-id={testIds.editCustomerTestId}
              as={RouterLink}
              to={
                  linkGenerator
                      ? linkGenerator(id)
                      : `/customers/${id.profileId}`
              }
          >
              {name}
          </Link>
      ),
  },
  {
      columnName: <FormattedMessage {...msg.headers.email} />,
      dataKey: 'email',
  },
  {
      columnName: <FormattedMessage {...msg.headers.mobilePhone} />,
      dataKey: 'mobilePhone',
  },
  {
      columnName: <FormattedMessage {...msg.headers.address} />,
      dataKey: 'address',
  },
  {
      columnName: <FormattedMessage {...msg.headers.country} />,
      dataKey: 'country',
  },
  {
      columnName: <FormattedMessage {...msg.headers.age} />,
      dataKey: 'age',
  },
  {
      columnName: <FormattedMessage {...msg.headers.previousBookings} />,
      dataKey: 'numberOfRentals',
  },
  {
      columnName: <FormattedMessage {...msg.headers.lastBooking} />,
      dataKey: 'lastBooking',
  },
  {
      columnName: <FormattedMessage {...msg.headers.totalSpent} />,
      dataKey: 'totalSpent',
  },
  {
      columnName: <FormattedMessage {...msg.headers.lastBookingPassengers} />,
      renderCell: ({ lastBookingPassengers = {} }) =>
          renderPassengers(lastBookingPassengers),
  },
  {
      columnName: <FormattedMessage {...msg.headers.tags} />,
      dataKey: 'tags',
  },
  {
      columnName: <FormattedMessage {...msg.headers.secondaryEmail} />,
      dataKey: 'secondaryEmail',
  },
];

const renderPassengers = ({
  noOfAdults,
  noOfChildren,
  noOfInfants,
}: PassengersProps) => (
  <Fragment>
      {noOfAdults && (
          <FormattedMessage {...msg.labels.adult} values={{ noOfAdults }} />
      )}
      {noOfChildren && (
          <FieldSeperator>
              <FormattedMessage
                  {...msg.labels.children}
                  values={{ noOfChildren }}
              />
          </FieldSeperator>
      )}
      {noOfInfants && (
          <FieldSeperator>
              <FormattedMessage
                  {...msg.labels.infant}
                  values={{ noOfInfants }}
              />
          </FieldSeperator>
      )}
  </Fragment>
);

const Search = styled(SearchBox)`
  width: 40rem;
  margin-bottom: 1.5rem;
`;

const FieldSeperator = styled.span`
  &:before {
    content: "\u00a0";
  }
`;
