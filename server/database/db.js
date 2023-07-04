import mongoose from "mongoose"
   

const Connection = async (URL) =>{

    try{
      await  mongoose.connect(URL,{useNewUrlParser: true})
      console.log("Database connected successfully") 
    }catch(err){ 
        console.log("Error while connecting to database",err)
    }
}

export default Connection  