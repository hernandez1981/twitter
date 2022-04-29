const User = require('./../../app/models/user');

describe("Unit Tests for User class", () => {
    
    test('Create an User object', () => { 
        const user = new User(1, "carlogilmar", "Carlo", "Bio", "dateCreated", "lastUpdated")      
        expect(user.id).toBe(1);
        expect(user.username).toBe("carlogilmar");
        expect(user.name).toBe("Carlo");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).toBe("dateCreated");//Verifica que el valor no sea undefine
        expect(user.lastUpdated).toBe("lastUpdated");      
    });  
})