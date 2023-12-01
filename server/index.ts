import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { BookLocation } from './db';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.get('/booklocations', (req: Request, res: Response) => {
  BookLocation.findAll() 
    .then((locations: any) => {
      res.send(locations);
    })
    .catch((e: any) => {
      console.log("error", e)
      res.send(e)
    })
   
});

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
