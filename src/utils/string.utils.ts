export const concatStrings = (
    strs: string[],
    separator: string = ", "
  ): string => (strs || []).filter((str) => str && str.length).join(separator);
