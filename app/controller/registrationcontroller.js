
let registers = require('../model/registration');
// var Registrations =[{type:String},{type:String}];


let registrationcontroller = {


      getAllRegistration:function(req, res){

          registers.find(function(err){

              if(err)
                  res.send(err.message);
              else
                  res.render('reg');
          })
      },




    createRegistration:function(req, res){
        let registration = new registers(req.body);

        registration.save(function(err, Registration){

          // Registrations.collection.insert(registration);

            //  required.body.username;
            if(err){

                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(registration);

                res.render('index');

                // res.render('./views/signup');
            }
        })

},
homepage:function(req, res){
       res.render('loginview');
},
getAllLogin:function(req, res){


    registers.find({username:req.body.username} ,function(err, registers){

        if(registers==""){
            console.log("err");
            //  res.send(err.message);

          }
        else{
            console.log("suc");
            //  res.render('index');
             res.redirect('/index?username=' + req.body.username);


          }
          console.log(registers);
        //  return;
    });
}

}

module.exports = registrationcontroller;
