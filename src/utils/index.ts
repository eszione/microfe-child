import moment, { Moment } from "moment";

export const concatStrings = (
  strs: string[],
  separator: string = ", "
): string => (strs || []).filter((str) => str && str.length).join(separator);

export const PACIFIC_LOCALES = ["en-AU", "en-NZ"];
export const USER_INPUT_FORMAT = {
  PACIFIC: {
    FORMATS: ["DD/MM/YYYY", "D MMM, YYYY"],
    datePicker: {
      FORMAT: "D MMM, YYYY",
    },
  },
  USA: {
    FORMATS: ["MM/DD/YYYY", "MMM D, YYYY"],
    datePicker: {
      FORMAT: "MMM D, YYYY",
    },
  },
};

const locale = window.navigator["userLanguage"] || window.navigator.language;
const isPacificTime = PACIFIC_LOCALES.includes(locale);

export const dateFormat = isPacificTime
  ? USER_INPUT_FORMAT.PACIFIC.datePicker.FORMAT
  : USER_INPUT_FORMAT.USA.datePicker.FORMAT;

export const DATE_FORMAT_GLOBAL = dateFormat || "MMM D, YYYY";

export const formatDate = (
  date: any,
  formatType: string = DATE_FORMAT_GLOBAL
) => {
  if (moment.isMoment(date)) {
    return date.format(formatType);
  } else {
    return date && typeof date === "string" && !date.startsWith("0001-01-01")
      ? moment(date).format(formatType)
      : null;
  }
};
