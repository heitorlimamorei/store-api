import mongoose from 'mongoose';



async function connect(){
    const uri = "mongodb://heitorlmoreira:heitor007@cluster0.92ns9kz.mongodb.net/?retryWrites=true&w=majority";
    return mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, dbName: "store"})
}
export default connect