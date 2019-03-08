const express = require('express');
const router = express.Router();
const userService = require('./user-service');
const jwt = require('../_services/jwt');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);
router.post('/user_data', data_user);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(token => token ? res.status(201).json(token) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    // console.log(req.body)
    // console.log("function register")
    userService.create(req.body)
        .then(() =>  res.status(201).send({}))
        .catch(err => {
            //console.log(err)
            next(err)
            
        });
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    const token = req.headers.authorization
    jwt.decodeToken(token)
    .then(response => {
        // console.log("faksdjfs")
        // console.log(response)
        // console.log(req.params.id)
        if((response != req.params.id) && (response.email != "root@root.com")) {
            return res.status(403).send({ message: 'No tienes autorización' })
        }
        userService.update(req.params.id, req.body)
        .then(() => res.status(201).json({ message: 'Usuario modificado correctamente' }))
        .catch(err => next(err));
    })
    .catch(err => next(err))
    
}

function _delete(req, res, next) {
    const token = req.headers.authorization
    jwt.decodeToken(token)
    .then(response => {
        if((response != req.params.id) && (response.email != "root@root.com")) {
            return res.status(403).send({ message: 'No tienes autorización' })
        }
        userService.delete(req.params.id)
        .then(() => { 
            res.status(201).json({ message: 'Usuario eliminado correctamente'})
        })
        .catch(err => next(err));
    })
    .catch(err => next(err))
}

function data_user(req, res, next) {
    if(!req.body.token) {
        return res.status(403).send({ message: 'No tienes autorización' })
    }
    const token = req.body.token
    // console.log(token)
    jwt.decodeToken(token)
    .then(payload=> {
        // console.log(payload)
        userService.getById(payload)
        // .then(user => {console.log(user)})
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
    })
}