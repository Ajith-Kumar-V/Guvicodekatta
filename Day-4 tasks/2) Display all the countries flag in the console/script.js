async function country(){
    fetch("https://restcountries.com/v3.1/all")
    .then(res=> res.json())
    .then(data=>{
        screener(data);
    })
    .catch(err=>console.log("Error in loading the API data"));
}
function screener(data){
    var d=data;
    var adder="";
    for(let dd in d){
    console.log(d[dd]);
    adder+=`
        <tr>
            <td>${d[dd].name.common}</td>
            <td><span  id="flagspng"><img src=${d[dd].flags.png}></span></td>
        </tr>`
    }
    document.querySelector("#countryflags").innerHTML=adder;
}
const cty=country();