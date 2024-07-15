//import json server
const jsonServer = require('json-server')

const router = jsonServer.router("db.json")

const middleware = jsonServer.defaults()

const learningAppServer = jsonServer.create()

learningAppServer.use(middleware)
learningAppServer.use(router)


const PORT = 3000 || process.env.PORT


learningAppServer.listen(PORT,()=>{
    console.log('Server is running');
})
