import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {hola} from "@/controller/hola";

dotenv.config();

console.log(hola());

const app: Express = express();

const port: any =  process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

