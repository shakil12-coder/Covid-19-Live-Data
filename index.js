
// let myBtn=document.getElementsByClassName("btn");

function getData(){

    url="https://api.covid19api.com/summary"
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{

        tdata=`
        <td>${data.Global.TotalConfirmed}</td>
        <td>${data.Global.TotalDeaths}</td>
        <td>${data.Global.TotalRecovered}</td>
        `;
        document.getElementById("data").innerHTML=tdata;
    })

}

document.getElementById("btid").addEventListener("click",()=>{
    
    getData();
   
})


