const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json())
let statusrouter=require('./src/routes/status.routes')
let factrouter=require('./src/routes/fact.routes')
let productrouter=require('./src/routes/product.route')
app.use('/',statusrouter)
app.use('/api',factrouter)
app.use('/v2',productrouter)
module.exports=app