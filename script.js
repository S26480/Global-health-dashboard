const api_endpoint="https://disease.sh/v3/covid-19/all";


async function fetchCovidData(){
    try{
        const response=await fetch(api_endpoint);
        
        if(!response.ok){
            throw new Error("failed to fetch covid data");
        }
        const data=await response.json();

        const totalCasesElement=document.getElementById("totalCases");
        totalCasesElement.textContent=data.cases.toLocaleString("en-US");

        const deathsElement=document.getElementById("deaths");
        deathsElement.textContent=data.deaths.toLocaleString("en-US");

        const recoveredElement=document.getElementById("recovered");
        recoveredElement.textContent=data.recovered.toLocaleString("en-US");

        const activeElement=document.getElementById("active");
        activeElement.textContent=data.active.toLocaleString("en-US");

        const criticalElement=document.getElementById("critical");
        criticalElement.textContent=data.critical.toLocaleString("en-US");

        const countriesAffectedElement=document.getElementById("countriesAffected");
        countriesAffectedElement.textContent=data.affectedCountries.toLocaleString("en-US");

        const todayCasesElement=document.getElementById("todayCases");
        todayCasesElement.textContent=data.todayCases.toLocaleString("en-US");

        const todayDeathsElement=document.getElementById("todayDeaths");
        todayDeathsElement.textContent=data.todayDeaths.toLocaleString("en-US");

        const lastUpdatedElement = document.getElementById("lastUpdated");
        const updatedDate = new Date(data.updated);
        lastUpdatedElement.textContent = updatedDate.toLocaleString();

        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
fetchCovidData();