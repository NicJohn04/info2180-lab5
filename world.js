//window.onload= mystarter;
//function mystarter(){

let countrylookup = document.getElementById('lookup');
let citylookup = document.getElementById('lookup-cities');
let message = document.getElementById('result');
    //console.log(countrylookup)

countrylookup.addEventListener('click',function(element){
    element.preventDefault();
    var countrysearch = document.getElementById("country").value;
        //console.log ("Error");
        //fetch("world.php"+"? country=" +countrysearch)

    fetch("http://localhost/info2180-lab5/world.php"+"? country=" +countrysearch)
    .then(response =>{
        if (response.ok){
            return response.text()
        } else{
            return Promise.reject("Something went wrong")
        }
        
    })
    .then(data => {
        message.innerHTML = data;
    })
    .catch(error => console.log('There was an error: ' + error));
});


//}