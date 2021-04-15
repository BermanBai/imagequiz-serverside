
const express = require('express')

const cors = require('cors')

const data = require('./quizzes');


const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get('/quizzes', (request, response) => {
   response.json(data.quiz);
});

app.get('/flowers', (request, response) => {
    response.json(data.flowers);
 });

app.get('/quiz/:id', (request, response) => {
    let ids = []
    let id = request.params.id
	
    for ( i=0; i < data.quiz.length; i++) {
		
        if (data.quiz[i].id == Number(id)) {
            ids.push(data.quiz[i])
        }
    }
    response.json(ids);
 });

 app.post('/score', (request, response) => {
	 
     let score = request.body.score;
     let quizid = request.body.quizid;
     let username = request.body.username;
     data.scores.push({score : score, quizid : quizid, username : username});
	 
     response.send('The score ${s} was added successfully)
 })

 app.get('/', (request, response) => {
    response.send("Welcome to image-quiz-server side");
 });
app.listen(port, () => console.log("Listening on port " + port))