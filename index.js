// const containerEl = document.querySelector('.container');

// const careers = ['Web Developer',
//   'Trader','Shayar','Investor'
// ];
// let careerIndex = 0;


// let characterIndex = 0;   

// updateText();
// function updateText(){
//   characterIndex++;
//   containerEl.innerHTML=`<h1>I am ${careers[careerIndex].slice(0,1)==='I'? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
 
//   if(characterIndex===careers[careerIndex].length){
//     careerIndex++
//     characterIndex=0;
//   }
//   if(careerIndex===careers.length){
//     careerIndex=0;
//   }
//   setTimeout(updateText,200)
// }


const containerEl = document.querySelector('.container');

const careers = ['Web Developer', 'Trader', 'Shayar', 'Investor','Astrologer'];
let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  
  // Check if the first character of the career is a vowel
  const firstChar = careers[careerIndex].slice(0, 1).toLowerCase();
   // Lowercase to handle both uppercase and lowercase vowels
  const article = ['a', 'e', 'i', 'o', 'u'].includes(firstChar) ? "an" : "a";
  
  containerEl.innerHTML = `<h1>I am ${article} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
  
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  
  setTimeout(updateText, 200);
}
