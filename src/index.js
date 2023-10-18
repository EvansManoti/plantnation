console.log('hello world')
let page = 1;
let paginationElement = document.getElementById("pagination");
let paginationbtns=paginationElement.getElementsByTagName("button")
//console.log(paginationbtns)


paginationbtns[0].addEventListener('click', back);
function back(){
    console.log("back")
    if (page == 1){
        return;
    }
    page = page -1;
    pageNumberUpdate()
}
paginationbtns[1].addEventListener('click', moveforward);
function moveforward(){
    console.log("moveforward")
    page = page +1;
    pageNumberUpdate()
}

function pageNumberUpdate() {
    let span = paginationElement.getElementsByTagName("span")[0];
    //console.log(span);
    span.innerText = page;
}