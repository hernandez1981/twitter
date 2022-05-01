const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {

    test("1. Create a new user using the UserService", () => {    
        const user = UserService.create(1, "carlogilmar", "Carlo");      
        expect(user.username).toBe("carlogilmar");
        expect(user.name).toBe("Carlo");      
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    });

    test("2. Get all user data in a list", () => {
        const user = UserService.create(5, "Nicholas", "Hernandez"); 
        const userInfoInList = UserService.getInfo(user); 
        expect(userInfoInList[0]).toBe(5);            
        expect(userInfoInList[1]).toBe("Nicholas");
        expect(userInfoInList[2]).toBe("Hernandez");
        expect(userInfoInList[3]).toBe("Sin bio"); 
    });

    test("3. Update username", () => {  
        const user = UserService.create(1, "carlogilmar", "Carlo"); 
        UserService.updateUserUsername(user, "Coquillo");
        expect(user.username).toBe("Coquillo");  
    });
}) 