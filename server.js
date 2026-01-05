require('dotenv').config();
let app=require('./app')
let connection=require('./src/config/db.config')

const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
    connection();
})