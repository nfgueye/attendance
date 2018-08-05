const   express = require ('express'),
        router = express.Router(),
        passport = require('passport'),
        jwt = require ('jsonwebtoken'),
        User = require ('../models/user'),
        config = require ('../config/database');

router.post('/inscription', (req,res,next)  => {
    let newEmployee = new Employee({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        dateOfBirth:req.body.dateOfBirth,
        telephone:req.body.telephone,
        username:req.body.username,
        password:req.body.password,
        service: req.body.service,
        fonction:req.body.fonction,
        statut:req.body.statut,
        matricucle: req.body.matricucle,
        activite: req.body.activite
    })
    console.log (newEmployee);
    User.addUser(newEmployee, (err,employee) =>{
        if (err){
            res.json({succes:false,msg:'Failed to register employee '});
        }else{
            res.json({succes:true,msg:'Employee registered'});
        }
    })
});
router.post('/login', (req,res,next)  => {
    const username = req.body.username;
    const password = req.body.password;
    User.getEmployeeByUsername(username, (err,employee) => {
        if (err) throw err;
        if(!employee){
            return res.json({succes: false, msg:'Employee not found'});
        }else{
            User.comparePassword(password,employee.password, (err,isMatch) =>{
                if(err) throw err;
                if(isMatch){
                    const token = jwt.sign({data:employee},config.secret,{
                        expiresIn:400 //1 day
                    });
                    res.json({
                        success:true,
                        token:'JWT '+token,
                        employee:{
                            id:user._id,
                            firstname:employee.firstname, 
                            lastname:employee.lastname,
                            service:employee.service,
                            fonction:employee.fonction,
                            status:employee.statut,
                            activite : employee.activite
                        }
                    })

                }else{
                    return res.json({succes: false, msg:'Wrong pasword'});
                }

            })
        }
    })
});
router.get('/profil', passport.authenticate('jwt',{session:false}),(req,res,next)  => {
    res.json({employee:req.employee});
});


module.exports = router; 