import mongoose, { connection } from 'mongoose';

mongoose.connect('mongodb://localhost:27017/quora', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err)
        console.log('error connecting database')
    else
        console.log("connected to database")
})
const con = connection;

export default con;