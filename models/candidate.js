
import  mongoose from 'mongoose';



// create an schema
const Schema = mongoose.Schema;
const candidatschema = new Schema({
    id : Number,
    name : String,
    email:String,
    phone :String,
    description : String,
    occupation : String,
    address:{
        address1:String,
        city:String,
        state:String,
        zip:String,
        countryID:String
    },
    spokenLanguages:[],
    categories :[],
    skills:[],
    specialties:[],
});
const candidateTable=mongoose.model('candidat',candidatschema);



    function fetchCandidateModel(callback){
        const cand=candidateTable.find({id:128646}).select({ "id":1,"name": 1,"email":1,"phone":1,"occupation":1,
            "address.address1":1,"address.city":1,"address.state":1,"address.zip":1,"address.countryID":1, "spokenLanguages":1,"categories":1,"skills":1,"specialties":1,"_id": 0});
        cand.exec(function(err, data){
            if(err) throw err;
            return callback(data);
        })

    }




export default fetchCandidateModel;