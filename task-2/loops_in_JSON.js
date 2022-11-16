// for loop in JSON
var jsons=[{name:'David',age:22,address:'Madhavaram',phone:8237465}];
for (var i=0; i<jsons.length;i++){
    var obj=jsons[i];
    for (var val in obj){
        console.log(val+':'+obj[val]);
    }
}

// for in loop in JSON
var jsons={name:'David',age:22,address:'Madhavaram',phone:8237465};
for (var val in jsons){
    console.log(val+":"+jsons[val]);
}

//for of loop in JSON
var jsons=[{name:'David',age:22,address:'Madhavaram',phone:8237465}];
for(var ele of jsons){
    for (var val in ele){
        console.log(val+':'+ele[val]);
    }
}

//for each loop in JSON
var jsons=[{name:'David',age:22,address:'Madhavaram',phone:8237465}];
jsons.forEach(funct=>{
    for (var i=0; i<jsons.length;i++){
        var obj=jsons[i];
        for (var val in obj){
            console.log(val+':'+obj[val]);}}
})
