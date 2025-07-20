const wrapper = document.querySelector(".../");
const input = document.querySelector(".../");
searchInput = wrapper.querySelector(".../");
synonyms = wrapper.querySelector (".../");
infoText = wrapper.querySelector(".../"),
volumeIcon = wrapper.querySelector(".../"),
closeBtn = wrapper.querySelector(".../");


// Data function
function data(result, word){
    if(result.title){ // if api returns message
        infoText.innerHTML = `Sorry pal, we couldn't find definitions for the <span>"${word}"</span> you were looking for. You can try the search again at later time or head to the web instead.`;
     }else{
        console.log(result);
        wrapper.classList.add("active");
        let definitions = result[0].meanings[0].definitions[0],
        phonetics = `${result[0].meanings[0].partOfSpeech} /${result[0].phonetics[0].text}/`;

        // let's pass a particular response
        document.querySelector(".word p").innerText = result[0].word;
        document.querySelector(".word span").innerText = phonetics;
        document.querySelector(".meaning span").innerText = definitions.definition;
        document.querySelector(".example span").innerText = definitions.example;
        audio = new Audio("https:" + result[0].phonetics[0].audio[2]);
        synonyms.innerHTML = "";
        for (let i = 0; i < 5; i++) { // getting ...
            let tag = `<span onclick=search('${definitions.synonyms[i]}')>${definitions.synonyms[i]},</span>`;
            synonyms.insertAdjacentHTML("beforeend", tag);
        }
     }
}

function search(word){
    searchInput.value = word;
    fetchApi(word);
}
// fetch API
function fetchApi(word){
    infoText.style.color = "#602cff";
    infoText.innerHTML =`Searching the meaning of <span>"${word}"</span>`;
    let url = `#`;
    // fetching api response
    //method calling data function
    fetch(url).then(res => res.json()).then(result => data(result, word));
}
function textToSpeech(innerText){
    let utternance = new SpeechSynthesisUtterance(innerText);
    speechSynthesis.speak(utternance);
}

searchInput.addEventListener("keyup", e =>{
    if(e.key === "Enter" && e.target.value){
        fetchApi(e.target.value);
    }
});

volumeIcon.addEventListener("click", e =>{
    e.preventDefault();
    if(input.value !== ""){
        textToSpeech(input.value);
    }
});

closeBtn.addEventListener("click", ()=>{
    searchInput.value= "";
    searchInput.focus();
});
