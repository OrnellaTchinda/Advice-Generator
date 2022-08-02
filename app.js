// document.querySelector('button').addEventListener('click', getAdvice)
// const URL = `https://thecocktaildb.com/api/json/v1/1/random.php`

// function getAdvice() {

//     fetch(URL)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//             console.log(data)
//             data = document.querySelector('h3').innerText
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });

// }

document.querySelector('button').addEventListener('click', getAdvice)
const URL2 = `https://api.adviceslip.com/advice`

function getAdvice() {

    fetch(URL2)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h3').innerText = data.slip.advice
            document.querySelector('span').innerText = data.slip.id
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}



// document.querySelector('button').addEventListener('click', getDrink)

// function getDrink() {

//     fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//             console.log(data.drinks[0])
//             document.querySelector('h2').innerText = data.drinks[0].strDrink
//             document.querySelector('img').src = data.drinks[0].strDrinkThumb
//             document.querySelector('h3').innerText = data.drinks[0].strInstructions
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
// }
