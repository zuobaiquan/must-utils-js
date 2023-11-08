import { getFileType,getLastName } from "..";

test("test getFileType", () => {
  expect(getFileType("index.html")).toEqual("html");
  expect(getFileType("https://static.xxx.cn/upload/2023829/t1693302659947blobid0.png")).toEqual("png");
});
test("test getLastName", () => {
  expect(getLastName("index.html")).toEqual("index.html");
  expect(getLastName("https://static.xxx.cn/upload/2023829/t1693302659947blobid0.png")).toEqual("t1693302659947blobid0.png");
});