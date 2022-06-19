function createButtons() {
    let buttonsNumber = document.getElementById("valueId").value;
    let randomValue = Math.floor(Math.random() * buttonsNumber) + 1;
    for (let i = 1; i <= buttonsNumber; ++i) {
	let btn = document.createElement("button");
	btn.innerHTML = "Click me!";
	btn.type = "submit";
	btn.name = "luckyButton";
	let myDiv = document.getElementById("buttonFeaturesId");
	myDiv.appendChild(btn);
	btn.onclick = function() {
	findTheLuckyButton(i, randomValue)
	};
    }
    document.getElementById('buttonStop').disabled = true;
}

function findTheLuckyButton(i, randomValue) {
    if (i == randomValue) {
	alert("You won!");
    } else {
	alert("You lost!")
    }
}
