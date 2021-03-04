
import  mongoose from 'mongoose';



// create an schema
const Schema = mongoose.Schema;
const experienceschema = new Schema({
    candidateId : String,
    companyName : String,
    title:String,
    startDate :Number,
    endDate : Number,
    summary : String,

});
const experinceTable = mongoose.model('workHistory',experienceschema);



function fetchExperienceModel(callback){
    const experience=experinceTable.find({candidateId:"603c07ff44e144a3cd281290"}).select({ "companyName": 1,"title":1,"startDate":1,
        "endDate":1, "summary":1,"_id": 0});
    experience.exec(function(err, data){
        if(err) throw err;
        return callback(data);
    })

}




export default fetchExperienceModel;