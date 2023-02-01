import express from 'express';
import {v4 as uuidv4} from 'uuid';

const router = express.Router();

let users =[ ]

// all routes in here are starting with /users
router.get('/',(req,res) =>{
    console.log(users)
    res.send(users);
});
router.get('/:id',(req,res)=>{
    const {id} =req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
})
router.delete('/:id',(req,res)=>{
    const {id} = req.params; 
    users = users.filter((user) => user.id != id);
    res.send(`User with the id ${id} deleted from database`)

})

router.post('/', (req,res) => {
    console.log('post Route Reached')
    const user = req.body;
    //const userId = uuidv4(); 
    const userWithId = { ...user, id:uuidv4()}
 
    users.push(userWithId)
    
    res.send(`user with the name ${user.firstname} has been added`) 
})
router.patch('/:id',(req,res) =>{
    const {id} = req.params;
    const {firstname, lastname,age} = req.body;
    const updatee = users.find((user) => user.id === id);
   
   
     if(firstname) {
        user.firstname = firstname
    }
    if(lastname) {
        user.lastname = lastname
    }
    if(age){
        user.age = age; 
        
        
    }
    res.send(`user with the ${id} has been updated`)


})


export default router;