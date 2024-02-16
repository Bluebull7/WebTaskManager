const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./api/tasks');

const app = express();
const port = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/task-manager', {
	useNewUrlParser: true.
	useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
