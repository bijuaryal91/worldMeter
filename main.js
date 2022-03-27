const countryOption=document.querySelector('#tina');
const capital=document.querySelector('.capital-city label');
const population=document.querySelector('.population label');
const flag=document.querySelector('.flag img');
countryOption.onchange=()=>
{
    var url = "https://restcountries.com/v3.1/name/"+countryOption.value;
    fetch(url).then(response => response.json()).then(data => {
        flag.src=data[0].flags.png;
        capital.innerHTML="Capital City : "+data[0].capital[0];
        population.innerHTML="Total Population : "+data[0].population;

    });
}
