const config = require('../config.json')
// const jwt = require('jsonwebtoken')
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
        //console.log(user)
        // const { password, ...userWithoutHash } = user.toObject()
        // console.log(...userWithoutHash)
        const token = jwt.createToken(user)
        //console.log(token)
        return {
            // ...userWithoutHash,
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

    // validate
    if (await User.findOne({ email: userParam.email })) {
        // console.log("el email existe")
        //throw 'email "' + userParam.email + '" is already taken'
        throw Error(`El email ${userParam.email} ya está registrado`)
        //res.status(400).send({message: "Los datos introducidos no son válidos"})
    }
    else {
        // console.log("1234")
        const user = new User(userParam)
        // console.log(userParam)

        // hash password
        if (userParam.password) {
            user.password = bcrypt.hashSync(userParam.password)
        }
        // console.log(user)
        // save user
        await user.save()
        // user.save()
    }
}

async function update(id, userParam) {
    const user = await User.findById(id)
    // console.log(userParam)
    // validate
    if (!user) throw 'User not found'
    if (user.email !== userParam.email && await User.findOne({ email: userParam.email })) {
        // throw 'email "' + userParam.email + '" is already taken'
        throw Error(`email ${userParam.email} is already taken`)
    }

    // hash password if it was entered
    if (userParam.password) {
        //console.log(userParam.password)
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
    // copy userParam properties to user
    // Object.assign(user, userParam)
    // console.log("USUARIO MODIFICADO")
    // console.log(user)

    await user.save()
}

async function _delete(id) {
    await User.findByIdAndRemove(id)
}
