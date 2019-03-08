'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config.json')

function createToken(user){
  const payload ={
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  }
  return jwt.encode(payload, config.secret)
}

function decodeToken(token) {
  const decoded = new Promise((resolve, reject)=>{
    try{
      const payload = jwt.decode(token, config.secret);
      if(payload.exp <= moment().unix()) {
        reject({
          status: 401,
          message: 'El token ha expirado'
        });
      }
      // console.log(`Sub: ${payload.sub}`)
      resolve(payload.sub)
    } catch(err){
      reject({
        status: 500,
        message: 'invalid token'
      })
    }
  })
  return decoded
}

module.exports = {
  createToken,
  decodeToken
}

/* const expressJwt = require('express-jwt')
const config = require('../config.json')
const userService = require('../users/user-service')

function jwt() {
  const secret = config.secret;
  return expressJwt({ secret, isRevoked }).unless({
    path: [
      // public routes that don't require authentication
      '/',
      '/users/authenticate',
      '/users/register',
      '/Productos',
      '/Usuario/Carrito',
      '/Login',
      '/Registro',
      '/Productos/Pc',
      '/Productos/Ps4',
      '/Productos/XboxOne',
      '/Usuario/ModUsuario',
      '/Productos/Buscador',
      '/Usuario/ModUsuario',
      '/api/TodoJuegos/Producto'
    ]
  })
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true)
    }

    done()
}

module.exports = jwt
 */