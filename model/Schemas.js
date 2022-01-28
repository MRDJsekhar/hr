const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
	// employeeCode: {
	// 	type: String,
	// 	required: true
	// },
	firstName: {
		type: String,
		required: true
	},
	middleName: {
		type: String
	},
	lastName: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	contactNumber: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	panCard: {
		type: String,
		required: true
	},
	dob: {
		type: Date,
		required: true
	},
	address: {
		type: String,
		required: true
	}
});

// const LoginSchema = mongoose.Schema({
// 	email: {
// 		type: String,
// 		required: true
// 	},
// 	password: {
// 		type: String,
// 		required: true
// 	}
// });

//const Credentials = mongoose.model('credentials', LoginSchema);
module.exports = mongoose.model('employees', EmployeeSchema);

//const Schemas = { 'Employees': Employees, 'Credentials': Credentials };
