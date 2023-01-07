async function fetcher(){
    const fet= await fetch('https://api.openbrewerydb.org/breweries/')
    .then(res=> res.json())
    .then(data=> {
        displyer(data);
    })
    .catch((err)=>{
        console.log("Unspecified API call, Check thereference API")
    });
    }
    function displyer(da){
        var d=da;
        let place=document.querySelector("#alldata");
        let out="";
        for(var i=0;i<20;i++){
            out+=`
            <div id="initials">
            <div id="nandy">
            <p id="name"><b>Brewery Name :</b> ${d[i].name}</p>
            <p id="type"><b>Brewery Type : </b>${d[i].brewery_type}</p>
            </div>
            <p id="address"><b>Address : </b>${d[i].street}, ${d[i].city}, ${d[i].state}, ${d[i].country}, ${d[i].postal_code}</p>
            <div id="weone">
            <p id="web"><b>Website : </b><a href=${d[i].website_url} target="_blank">${d[i].website_url}</a></p>
            <p id="phone"><b>Phone number : </b>${d[i].phone}</p>
            </div>
            </div>
            `;
        }
        place.innerHTML=out;
    }
const ft=fetcher();