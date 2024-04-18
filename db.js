import mongoose from "mongoose"





const Connection = async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-9cznxgj-shard-00-00.uqjmmud.mongodb.net:27017,ac-9cznxgj-shard-00-01.uqjmmud.mongodb.net:27017,ac-9cznxgj-shard-00-02.uqjmmud.mongodb.net:27017/?ssl=true&replicaSet=atlas-zrlfg7-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try {
       await mongoose.connect(URL,{useNewUrlParser: true});
       console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database',error);
    }
}

export default Connection;
