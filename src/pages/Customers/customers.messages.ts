import { defineMessages } from "react-intl";

const prefix = "mod.customers";
const dataField = `${prefix}.dataField`;
const btnScope = `${prefix}.buttons`;
const titleScope = `${prefix}.titles`;
const validationScope = `${prefix}.validation`;
const headersScope = `${prefix}.headers`;
const labelsScope = `${prefix}.labels`;
const optionsScope = `${prefix}.options`;
const linkScope = `${prefix}.links`;
const messageScope = `${prefix}.message`;

export const fields = defineMessages({
  name: {
    id: `${dataField}.name`,
    defaultMessage: "Name",
  },
  title: {
    id: `${dataField}.title`,
    defaultMessage: "Title",
  },
  firstName: {
    id: `${dataField}.firstName`,
    defaultMessage: "First Name",
  },
  lastName: {
    id: `${dataField}.lastName`,
    defaultMessage: "Last Name",
  },
  email: {
    id: `${dataField}.email`,
    defaultMessage: "Email Address (Unique Identifier)",
  },
  mobile: {
    id: `${dataField}.mobile`,
    defaultMessage: "Mobile Number",
  },
  customerAcceptsMarketing: {
    id: `${dataField}.customerAcceptsMarketing`,
    defaultMessage: "Customer accepts marketing",
  },
  tags: {
    id: `${dataField}.tags`,
    defaultMessage: "Tags",
  },
  comments: {
    id: `${dataField}.comments`,
    defaultMessage: "Comments",
  },
  customerNotes: {
    id: `${dataField}.customerNotes`,
    defaultMessage: "Customer Notes",
  },
});

export const buttons = defineMessages({
  create: {
    id: `${btnScope}.createButton`,
    defaultMessage: "Create Customer",
  },
  update: {
    id: `${btnScope}.updateButton`,
    defaultMessage: "Save Customer",
  },
  addCustomer: {
    id: `${btnScope}.addCustomer`,
    defaultMessage: "Add Customer",
  },
  addAddress: {
    id: `${btnScope}.addAddress`,
    defaultMessage: "Add Address",
  },
  addBooking: {
    id: `${btnScope}.addBooking`,
    defaultMessage: "Add Booking/Quote",
  },
});

export const titles = defineMessages({
  list: {
    id: `${titleScope}.list`,
    defaultMessage: "Customers - MicroFE",
  },
  create: {
    id: `${titleScope}.create`,
    defaultMessage: "Create Customer",
  },
  detail: {
    id: `${titleScope}.detail`,
    defaultMessage: "Customer Detail",
  },
  addresses: {
    id: `${titleScope}.addresses`,
    defaultMessage: "Addresses",
  },
});

export const validation = defineMessages({
  firstNameRequired: {
    id: `${validationScope}.firstName.required`,
    defaultMessage: "First name is required",
  },
  lastNameRequired: {
    id: `${validationScope}.lastName.required`,
    defaultMessage: "Last name is required",
  },
  emailRequired: {
    id: `${validationScope}.email.required`,
    defaultMessage: "Email is required",
  },
  emailInvalid: {
    id: `${validationScope}.email.invalid`,
    defaultMessage: "Invalid Email format",
  },
  emailExisting: {
    id: `${validationScope}.email.existing`,
    defaultMessage: "This email is already taken.",
  },
});

export const headers = defineMessages({
  name: {
    id: `${headersScope}.name`,
    defaultMessage: "Name",
  },
  email: {
    id: `${headersScope}.email`,
    defaultMessage: "Email",
  },
  mobilePhone: {
    id: `${headersScope}.mobilePhone`,
    defaultMessage: "Mobile Phone",
  },
  address: {
    id: `${headersScope}.address`,
    defaultMessage: "Address",
  },
  country: {
    id: `${headersScope}.country`,
    defaultMessage: "Country",
  },
  age: {
    id: `${headersScope}.age`,
    defaultMessage: "Age",
  },
  previousBookings: {
    id: `${headersScope}.previousBookings`,
    defaultMessage: "Previous Bookings",
  },
  lastBooking: {
    id: `${headersScope}.lastBooking`,
    defaultMessage: "Last Booking",
  },
  totalSpent: {
    id: `${headersScope}.totalSpent`,
    defaultMessage: "Total Spent",
  },
  lastBookingPassengers: {
    id: `${headersScope}.lastBookingPassengers`,
    defaultMessage: "Last Booking Passengers",
  },
  tags: {
    id: `${headersScope}.tags`,
    defaultMessage: "Tags",
  },
  secondaryEmail: {
    id: `${headersScope}.secondaryEmail`,
    defaultMessage: "Secondary Email",
  },
});

export const labels = defineMessages({
  adult: {
    id: `${labelsScope}.adult`,
    defaultMessage: "{noOfAdults} Adult",
  },
  children: {
    id: `${labelsScope}.children`,
    defaultMessage: "{noOfChildren} Children",
  },
  infant: {
    id: `${labelsScope}.infant`,
    defaultMessage: "{noOfInfants} Infant",
  },
});

export const options = defineMessages({
  mr: {
    id: `${optionsScope}.mr`,
    defaultMessage: "Mr.",
  },
  ms: {
    id: `${optionsScope}.ms`,
    defaultMessage: "Ms.",
  },
  mrs: {
    id: `${optionsScope}.mrs`,
    defaultMessage: "Mrs.",
  },
  miss: {
    id: `${optionsScope}.miss`,
    defaultMessage: "Miss",
  },
  dr: {
    id: `${optionsScope}.dr`,
    defaultMessage: "Dr.",
  },
});

export const links = defineMessages({
  details: {
    id: `${linkScope}.details`,
    defaultMessage: "Details",
  },
  history: {
    id: `${linkScope}.history`,
    defaultMessage: "History",
  },
});

export const messages = defineMessages({
  emailOverride: {
    id: `${messageScope}.emailOverride`,
    defaultMessage:
      "This customer email address already exists, would you like to merge this record with the existing customer?",
  },
});
