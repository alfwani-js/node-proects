import express from 'express';

const router = express.Router();

const users =[
    {
        name:"John",
        lastName:"Doe",
        age:25
    },
    {
        firstname:"ian",
        lastname:"makale",
        age:23
    } 
]

// all routes in here are starting with /users
router.get('/',(req,res) =>{
    console.log(users)
    res.send(users);
});

router.post('/', (req,res) => {
    console.log('post Route Reached')
    const user = req.body;

    users.push(user)
    
    res.send(`user with the name ${user.firstname} has been added`) 
})


export default router;