const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res = response ) => {

    const { email, password } = req.body;

    try {

        let usuario = await Usuario.findOne({ email: email });
        // console.log(usuario);

        if( usuario ){
            return res.status(400).json({
                ok: false,
                msg: "Ya existe un usuario con ese correo"
            });
        }

        //Pasar al modelo  
        usuario = new Usuario(req.body);

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );

        // Grabar en la BD
        await usuario.save();

        // Generar nuestro JWT
        const token = await generarJWT(usuario.id, usuario.name);

        return res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token: token 
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg:'Por favor hable con el administrador'
        });
    }
}

const loginUsuario = async (req, res = response ) => {

    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ email: email });

        if( !usuario ){
            return res.status(400).json({
                ok: false,
                msg: "El usuario no existe con ese email"
            });
        }

        // Confirmar 2 passwords
        const validPassword = bcrypt.compareSync( password, usuario.password );

        if( !validPassword ){
            return res.status(400).json({
                ok: false,
                msg: "Password incorrecto"
            });
        }

        // Generar nuestro JWT
        const token = await generarJWT(usuario.id, usuario.name);

        return res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token: token
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg:'Por favor hable con el administrador'
        });
    }
}

const revalidarToken = async (req, res = response ) => {

    const {uid, name} = req;
    
    //Generar un nuevo JWT y retornarlo en esta peticion
    const token = await generarJWT(uid, name);

    return res.status(201).json({
        ok: true,
        token
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
}