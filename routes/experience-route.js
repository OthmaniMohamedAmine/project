import { Router } from 'express';
const ExperienceRouter = Router();


import fetchExperienceData from "../controllers/experience-controller.js";


ExperienceRouter.use('/fetch-data',fetchExperienceData);





export default ExperienceRouter;