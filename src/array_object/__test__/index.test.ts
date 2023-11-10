import { getTotalBy,duplicateArr } from "..";

test("test getTotalBy", () => {
  const fruits = [
    {name: 'apple', price: 0.1},
    {name: 'pear', price: 0.2},
  ];
  expect(getTotalBy(fruits,'price')).toEqual(0.3);
})

test("test duplicateArr", () => {
  const arr = [
    {name:'zuo',id:1},
    {name:'yang',id:2},
    {name:'zuo',id:1},
    {name:'yang',id:2},
  ]
  const result = duplicateArr(arr,'id')
  expect(result).toEqual([
    {name:'zuo',id:1},
    {name:'yang',id:2}
  ]);
})