const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs'); // 设置 EJS 作为模板引擎

app.set('views', path.resolve(__dirname,'./views')); // 设置视图文件夹


app.get('/home', (req, res) => {
    let title = 'EJS 模板引擎';
    res.render('home', { title: title });
});

app.listen(3000, () => {
    console.log('服务器启动成功，端口号：3000');
});