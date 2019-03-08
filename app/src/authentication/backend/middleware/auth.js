'use strict'

const services = require('../_services/jwt')
const userService = require('../users/user-service')

function isAuth (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: 'No tienes autorización' })
  }

  const token = req.headers.authorization // .split(' ')[1]
  // console.log(token)
  services.decodeToken(token)
    .then(response => {
      userService.getById(response)
      .then(payload => {
        // console.log(payload)
        if(payload.email != "root@root.com") {
          return res.status(403).send({ message: 'No tienes autorización' })
        }
        req.user = response
        //next()
      })
      .catch(response => {
        // console.log(response)
        res.status(response.status)
      })
      req.user = response
      next()
      
    })
    .catch(response => {
      res.status(response.status)
    })
}

module.exports = isAuth