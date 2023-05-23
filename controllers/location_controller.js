const http = new XMLHttpRequest()
let result = document.querySelectot("#result")

document.querySelector("#share").addEventListener
("click", () => {
    findMyCordinates()
})

function findMyCordinates(){

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        ((position) => {
            // console.log(position.coords.latitude, position.coords.longitude)
            const bdcAPI = `https://api-bdc.net/data/reverse-geocode?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
            getAPI(bdcAPI);
        },
        (err) => {
            alert(err.message)
        })
    } else{
        alert("GeoLocation is not suppported by your Browser")
    }
}

function getAPI(bdcAPI){
    http.open("GET", bdcAPI)
    http.send()
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            result.innerHTML = this.responseText;
            const results = JSON.parse(this.responseText);
            console.log(result.locality);
        }
    }
}