import { Router } from 'express';
const candidateRouter = Router();


import fetchCandidateData  from '../controllers/candidate-controller.js';


candidateRouter.use('/fetch-data',fetchCandidateData);





export default candidateRouter;