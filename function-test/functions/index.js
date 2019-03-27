const functions = require('firebase-functions');

const usuarioController = require("./components/usuarios/UsuarioController.js");

exports.creacionUsuario = functions.auth
    .user()
    .onCreate(usuarioController.usuarioCreacionController)

exports.creacionUsuario = functions.auth
    .user()
    .onDelete(usuarioController.usuarioEliminadoController)

exports.creacionUsuario = functions.auth
    .user()
    .onCreate(usuarioController.creacionUsuarioCRM)