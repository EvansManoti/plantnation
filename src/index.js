console.log('hello world')
let page = 1;
let token = "LJRFS8oLUV2jsTa7fTN15mKIZap6MgAj1GUgUg0sBQU";


let paginationElement = document.getElementById("pagination");
let paginationbtns=paginationElement.getElementsByTagName("button")
//console.log(paginationbtns)


paginationbtns[0].addEventListener('click', back);

getPlant()
function back(){
    console.log("back")
    if (page == 1){
        return;
    }
    page = page -1;
    pageUpdate();
    getPlant();
}
paginationbtns[1].addEventListener('click', moveforward);
function moveforward(){
    console.log("moveforward")
    page = page +1;
    pageUpdate()
}

function pageUpdate() {
    let span = paginationElement.getElementsByTagName("span")[0];
    //console.log(span);
    span.innerText = page;
}

function displayPlants(data){
    let divElement = document.getElementById("all-plants");
    let plants =""
    for(let i = 0; i < data.length; i++){
        let plant = data[i];
        plants = plants +
        `
        <div class="a-plant">
        <img 
        src="${plant.image_url}"alt="">
        <div>
        <p>Name:<span>${plant.common_name}</span></p>
        <button>More</button>
        </div>
        `
    }
    //console.log(plants);
     
   divElement.innerHTML = plants;
}


function getPlant(){
    fetch(
        "https://corsproxy.io/?" +
        `https://trefle.io/api/v1/plants?token=${token}&page=${page}`,{
        method: "GET",
        contentType:"applicatio/json",
    })
    .then((response) => response.json())
    .then(function (data)  {
        console.log(data);
        displayPlants(data.data);
    })
} 