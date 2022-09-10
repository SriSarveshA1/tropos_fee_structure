
                       
const readline=require('readline-sync');
var {structure_of_fee}=require("./utils/structure_file");
var {fee_object,nationality_type_object,courses_object, levels_object, amount}=require("./utils/constants");


var reference_to_the_json=JSON.stringify(structure_of_fee);//This holds the reference to JSON stringify mentioned in the problem statement.
console.log(typeof reference_to_the_json);

function to_return_nationality(fee_type)
{
    //So Based on the Fee type that User Enters we are asking to Enter the Nationality of the user 

    if(fee_type==fee_object['Exam Fee'])
    {
        var option=readline.question("Enter the options 1 for "+nationality_type_object['INDIAN']+" option 2 for "+nationality_type_object['FOREIGN']+" option 3 for "+nationality_type_object['NRI']+" option 4 for "+nationality_type_object['SAARC']+" = ")
        option=parseInt(option);
        /*
        1.for Indian
        2.for Foreign
        3.for NRI
        4.for SAARC
         */
        switch(option)
        {
            case 1:return nationality_type_object['INDIAN'];
            case 2:return nationality_type_object['FOREIGN'];
            case 3:return nationality_type_object['NRI'];
            case 4:return nationality_type_object['SAARC']
            default:return undefined;
        }
    }
    else{
        if(fee_type==fee_object['Application Fee'])
        {
            var option=readline.question("Enter the options 1 for "+nationality_type_object['INDIAN']+" option 2 for "+nationality_type_object['FOREIGN']+" = ");
            option=parseInt(option);
            switch(option)
            {
                case 1:return nationality_type_object['INDIAN'];
                case 2:return nationality_type_object['FOREIGN'];
                default:return undefined;
            }
        }
    }
   
}

function to_return_courses()
{
    //So what ever may be nationality_type or Fee_Type the courses offered are same(thats what specified in the json given in the question description)

    var option=readline.question("Enter the option 1 for "+courses_object['Ayurveda']+" option 2 for "+courses_object['Dental']+" option 3 for "+courses_object['Medical']+" = ");
    option=parseInt(option);
    switch(option)
    {
        case 1:return courses_object['Ayurveda'];
        case 2:return courses_object['Dental'];
        case 3:return courses_object['Medical'];
        default:return undefined;
    }
}

function to_return_level(fee_type)
{
    //So what ever may be the course that has been choosen the levels will be same
    if(fee_type==fee_object['Exam Fee'])
    {
        var option=readline.question("Enter the option 1 for "+levels_object['DIPLOMA']+" option 2 for "+levels_object["PG"]+" option 3 for "+levels_object["Ph.D"]+" option 4 for "+levels_object["UG"]+" = ");
        option=parseInt(option);
        
        switch(option)
        {
            case 1:return levels_object['DIPLOMA'];
            case 2:return levels_object["PG"];
            case 3:return levels_object["Ph.D"];
            case 4:return levels_object["UG"];
            default:return undefined;
        }
    }
    else{
        if(fee_type==fee_object['Application Fee'])
        {
            var option=readline.question("Enter the option 1 for "+levels_object['UG-DIPLOMA']+" option 2 for "+levels_object["PG"]+" option 3 for "+levels_object["UG"]+" = ");
            option=parseInt(option);
            
            switch(option)
            {
                case 1:return levels_object['UG-DIPLOMA'];
                case 2:return levels_object["PG"];
                case 3:return levels_object["UG"];
                default:return undefined;
            }
        }
       
      
    
    }
   
}



function final_ans(fee_type,nationality_type_,course_type,level_type)
{

console.log("fee_type = "+fee_type);
console.log("nationality_type_ = "+nationality_type_);
console.log("course_type = "+course_type);
console.log("level_type = "+level_type);
console.log("So the Fee that is needed to be payed for selected list of options is = "+structure_of_fee[fee_type][nationality_type_][course_type][level_type][amount]);    
}




    var fee_type,nationality_type_,course_type,level_type;  
    option=readline.question("Enter the options fee Type out of "+fee_object['Exam Fee'] +" or "+fee_object['Application Fee']+" Enter 1 for 1st option and 2 for 2nd option = ");
    if(option=="1")
    {
        fee_type=fee_object['Exam Fee'];
    }
    else{
        if(option=="2")
        {
            fee_type=fee_object['Application Fee'];
        }
    }


    if(fee_type)
    {
        nationality_type_=to_return_nationality(fee_type);
        if(nationality_type_)
        {
            course_type=to_return_courses();
            if(course_type)
            {
               level_type=to_return_level(fee_type);
               if(level_type)
               {
                final_ans(fee_type,nationality_type_,course_type,level_type);
               }
               else{
                console.log("Wrong Input Data of level type");
               }
            }
            else{
                console.log("Wrong Input Data of course")
            }
            

        }
        else{
            console.log("Wrong Input Data of nationality Type");
        }
        
    }
    else{
        console.log("Wrong Intput Data of Fee Type");
    }

   
    
    





