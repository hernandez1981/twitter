const User = require('./../models/user')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio");
    }

    static getInfo(user){
        var values = [];
        for(var key in user){  
            values.push(user[key]);
        }            
        return values;        
    }

    static updateUserUsername(user, newUserName){
        user.username = newUserName;
    }
}

module.exports = UserService