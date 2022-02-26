// console.log('hello from cocktail!')

const getInputText = () => {
    const inputID = document.getElementById('inputId');
    const inputText = inputID.value;
    if(inputText != ''){
        spinnerControl('block', 'none');
        loadCocktail(inputText);
        inputID.value = '';
    }
}

//spinner display function.
const spinnerControl = (displayStyle, displayStyle2) => {
    document.getElementById('spinnerId').style.display = displayStyle;
    document.getElementById('allCocktail').style.display = displayStyle2;
}

const loadCocktail = (name) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${name}`)
    .then(res => res.json())
    .then(allData => showCocktail(allData.drinks))
}

const showCocktail = (allCocktailData) => {
    
    // console.log('Length:', length)
    // console.log('Hello Show', allCocktailData)
    const allCocktailID = document.getElementById('allCocktail');
    allCocktailID.innerText = '';
    spinnerControl('none', '');
    allCocktailData?.forEach( cocktail => {
        // console.log(cocktail)
        /* let sum = 0;
        console.log(sum+=1) */
        const myDiv = document.createElement('div');
        myDiv.classList.add('cocktail-class');
        myDiv.innerHTML = `
            <img src='${cocktail.strDrinkThumb}'>
            <p>${cocktail.strCategory ? cocktail.strCategory : '' } </p>
            <p>${cocktail.strGlass} </p>
        `;
            allCocktailID.appendChild(myDiv);
        })
    
    const length = (allCocktailData.length)
    document.getElementById('lengthId').innerText = 'Search Result: ' + length;
    
}