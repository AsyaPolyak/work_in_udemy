const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
 const {exp} = plan.skills;
 return exp;
}
console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let str ='';

    const {programmingLangs} = plan.skills;

    for(let key in programmingLangs){
        str +=`Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}
console.log(showProgrammingLangs(personalPlanPeter));//"Язык js изучен на 20% Язык php изучен на 10%"