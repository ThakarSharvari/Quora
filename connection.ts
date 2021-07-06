import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/quora', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("connected to database")
})
const con = mongoose.connection;

export default con;