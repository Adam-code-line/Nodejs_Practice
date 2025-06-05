const express = require('express')
const {characters} = require('./characters.json')

const app = express()

app.get('/character/:id.html',(req,res) => {

    let {id} = req.params

    let result = characters.find( item => {
        if(item.id === Number(id)) {
            return true
        }
    })
    
    if(!result) {
        res.statusCode = 404
        res.end(`<h1>404 not found</h1>`)
        return
    }

    res.end(`
        <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    <h2>${result.character_name}</h2>
    <img src="${result.character_pic}" alt="">
    </body>
    </html>
        `)
})

app.listen(3000, () => {
    console.log('服务已经启动,端口3000正在监听中');
    
})