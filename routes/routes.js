const express = require('express'); // imports express
const router = express.Router(); // imports router from express
const Employees = require('../model/Schemas.js'); // imports employee schema

//=========STORES EMPLOYEE DATA==========
router.post('/employeedetails', async (req, res) => {
	const {
		employeeCode,
		firstName,
		middleName,
		lastName,
		gender,
		contactNumber,
		email,
		panCard,
		dob,
		address
	} = req.body;

	const data = new Employees({
		employeeCode,
		firstName,
		middleName,
		lastName,
		gender,
		contactNumber,
		email,
		panCard,
		dob,
		address
	});

	try {
		const savedData = await data.save();
		// res.end(JSON.stringify(savedData));
		res.json(savedData);
		console.log(savedData);
	} catch (error) {
		res.json({ message: error });
	}
});

//===========GETS BACK ALL EMPLOYEES DATA============
router.get('/employeedetails', async (req, res) => {
	try {
		const data = await Employees.find();
		//res.send(JSON.stringify(data));
		res.json(data);
	} catch (error) {
		res.json({ message: error });
	}
});

//===========GETS EMPLOYEE DATA BY ID =========
router.get('/employeedetails/:id', async (req, res) => {
	try {
		const getIndividual = await Employees.findById(req.params.id);
		res.json(getIndividual);
	} catch (error) {
		res.json({ message: error });
	}
});

//=========DELETE EMPLOYEE DATA BY  ID========
router.delete('/employeedetails/:id', async (req, res) => {
	try {
		const deletedIndividual = await Employees.deleteOne({ _id: req.params.id });
		res.json(deletedIndividual);
	} catch (error) {
		res.json({ message: error });
	}
});

// router.post('/login', async (req, res) => {
// 	const data = new Schemas.Credentials({
// 		email: req.body.email,
// 		password: req.body.password
// 	});

// 	try {
// 		const loginData = await data.save();
// 		res.json(loginData);
// 	} catch (error) {
// 		res.json({ message: error });
// 	}
// });

// router.get('/login', async (req, res) => {
// 	try {
// 		const data = await Schemas.Credentials.find();
// 		res.json(data);
// 	} catch (error) {
// 		res.json({ message: error });
// 	}
// });

module.exports = router;
