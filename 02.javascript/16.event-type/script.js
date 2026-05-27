const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector("form");
const title = document.querySelector("h2");
const emailInput = document.getElementById("email");


// submitBtn.addEventListener("click", handleEvent);
// submitBtn.addEventListener("dblclick", handleEvent);
// submitBtn.addEventListener("mousedown", handleEvent);
// submitBtn.addEventListener("mouseup", handleEvent);
// submitBtn.addEventListener("mouseenter", handleEvent);
// submitBtn.addEventListener("mouseover", handleEvent);
// submitBtn.addEventListener("mouseleave", handleEvent);
// submitBtn.addEventListener("mouseout", handleEvent);
// submitBtn.addEventListener("mousemove", handleEvent);

function handleEvent (e){
    if (e.type === "submit") {
        e.preventDefault();
    }

    console.log(`Event Type: ${e.type}`);
    // title.textContent = `Mouse X: ${e.offsetX}, MouseY: ${e.offsetY}`;
    title.textContent = e.target.value;
}

form.addEventListener("submit", handleEvent);
// emailInput.addEventListener("keydown", handleEvent);
// emailInput.addEventListener("keyup", handleEvent);
// emailInput.addEventListener("keypress", handleEvent);
// emailInput.addEventListener("focus", handleEvent);
// emailInput.addEventListener("blur", handleEvent);
emailInput.addEventListener("copy", handleEvent);
emailInput.addEventListener("cut", handleEvent);
emailInput.addEventListener("paste", handleEvent);

