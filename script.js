const words = [
"Computer Science Student",
"Aspiring Machine Learning Engineer",
"AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect(){

if(charIndex < words[wordIndex].length){

typingElement.textContent += words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}else{

setTimeout(eraseEffect,1500);

}
}

function eraseEffect(){

if(charIndex > 0){

typingElement.textContent =
words[wordIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseEffect,50);

}else{

wordIndex++;

if(wordIndex >= words.length){
wordIndex = 0;
}

setTimeout(typeEffect,300);

}
}

document.addEventListener("DOMContentLoaded",function(){
typeEffect();
});