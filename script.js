
const dictionary = (word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '85f6485b91msh42ae3709d9767d8p10a4adjsn9d110a3a0df4',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            wordheading.innerHTML = response.word;
            definition.innerHTML = response.definition.replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.").replace("5.","<br>5.").replace("6.","<br>6.");
        })
        .catch(err => console.error(err));
}

searchbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    dictionary(searchinput.value);
})