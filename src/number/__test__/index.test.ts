import { toChineseNum } from "..";

test("test toChineseNum", () => {
  expect(toChineseNum("")).toEqual("");
  expect(toChineseNum(0)).toEqual("零");
  expect(toChineseNum(18)).toEqual("一十八");
  expect(toChineseNum(1000)).toEqual("一千");
  expect(toChineseNum(10102)).toEqual("一万零一百零二");
});