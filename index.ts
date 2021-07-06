import express from 'express';
import con from './connection';
import routes from './server';

const app = express();
const PORT = 7000;


app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(PORT, () => {
    console.log(`Express with Typescript! http://localhost:${PORT}`);
});

app.use(express.json())
app.set('', con)
app.use(routes)
