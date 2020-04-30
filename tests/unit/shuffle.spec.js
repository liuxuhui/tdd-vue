const {shuffle} = require("../../src/utils/tools");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

it('Should 返回25项不同的数字 When 输入1~25', function () {
  const result = shuffle(arr);
  const asc = result.sort();//将结果重新排为正序，方便数组对比
  expect(asc.toString()).toEqual(arr.toString());//回归正序后应和原始数值相同
});


it('Should 100条不同的乱序结果 When 乱序100次', function () {
  let arrGroup = [];
  for (let i = 0; i < 100; i++) {
    const temp = shuffle(arr).toString();
    expect(arrGroup.includes(temp)).toBeFalsy();
    arrGroup.push(temp);
  }
});

