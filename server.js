
                       
const readline=require('readline-sync');
var {structure_of_fee}=require("./utils/structure_file");
var {fee_object,nationality_type_object,courses_object, levels_object, amount}=require("./utils/constants");




function to_return_nationality(fee_type)
{
    //So Based on the Fee type that User Enters we are asking to Enter the Nationality of the user 
    switch(fee_type)
    {
        case fee_object['Application Fee']:
            nationality_type_=readline.question("Enter the nationality_type_ and the different Natitionality types of Application Fee (Enter Exactly) "+nationality_type_object['INDIAN']+" , "+nationality_type_object['FOREIGN']+" = ");
            break;
        case fee_object['Exam Fee']:
            nationality_type_=readline.question("Enter the nationality_type_ and the different Natitionality types of Exam Fee (Enter Exactly) "+nationality_type_object['INDIAN']+" , "+nationality_type_object['FOREIGN']+" , "+nationality_type_object['NRI']+" , "+nationality_type_object['SAARC']+" = ");
            break;              
        default:
            console.log("Wrong Input of Data");        
    }
    return nationality_type_;
}

function to_return_courses()
{
    //So what ever may be nationality_type or Fee_Type the courses offered are same
   cours_e=readline.question("Enter the course that You want to select Out of "+courses_object['Ayurveda']+" , "+courses_object['Dental']+" , "+courses_object['Medical']+" = ");
   return cours_e;
}

function to_return_level()
{
    //So what ever may be the course that has been choosen the levels will be same
    level_=readline.question("Enter the level type "+levels_object['DIPLOMA']+" , "+levels_object["PG"]+" , "+levels_object["Ph.D"]+" , "+levels_object["UG"]);
    return level_;

}



function final_ans(fee_type,nationality_type_,course_type,level_type)
{

    
}




    var fee_type,nationality_type_,course_type,level_type;  
    fee_type=readline.question("Enter the fee Type "+fee_object['Exam Fee'] +" or "+fee_object['Application Fee']+"(Enter exactly) = ");
    if(fee_type)
    {
        nationality_type_=to_return_nationality(fee_type);
        if(nationality_type_)
        {
            course_type=to_return_courses();
            if(course_type)
            {
               level_type=to_return_level();
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

   
    
    






