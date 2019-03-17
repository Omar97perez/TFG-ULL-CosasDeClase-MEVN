const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    paragraph: { type: String, required: true },
    image: { type: String, required: true },
    telephone: { type: String, required: true },
    birthdate: String,
    genre: { type: String },
    createdDate: { type: Date, default: Date.now }
});

userSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', userSchema);
