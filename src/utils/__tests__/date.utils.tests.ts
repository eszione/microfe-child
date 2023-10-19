import { dateFormat } from '../date.utils';

// Sample test
describe("dateFormat", () => {
    it("US date format when not pacific locale", () => {
        expect(dateFormat).toEqual("MMM D, YYYY")
    });
});