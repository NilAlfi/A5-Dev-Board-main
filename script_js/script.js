const completedButton = document.querySelectorAll(".completed-btn");

for(const completedBtn of completedButton){
    completedBtn.addEventListener("click", function(){
        alert("Board updated Successfully")
        const numberFive = document.getElementById("number-five");
        const convertedNumberFive = parseInt(numberFive.innerText);
        const numberThree = document.getElementById("number-three");
       const convertedNumberThree = parseInt(numberThree.innerText);

    if (convertedNumberFive > 0) {
        numberFive.innerText = convertedNumberFive - 1;
        
        if (convertedNumberThree !== 0) {
            numberThree.innerText = convertedNumberThree + 1;
        } 
        else {
            console.log("all are now okay");
        }
    }
    else {
        console.log("all are okay now");
    }
    
    completedBtn.setAttribute("disabled", true); 
    completedBtn.style.backgroundColor = "#d3d3d3";

   
const historyMakingNow = document.getElementById("box-content-history");
const historyItem = document.createElement("div");
historyItem.classList.add("history-box-color");

const nowDate = new Date();
const addDate = nowDate.toLocaleString();

historyItem.innerText = `You have completed the task: Fix mobile button issue at ${addDate}`;

historyMakingNow.appendChild(historyItem);
    
    });

};


const clearHistoryBtn = document.getElementById("clear-history");
clearHistoryBtn.addEventListener("click", function () {
    const historyBox = document.getElementById("box-content-history");
    historyBox.innerHTML = "";
});


document.getElementById("click-move")
    .addEventListener("click", function(){
        window.location.href = "blog.html";
    });
