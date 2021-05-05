
var mongoose = require('mongoose');
var schema = require('./student-squema');

mongoose.connect('mongodb://localhost:27017/eje06');

//Parametros: nombre del modelo, nombre de la coleccion
var Student = mongoose.model('Student',schema, 'students');

var user = new Student({
    name: 'John Smith',
    email: 'John@smith.io',
    grade: 90
});

user.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("saved!!");
    //process.exit(0);
    Student.find({}, function(error, docs){
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log("---Consulta---");
        console.log(docs);
        Student.update({
            _id:"6091ee006f583f8f15fdd37e"
        },{
            $set:{name:"Agustin de Jesus Hernandez"}
        },
        function(error, docs){
            if(error){
                console.log(error);
                process.exit(1);
            }
            console.log("--Actualizacion--");
            console.log(docs);
            Student.find({}, function(error, docs){
                if(error){
                    console.log(error);
                    process.exit(1);
                }
                console.log("--Consulta--");
                console.log(docs);
                Student.findByIdAndRemove({_id:"6091ed9f4aa7d085a9fc8a86"}, function(error, docs){
                    if(error){      
                        console.log(error);
                        process.exit(1);
                    }
                    console.log("--Eliminicacion--");
                    console.log(docs);
                    Student.find({}, function(error, docs){
                        if(error){
                            console.log(error);
                            process.exit(1);
                        }
                        console.log("--Consulta 2--");
                        console.log(docs);
                        process.exit(0);
                    });
                });
            });
        });
    });
});


