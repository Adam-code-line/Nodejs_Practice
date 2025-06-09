const ejs = require('ejs');
const fs = require('fs');

// 模拟数据
const data = ['人人为我', '我为人人', '人人为我', '我为人人'];

let html = fs.readFileSync('./02_html.html').toString();

let result = ejs.render(html, { data: data })

console.log(result);



