import { getTotal } from "..";

test("test getTotal", () => {
  expect(getTotal([3,5,6])).toEqual(14);
  expect(getTotal([0.1,0.2])).toEqual(0.3);
})