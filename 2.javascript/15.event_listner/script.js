window.onload = function() {
    let text = document.getElementById("text");

    text.innerText = "HTML document is loaded"
}

const aElement =  document.querySelector("a");
aElement.addEventListener("click", () => {
    alert("a elemet is clicked")
})

const buttonElement = document.querySelector("#btn1");

buttonElement.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.className);
    console.log(event.type);
    
    //윈도우와의 커서 거리
    console.log(event.clientY);

    //요소와의 커서 거리
    console.log(event.offsetY);
    
})