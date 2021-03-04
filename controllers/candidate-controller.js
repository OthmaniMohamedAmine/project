import fetchCandidateModel from "../models/candidate.js";


  function fetchCandidateData(req, res){

    fetchCandidateModel(function(data){
            res.render('view',{cand:data});
        })
    }



export default fetchCandidateData;