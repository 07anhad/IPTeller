const lookUpButton = document.querySelector(".lookUpBtn");
const ipDisp = document.querySelector(".ipDisplay");
const locDisp = document.querySelector(".locationDisplay");
const geoDisp = document.querySelector(".geoDisplay");
const loadDisp = document.querySelector(".loaderDisplay")

lookUpButton.addEventListener("click", () => {
    
    loadDisp.style.display = "flex";

    axios.get("https://ipapi.co/json/").then((response) => {

        loadDisp.style.display = "none";
        
        
        console.log(response);
        ipDisp.textContent = `Ip: ${response.data.ip}`;

        locDisp.textContent = `Location: ${response.data.city}, ${response.data.country_name}, ${response.data.utc_offset}̀`;

        geoDisp.textContent = `Geo Coordinates: ${response.data.latitude}, ${response.data.longitude}`

    });
});