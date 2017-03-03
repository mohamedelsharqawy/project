let Project = require('../model/Project');
projects = new Project(Project.projectSchema);


let projectController = {

    getAllProjects:function(req, res){

      console.log(req.query.username);
        Project.find(function(err, projects){


            if(err)
                res.send(err.message);
            else{

                res.render('index', {projects});
                        //  projects.collection.remove();

              }
        })
    },

    createProject:function(req, res){
        let project = new Project(req.body);

        project.save(function(err, project){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{
                projects.remove();
                console.log(project);
                res.redirect('/index');

            }
        })
    }
}

module.exports = projectController;
