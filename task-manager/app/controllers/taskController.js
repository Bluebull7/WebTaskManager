const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
	try {
	     const tasks = await Task.find();
		res.json(tasks);

	} catch (error) {
		res.status(500).json({ message: error.message });
	}

};

// imlement CRUD operations
//
//
