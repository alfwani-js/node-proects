import {v4 as uuidv4} from 'uuid';
 

export const getUser =(req,res) =>{
    
    res.send(users);
}
 

export const createUser = (req,res) => {
    console.log('post Route Reached')
    const user = req.body;
    //const userId = uuidv4(); 
    const userWithId = { ...user, id:uuidv4()}
 
    users.push(userWithId)
    
    res.send(`user with the name ${user.firstname} has been added`) 
}