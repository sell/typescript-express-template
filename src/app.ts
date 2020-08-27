import express, { Application, Request, Response, NextFunction } from 'express';
import {errorHandler, notFound} from "./middlewares";
import cors from 'cors';
import routes from './routes';

const app: Application = express();
app.use(cors())

const add = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response) => {
    console.log(add(10, 2))
    res.send('Hello World!');
})

app.use('/api/v1', routes)

app.use(notFound)
app.use(errorHandler)

const port: number = 5000;

app.listen(port, () => {
    console.log(`Server started on https://localhost:${port}`)
})

