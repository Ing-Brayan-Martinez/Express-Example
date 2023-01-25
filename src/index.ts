import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import {getResult} from "./controller/hola";
import Optional from "optional-js";
import timeout from 'connect-timeout';


dotenv.config();

const result: Optional<number> = getResult();

if (result.isPresent()) {
    console.log()
}

export const app: Express = express();

const port = process.env.PORT;

app.use(timeout('8s'))

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

