import people from "./people.js";
function getEmails(people,options){
    options=options||{};
    const withNames=options.withNames||false;
    const onlyActive=options.onlyActive||false;
    if(onlyActive){
        people=people.filter(isActive);
    }
    return people.map(person=>{
        let result='';
        if(withNames){
            result=person.name+' <'+person.email+'>';
        }else{
            result=person.email;
        }
        return result;
    }).join(', ');
}

function getYoungest(people){
    people.sort((personA,personB)=>personA.age-personB.age);
    return {
        youngest:people[0],
        others:people.slice(1)
    };
}

const isActive = person => person.isActive;


    const emails=getEmails(people,{
        withNames:true,onlyActive:true
    });
    console.log(emails);
    
    const youngest=getYoungest(people);
    console.log(youngest);
