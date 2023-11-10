import { formatNum,isEmptyStr } from "..";

test("test formatNum", () => {
  expect(formatNum(0)).toEqual("00");
  expect(formatNum(8)).toEqual("08");
  expect(formatNum(18)).toEqual("18");
});


test("test isEmptyStr", () => {
  expect(isEmptyStr(0)).toEqual(false);
  expect(isEmptyStr('')).toEqual(true);
});