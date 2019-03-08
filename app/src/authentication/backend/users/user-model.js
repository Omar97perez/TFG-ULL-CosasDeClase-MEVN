const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    birthdate: { type: Date },
    genre: { type: String },
    createdDate: { type: Date, default: Date.now }
});

userSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', userSchema);
