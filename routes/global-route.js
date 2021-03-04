import { Router } from 'express';
//const Router = Router();



import fetchCandidateData  from '../controllers/candidate-controller.js';
import fetchExperienceData from "../controllers/experience-controller.js";


Router.use('/fetch-data',fetchCandidateData(),fetchExperienceData());






export default Router;
