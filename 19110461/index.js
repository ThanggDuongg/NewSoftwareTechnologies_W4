const express = require('express');
const app = express();
const PORT = 5000;
const getAllRouter = require('./routers/Routers');
const  messageRouter = require('./routers/MessageRouter')
const router19110461 = require('./routers/19110461Router')

app.use(express.json());
app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/', getAllRouter)
app.use('/message', messageRouter)
app.use('/19110461', router19110461)

app.listen(PORT);
