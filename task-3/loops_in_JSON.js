// for loop in JSON
var jo={"person": {"name": "Alice","country": "Austria","tasks": ["develop", "design", "test"],"age": 30}};
var jso=[jo.person];
for (var i=0;i<jso.length;i++){
    var val=jso[i]
    console.log(val);
    for(var j in val){
        console.log(j+":"+val[j]);
    }
}

// for in loop in JSON
var jo={"person": {"name": "Alice","country": "Austria","tasks": ["develop", "design", "test"],"age": 30}};
var jso=jo.person;
for (val in jso){
    console.log(val+":"+jso[val]);
}

//for of loop in JSON
var jo={"person": {"name": "Alice","country": "Austria","tasks": ["develop", "design", "test"],"age": 30}};
var jso=[jo.person];
for (var i of jso){
    for(var j in i){
        console.log(j+":"+i[j]);
    }
}

//for each loop in JSON
var jo={"person": {"name": "Alice","country": "Austria","tasks": ["develop", "design", "test"],"age": 30}};
var jso=[jo.person];
jso.forEach(fuctt=>{
    for (var val in fuctt){
        console.log(val+":"+fuctt[val]);
    }
})
