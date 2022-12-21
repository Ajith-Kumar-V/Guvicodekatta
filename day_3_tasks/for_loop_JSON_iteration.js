// for loop
var jsons={name:'David',age:22,address:'Madhavaram',phone:8237465};
for (var val in jsons){
    console.log(val+":"+jsons[val]);
}

var jsons=[{name:'David',age:22,address:'Madhavaram',phone:8237465}];
for (var i=0; i<jsons.length;i++){
    var obj=jsons[i];
    for (var val in obj){
        console.log(val+':'+obj[val]);
    }
}

// for in loop in JSON
var jsons=[{name:'David',age:22,address:'Madhavaram',phone:8237465}];
jsons.forEach(funct=>{
    for (var i=0; i<jsons.length;i++){
        var obj=jsons[i];
        for (var val in obj){
            console.log(val+':'+obj[val]);}}
})

// for of loop in JSON
var jo={"person": {"name": "Alice","country": "Austria","tasks": ["develop", "design", "test"],"age": 30}};
var jsons=JSON.parse(jso);
for(var ele of jsons){
    for (var val in ele){
        console.log(val+':'+ele[val]);
    }
}

var jso=jo.person;
for (val in jso){
    console.log(val+":"+jso[val]);
}

var jo={"person": {"name": "Alice","country": "Austria","tasks": ["develop", "design", "test"],"age": 30}};
var jso=[jo.person];
for (var i=0;i<jso.length;i++){
    var val=jso[i]
    console.log(val);
    for(var j in val){
        console.log(j+":"+val[j]);
    }
}

//for (var val of jso){
  //  console.log(val+':'+jso[val])}

var jo={"person": {"name": "Alice","country": "Austria","tasks": ["develop", "design", "test"],"age": 30}};
var jso=[jo.person];
for (var i of jso){
    for(var j in i){
        console.log(j+":"+i[j]);
    }
}

var jo={"person": {"name": "Alice","country": "Austria","tasks": ["develop", "design", "test"],"age": 30}};
var jso=[jo.person];
jso.forEach(fuctt=>{
    for (var val in fuctt){
        console.log(val+":"+fuctt[val]);
    }
})
