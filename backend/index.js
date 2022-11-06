const express = require('express');
const app=express();
// const port = 5000;
const userRouter =require('./router/userRouter');
const videoRouter =require('./router/videoRouter');
const utilRouter =require('./router/util');
const blogRouter =require('./router/blogRouter');
const cors = require('cors');
const api_config = require('./config');
const port = api_config.port;

app.use(express.json());

// use to connect the frontend to backend 

app.use(cors({origin:'http://localhost:3000'}));

app.use('/user',userRouter);
app.use('/video',videoRouter);
app.use('/util',utilRouter);
app.use('/blog',blogRouter);


app.get('/home',(req,res)=>{
    res.send('Namaste Duniyaaa!');
})

app.use(express.static('./static/uploads'));


app.listen(port, ()=>{
    
    console.log('the server is started');
});