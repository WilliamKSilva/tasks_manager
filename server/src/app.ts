import express from 'express';
import cors from 'cors';

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

export { app } 