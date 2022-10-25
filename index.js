const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

const course = require('./data/course.json');

app.get('/', (req, res) => {
	res.send('Programming API is running');
});

app.get('/categories', (req, res) => {
	res.send(categories);
});



app.get('/course/details/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedCourse = course.find((p) => p.id == id);
	res.send(selectedCourse);
    console.log(selectedCourse);
});


app.listen(port, () => {
	console.log(`Dragon news server running on port, ${port}`);
});
