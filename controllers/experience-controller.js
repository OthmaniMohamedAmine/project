import fetchExperienceModel from "../models/experience.js";


function fetchExperienceData(req, res){

    fetchExperienceModel(function(data){
        res.render('view',{experience:data});
    })
}



export default fetchExperienceData;