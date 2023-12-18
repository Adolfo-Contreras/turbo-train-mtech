const express = require('express')
const app = express()
const port =3005

app.use(express.static('someotherthing'))
//optional character so it can be color or colour
app.get('/colou?r', (req, res)=>{
    res.send('youve been ligmad share with friends to ligma them')
})
//done with regex NO QUOTES
app.get(/apple$/,(req,res)=>{res.send('PPAP')})
//idk
app.route('banana')
.get((req,res)=>{
    res.send('bro who asked?')
}).put((req,res)=>{
    res.send('i asked')
}).delete((req,res)=>{
    res.send('deleted')
})
app.listen(port, ()=>{
    console.log(`on port:${port}`)
})