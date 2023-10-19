import moment from "moment";
import numeral from "numeral";
import { createSelector } from "reselect";
import { formatDate } from "../../utils/date.utils";
import { getHostState } from "../../core/window/window.utils";
import { concatStrings } from "../../utils/string.utils";

export const getCustomersRaw = (state: any) => state.customers;

export const getCustomers = createSelector(
  getCustomersRaw,
  (customers) => {
    //Retrieving state from the host
    const selectCurrencySymbol = getHostState().getOrganizationSettings()?.data?.currency?.currencySymbol ?? '$';
    const data = (customers.data || []).map((item) => {
        const {
            id,
            addresses,
            firstName,
            lastName,
            emails,
            birthDate,
            rentals,
            tags,
            primaryEmail,
            primaryPhone,
        } = item;

        const lastPhysicalAddress = addresses
            .filter((addr) => addr.type === 'Physical')
            .slice(-1)[0];

        const { line1, line2, city, country } = lastPhysicalAddress || {};
        const {
            last: {
                profiles: {
                    noOfPassengers = null,
                    noOfAdults = null,
                    noOfChildren = null,
                    noOfInfants = null,
                } = {},
                bookingDate = moment(),
            } = {},
        } = rentals || {};

        return {
            id,
            name: concatStrings([firstName, lastName], ' '),
            email: primaryEmail?.address || '',
            mobilePhone: primaryPhone?.number || '',
            address: concatStrings([line1, line2, city]),
            country,
            ...(!birthDate.startsWith('0001-01-01') &&
                moment(birthDate).isValid() && {
                    age: moment(bookingDate).diff(
                        moment(birthDate),
                        'years',
                    ),
                }),
            tags: concatStrings(tags),
            secondaryEmail: concatStrings(
                emails
                    ?.filter((email) => email.type === 'Secondary Email')
                    .map((email) => email.address),
            ),
            numberOfRentals: rentals?.count,
            lastBooking: formatDate(rentals?.last?.bookingDate),
            totalSpent:
                selectCurrencySymbol +
                numeral(rentals?.totalSpent).format('0,0.00'),
            lastBookingPassengers: {
                ...(noOfPassengers && { noOfPassengers }),
                ...(noOfAdults && { noOfAdults }),
                ...(noOfChildren && { noOfChildren }),
                ...(noOfInfants && { noOfInfants }),
            },
        };
    });

    return { ...customers, data };
  },
);
