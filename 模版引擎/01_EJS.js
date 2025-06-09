const ejs = require('ejs');
const fs = require('fs');

// 模拟数据
let china = '中国';

let str = fs.readFileSync('./01_html.html').toString();

// console.log(str); // 输出: 我爱你中国

// 使用 EJS 模板引擎渲染字符串
let result = ejs.render(str, { china: china });

console.log(result); // 输出: 我爱你中国
