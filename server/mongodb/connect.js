import mongoose from "mongoose";    

const connectDB=()=>{
    mongoose.set('strictQuery',true);
     mongoose.connect("mongodb+srv://:password@cluster0.wibd6cr.mongodb.net/")
     .then(()=>{
        console.log("MongoDB Connected");
     }).catch((err)=>{
        console.log(err);
     })
   
}

export default connectDB;