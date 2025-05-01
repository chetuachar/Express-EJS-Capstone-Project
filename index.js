import axios from 'axios';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));


app.get("/", async (req, res) =>{
    try {
        const result = await axios.get("https://official-joke-api.appspot.com/jokes/programming/random");
        const joke = result.data[0];
        res.render('index.ejs', {
            joke: {
                setup: joke.setup,
                punchline: joke.punchline
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500);
    };
});


app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});