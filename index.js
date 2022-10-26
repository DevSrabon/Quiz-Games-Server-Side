const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/course.json');

const courseDetail = require('./data/courseDetails.json');

app.get('/', (req, res) => {
	res.send('Programming API is running');
});

app.get('/courses', (req, res) => {
	res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedCourse = courseDetail.find((p) => p.id == id);
	res.send(selectedCourse);
    console.log(selectedCourse);
});


app.listen(port, () => {
	console.log(`Programming server running on port, ${port}`);
});
