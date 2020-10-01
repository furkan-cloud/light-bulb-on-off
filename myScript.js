const imgElement = document.querySelector("#bulb");
const btnElement = document.querySelector("#turnOnOff");
const bodyElement = document.querySelector('body');

btnElement.addEventListener("click", turnOnOff);

console.log(imgElement.src);

function turnOnOff() {
if(imgElement.src.includes("OFF")) {
    btnElement.innerText = "Turn Off"
    imgElement.src = "./images/ONbulb.png"
    bodyElement.bgColor = 'black';
} else {
    btnElement.innerText = "Turn On"
    imgElement.src = "./images/OFFbulb.png"
    bodyElement.bgColor = 'whitesmoke';   
}
}

// if (imgElement.src === "http://127.0.0.1:5500/images/ONbulb.png") {
//     btnElement.innerText = "Turn On";
//     imgElement.src = "./images/OFFbulb.png";
//     bodyElement.bgColor = 'whitesmoke';
//   } else {
//     btnElement.innerText = "Turn Off";
//     imgElement.src = "./images/ONbulb.png";
//     bodyElement.bgColor = 'black';   
//   }



// const imgElement = document.querySelector('#bulb');
// const buttonElement = document.querySelector('#turnOnOff');
// const bodyElement = document.querySelector('body');
// buttonElement.addEventListener('click', turnTheLight);
// console.log(imgElement.src);
// function turnTheLight(){
//     if(imgElement.src === "http://127.0.0.1:5500/images/ONbulb.png"){
//         buttonElement.innerText = 'Turn Off';
//         imgElement.src = "./images/OFFbulb.png";
//     }else{
//         buttonElement.innerText = 'Acildi';
//         imgElement.src = "./images/ONbulb.png";
//     }
// }
// function turnTheLight(){
//     if(imgElement.src.includes('ON')){
//         buttonElement.innerText = 'Turn On';
//         imgElement.src = "./images/OFFbulb.png";
//         bodyElement.bgColor = 'whitesmoke';
//     }
//     else{
//         buttonElement.innerText = 'Turn Off';
//         imgElement.src = "./images/ONbulb.png"; 
//         bodyElement.bgColor = 'black';     
//     }
// }
