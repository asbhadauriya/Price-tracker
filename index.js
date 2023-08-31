import express from "express";
import http from "http";
import conf from "./db/db.js";
import "dotenv/config";
import Router from "./routes/share.js";
import cors from "./cors/cors.js";
const app=express();
app.use(cors)
app.use(express.json());
app.get('/',(req,res)=>{
    console.log('this api hi');
    return res.json({status:'Working'})
})
conf();
app.use(Router);
const server=http.createServer(app);
server.listen(3001,console.log('server is listining'))

