// require dependincies
var express = require('express');
var router = express.Router();
var projectController = require('./controller/projectController');
var registrationcontroller = require ('./controller/registrationcontroller');
// var Logincontroller = require('./controller/Logincontroller');





router.get('/reg',registrationcontroller.getAllRegistration);
router.post('/registration', registrationcontroller.createRegistration);


 router.post('/login', registrationcontroller.getAllLogin);
 router.get('/',registrationcontroller.homepage);



router.get('/index', projectController.getAllProjects);
router.post('/project', projectController.createProject);






module.exports = router;
