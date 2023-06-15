import moment from "moment";
import numeral from "numeral";
import { createSelector } from "reselect";
import { concatStrings, formatDate } from "../../utils/index";

export const getCustomersRaw = (state: any) => state.customers;

//export const selectOrganizationCurrencySymbol = (state: any) => state.core.organizationSettings.data?.currency?.currencySymbol;

export const getCustomers = createSelector(
  getCustomersRaw,
  //selectOrganizationCurrencySymbol,
  (customerData) => {
    const loading = customerData.loading;
    const totalCount = customerData.totalCount;
    const data = (customerData.data || []).map((item: any) => {
      const {
        id,
        address,
        firstName,
        lastName,
        emails,
        birthDate,
        rentals,
        tags,
        primaryEmail,
        primaryPhone,
      } = item;

      const {
        last: {
          profiles: {
            noOfPassengers = null,
            noOfAdults = null,
            noOfChildren = null,
            noOfInfants = null,
          } = {},
        } = {},
      } = rentals || {};

      return {
        id,
        name: concatStrings([firstName, lastName], " "),
        email: primaryEmail?.address || "",
        mobilePhone: primaryPhone?.number || "",
        address,
        age: birthDate,
        tags: concatStrings(tags),
        secondaryEmail: concatStrings(
          emails
            ?.filter((email: any) => email.type === "Secondary Email")
            .map((email: any) => email.address)
        ),
        numberOfRentals: rentals?.count,
        lastBooking: formatDate(rentals?.last?.bookingDate),
        totalSpent: "$" + numeral(rentals?.totalSpent).format("0,0.00"),
        lastBookingPassengers: {
          ...(noOfPassengers && { noOfPassengers }),
          ...(noOfAdults && { noOfAdults }),
          ...(noOfChildren && { noOfChildren }),
          ...(noOfInfants && { noOfInfants }),
        },
      };
    });

    return { loading, data, totalCount };
  }
);

/*

export const getCustomer = createSelector(
  getCustomerRaw,
  getAddress,
  (customer: any, addresses: any) => {
    const customerDetail = customer?.data?.customer;
    const commentDetail = customer?.data?.comment || {};

    if (!customerDetail) {
      return customer;
    }

    const data = {
      ...customer.data,
      customer: {
        ...customerDetail,
        comments: commentDetail.text,
        tags: customerDetail?.tags?.map((tag: any) => ({
          label: tag.label ?? tag,
          value: tag.value ?? tag,
        })),
        addresses,
      },
    };

    return { ...customer, data };
  }
);

export const selectSearchProfile = createSelector(
  selectSearchProfileRaw,
  ({ data }) => {
    if (!data || !data?.customer) {
      return;
    }
    const {
      title,
      firstName,
      lastName,
      emails = [],
      phones = [],
      primaryPhone = {},
      primaryEmail = {},
      id,
    } = data.customer;

    const getPrimary = ({ primary }) => primary;

    const phone =
      (getPrimary(primaryPhone) && primaryPhone.number) ||
      phones.find((profilePhone: any) => getPrimary(profilePhone))?.number;

    const email =
      (getPrimary(primaryEmail) && primaryEmail.address) ||
      emails.find((profileEmail: any) => getPrimary(profileEmail))?.address;

    return {
      title,
      firstName,
      lastName,
      email: email ?? "",
      phone,
      id: id?.profileId,
    };
  }
);

*/
