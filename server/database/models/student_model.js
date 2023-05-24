import { Schema ,model} from "mongoose";


const student = new Schema({
  first_name:{ 
    type: String,
    required:true
},
last_name:{
    type:String,
    required:true
},
user_code:{
    type:String,
    required:true
},
courses_id:{ 
    type: [String],
    required:false
}
});


export default model("student",student);
