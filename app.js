var dice = document.querySelector('.dice');
var result = document.querySelector('.random-txt');
var number = document.querySelector('.advice_number');
dice.addEventListener('click', () => {
    // alert("testing before you down write codes");
    fetchText(); 
});
async function fetchText() {

    let response = await fetch(url = 'https://api.adviceslip.com/advice');
    const {slip} = await response.json();
    fetch(url)
        .then(response => {
            number.textContent = `${slip.id}`,
            result.textContent = `${slip.advice}`
        });

    }
   
