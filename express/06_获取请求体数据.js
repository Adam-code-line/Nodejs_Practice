const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//解析json格式请求体的中间件
const jsonParser = bodyParser.json()
//解析querystring格式请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/login',(req,res) => {
    res.sendFile(__dirname+'/06_form.html')
    // res.send('表单页面')
})
app.post('/login',urlencodedParser,(req,res) => {
    console.log(req.body);
    
    res.send('获取用户的数据')
})

app.listen(3000,() => {
    console.log('server is running...');
    
})