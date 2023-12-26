const nowDate = new Date();
console.log(nowDate)
const year = nowDate.getFullYear();
const day = nowDate.getDate();     
const month = nowDate.getMonth() + 1; 

console.log(year + '年' + month + '月' + day + '日');
