import mongoose from 'mongoose';
const conf=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{console.log('mongo is connected')}).catch((err)=>console.log(err)); 
}
export default conf;