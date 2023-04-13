const jwt=require('jsonwebtoken');
const {JWT_KEY}=require('../config/serverconfig');

const bcrypt=require('bcrypt');

const UserRepository=require('../repository/user-repository');

class UserService {
    constructor()
    {
        this.userRepository =new UserRepository();

    }

    async create(data)
    {
        try {
            const  user=await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async signIn(email,PlainPassword)
    {
        try {
            //fetch the user using the email
            const user=await this.userRepository.getByEmail(email);
            // compare incoming plain password with stored encrypted password
            const passwordsMatch=this.checkPassword(PlainPassword,user.password);
            if(!passwordsMatch)
            {
                console.log("password doesn't match");
                throw {error:'Incorrect password'};
            } 
            //if passwords match then create a token and send it to the user
            const newJWT=this.createToken({email:user.email,id:user.id});
            return newJWT;
        } catch (error) {
            console.log("Something went wrong in the sign in process");
            throw error;
        }
    }

    createToken(user)
    {
        try {
            const result=jwt.sign(user,JWT_KEY,{expiresIn:'1h'});
            return result;
        } catch (error) {
            console.log("Something went wrong in the token creation");
            throw error;
        }
    } 

    verifyToken(token)
    {
        try {
            const response=jwt.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong in the token verification");
            throw error;
        }
    }

    checkPassword(userInputPlainPassword,encryptedPassword)
    {
       try {
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
       } catch (error) {
        console.log("Something went wrong in password comparison");
        throw error;
       } 
    }
}

module.exports= UserService;