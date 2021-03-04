import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import candidateRouter from "./routes/candidate-route.js";
import ExperienceRouter from "./routes/experience-route.js";
//import Router from "./routes/global-route.js";


'use strict';
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://kabaka:kabaka@candidat.3g6ci.mongodb.net/database?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('Server Running on Port: http://localhost:${PORT}')))
    .catch((error) => console.log('${error} did not connect'));

app.use('/', candidateRouter);
app.use('/', ExperienceRouter);
