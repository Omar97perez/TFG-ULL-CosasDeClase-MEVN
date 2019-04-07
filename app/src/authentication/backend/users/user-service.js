const config = require('../config.json')
const jwt = require('../_services/jwt')
const bcrypt = require('bcryptjs')
const db = require('../_services/database')
const User = db.User;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ email, password }) {
    const user = await User.findOne({ email })

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.createToken(user)
        return {
            token
        };
    }

}

async function getAll() {
    return await User.find().select('-password')
}

async function getById(id) {
    return await User.findById(id).select('-password')
}

async function create(userParam, res) {

    if (await User.findOne({ email: userParam.email })) {
        throw Error(`El email ${userParam.email} ya está registrado`)
    }
    else {
        const user = new User(userParam)

        if (userParam.password) {
            user.password = bcrypt.hashSync(userParam.password)
        }
        await user.save()
    }
}

async function update(id, userParam) {
    const user = await User.findById(id)

    if (!user) throw 'User not found'
    if (user.email !== userParam.email && await User.findOne({ email: userParam.email })) {
        throw Error(`email ${userParam.email} is already taken`)
    }

    if (userParam.password) {
        user.password = bcrypt.hashSync(userParam.password, 10)
    }
    if(userParam.name) {
        user.name = userParam.name
    }
    if(userParam.surname) {
        user.surname = userParam.surname
    }
    if(userParam.email) {
        user.email = userParam.email
    }
    if(userParam.paragraph) {
        user.paragraph = userParam.paragraph
    }
    if(userParam.image) {
        user.image = userParam.image
    }
    if(userParam.telephone) {
        user.telephone = userParam.telephone
    }
    if(userParam.birthdate) {
        user.birthdate = userParam.birthdate
    }
    if(userParam.genre) {
        user.genre = userParam.genre
    }

    await user.save()
}

async function _delete(id) {
    await User.findByIdAndRemove(id)
}
