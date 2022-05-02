const User = require('./../../app/models/User');

class UserView {
    constructor(){

    }

    static createUser(payload) {        
        if (payload === null) {
            return {
                error : 'payload no existe'
            }
        }

        if (payload.username === null || payload.name === null ||
            payload.id === null) {
            return {
                error : 'necesitan tener un valor válido'
            }
        }

        // if (  payload.username === undefined || payload.name === undefined  ||
        //     payload.id === undefined  ) {
        //     return {
        //         error : 'necesitan tener un valor válido'
        //     }
        // }

        // let user = new User();
        // user.name = payload.name;
        // user.username = payload.username;
        // user.id = payload.id;
        // return user;

        // return new User(payload.id, payload.username, payload.name);

    }

}

module.exports = UserView