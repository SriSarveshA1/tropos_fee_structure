
                       
const readline=require('readline-sync');
const secretConfig = require('./configs/server.configs');



const fee={
    "Exam Fee":"Exam Fee",
    "Application Fee":"Application Fee"
}

const nationality_type={
    "INDIAN":"INDIAN",
    "FOREIGN":"FOREIGN",
    "NRI":"NRI",
    "SAARC":"SAARC"
}

const courses={
    "ALL_COURSES":"ALL_COURSES​",
    "Medical":"Medical",
    "Dental":"Dental",
    "Ayurveda":"Ayurveda"
}

const levels={
        "UG":"UG",
        "PG":"PG",
        "DIPLOMA":"DIPLOMA",
        "Ph.D":"Ph.D",
        "ALL_LEVEL":"ALL_LEVEL"
    
}


    var fee_type=readline.question("Enter the fee Type "+fee['Exam Fee'] +" or "+fee['Application Fee']+" = ");
    var nationality_type_;
    switch(fee_type)
    {
        case fee['Application Fee']:
            nationality_type_=readline.question("Enter the nationality_type_ and the different Natitionality types of Application Fee (Enter Exactly) "+nationality_type['INDIAN']+" , "+nationality_type['FOREIGN']+" = ");
            break;
        case fee['Exam Fee']:
            nationality_type_=readline.question("Enter the nationality_type_ and the different Natitionality types of Exam Fee (Enter Exactly) "+nationality_type['INDIAN']+" , "+nationality_type['FOREIGN']+" , "+nationality_type['NRI']+" , "+nationality_type['SAARC']+" = ");
            break;                      
    }
    
    






