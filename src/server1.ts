import express, {  json, Request, Response } from "express" 
import createApp from "./application";

const app = createApp();

const port = process.env.PORT;

app.listen(port, ()=> {
    console.log( `Server running at port http://localhost${port}`)
});