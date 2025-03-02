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

const mousePointer = document.querySelectorAll(".completed-btn");
for(const mouseHover of mousePointer){
    mouseHover.addEventListener("mouseover", function(){
        this.style.cursor = "pointer"
    })
}


const clearHistoryBtn = document.getElementById("clear-history");
clearHistoryBtn.addEventListener("click", function () {
    const historyBox = document.getElementById("box-content-history");
    historyBox.innerHTML = "";
});

document.getElementById("clear-history")
.addEventListener("mouseover", function() {
    this.style.cursor = "pointer";
});


document.getElementById("click-move")
    .addEventListener("click", function(){
        window.location.href = "blog.html";
    });


    document.getElementById("click-move")
    .addEventListener("mouseover", function() {
        this.style.cursor = "pointer";
    });


    let zeroToPlus = 0;
    const colors = ["#cd84f1", "#ffcccc", "#ffaf40", "#18dcff", "#17c0eb", "#B53471", "#7d5fff", "#fff200", "#833471", "#6F1E51"];
    
    document.getElementById("change-color").addEventListener("click", function() {
        
        for (const color of colors) {
            if (zeroToPlus < color.length) {
                document.body.style.backgroundColor = colors[zeroToPlus];
                zeroToPlus = zeroToPlus + 1;
            }
            else{
                console.log("background color")
            }
            
            if (zeroToPlus >= color.length) {
                zeroToPlus = 0;
            }
            else{
                console.log("color")
            }
        }
    });

        document.getElementById("change-color")
    .addEventListener("mouseover", function() {
        this.style.cursor = "pointer";
    });

    function todayDateTime() {
        const todayDate = document.getElementById("today-date");
        const newDate = new Date();

        const dayWeekMonthYear = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const dateList = newDate.toLocaleDateString('en-US', dayWeekMonthYear);

        todayDate.innerText = dateList;
    }

    todayDateTime();