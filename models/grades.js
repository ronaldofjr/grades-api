import mongoose from 'mongoose';

// definindo schema da collection
const gradeModel = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	value: {
		type: Number,
		required: true,
	},
	lastModified: {
		type: Date,
		default: Date.now,
	},
});

// Setando model para o collection (forçando o nome no singular)
const gradesModel = mongoose.model('grades', gradeModel, 'grades');

export { gradesModel };
