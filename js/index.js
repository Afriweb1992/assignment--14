function loadCountry() {

    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountry(data))
}


loadCountry()

const displayCountry = (countries) => {

    // console.log(countries);

    const countriesDiv = document.getElementById("display");


    countries.map(country => {

        // console.log(country);

        const div = document.createElement("div");
        div.classList.add("country");
        div.innerHTML = `
        <img src="${country.flags.png}" alt="">
        <h2>Name:${country.name.common}</h2>
        <p>language :${country.languages?.eng} </p>
        <p>Population:${country.population} </p>
        <p>Region: ${country.region}</p>
        <button onClick="showCountrydetails('${country.name.common}')">Details</button >
        `

        countriesDiv.appendChild(div)


    })


}

const showCountrydetails = (name) => {

    // console.log(name);

    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json)
        .then(data => console.log(data))

}

const displayDsetailsCountry = (country) => {

    // console.log(country);
    const countryDiv = document.getElementById('country-details');
}