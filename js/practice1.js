// console.log('Hello from practice 1 js');

//1//Declare an object with 5 Minimum properties, one properties will have a property with is an object, another property will be an array. Another one property will be a function(method), when the method/function will be called it will return 1 property from that object.

const student = {
    name: 'sakib',
    id: 01,
    home: 'magura',
    age: 25,
    
    friend: {
        name: 'mashrafee',
        id: 02,
        age: 32,
        books: {
            b1: 'bang',
            b2: 'eng', 
            b3: 'phy'
        },
        bikes: ['Yamaha', 'Hero', 'Suzuki'],
    },

    cars: ['BMW', 'Lamborghini', 'ferrari'],
    
    identity: function(){
        const a = this.name;
        const b = this.home;
        const c = this.age;
        return b;
    },

    country: 'BD',
    team: 'Tiger',
}

// console.log(student);
// console.log(student.identity())




//2.//Declare a string variable with a template string. Inside that, bring three values of upper object. Set one property value which is a nested object. set another property that is second value of an array of that object. last one will we anything as you wish!

const myTemplateString = `
    <h2>${student.name}</h2>
    <h2>${student.friend.books.b2}</>
    
    <h2>${student.friend.bikes[1]}</h2>
    <h2>${student.cars[2]}</h2>
    
    <h2>${student.identity()}</>
    <h2>${student.country}</h2>
`;
// console.log('Template String:', myTemplateString);




//3.1// create an arrow function with no parameter which will return 89.
const myArrowFunc = () => {
    return 89;
}
// console.log('Only eighty nine:', myArrowFunc());


//3.2// create an arrow function with one parameter, this function will take and return every number after dividing by 7.
const divideBySeven = x => x/7;
const result = divideBySeven(77);
// console.log("Result:", result);

//3.3// create an arrow function with 2 parameters, then add them and divided the result by 2 and return the answer.
const myMath = (x, y) => (x + y) / 2;
// console.log("Ans is:", myMath(50,10));


//3.4// Create an arrow function that has multiple lines and takes 2 parameters. every input parameter will be added by 7, then make sum of those 2 parameter.
const myMath2 = (num1, num2) => {
    const x = num1 + 7;
    const y = num2 + 7;
    const z = x + y ;

    return z;
}
// console.log(myMath2(13,8));



//4// create an array with a lot of numbers. use map on that array. every element of that array should be divided by 7 and they those numbers will make a new array in one line program!
const numbers = [21, 14, 34, 87, 971, 6, 49, 8754, 65, 47, 28];
const newArray2 = numbers.map(x => (x/7).toFixed(1));
// console.log('New Arr:', newArray2);

/* const MakeNewNumbersArray = x => (x/7).toFixed(1);
const newArray = numbers.map(MakeNewNumbersArray);
console.log('new Arr:', newArray2);*/





////5// Summery of map, forEach, filter, find.

//map: map is used for looping through on an array. it takes every element form the array and then does according to the function. ex: numbers.map(myFunction()) or, numbers.map( x => x*x).

//forEach: forEach loop is also used for looping through an array. it takes all the elements one by one. forEach and map do the same thing but difference is map returns a NEW Array, forEach DOESN'T! ex: products.forEach( product => console.log(x) );

//filter: filter is used both on objects and arrays. It takes/separates the elements/objects who can fulfill the condition. it doesn't take all the elements unless they fullfil the condition. The results will be displayed on an Array. Ex: const bigNumbers = numbers.filter(x => x> 20);   or, products.filter(x => x.price>500);

//find: find is applied on array and objects. But it gives the result in an object directly not in an array! It takes the first matched result. so it returns only 1 result. Ex: products.find(x => x.price <1000);





//5// Use Destructuring method for getting a variable from a simple JavaScript object's property. destructure on an array object also. take second position's element and put on a variable named 'balance'.

const mySimpleObject = {
    name: 'Sakib khan',
    salary: 7000,
    id: 08,
    home: 'dhaka',
    phone: 1111111112,
    money: {
        janu: 12000,
        feb: 25000,
        mar: 32000
    },
    movie: ['sakib khan number one', 'opu tumi kar', 'tiger jibito'],
    account: [ 5555, 500000, 6666],
    numbers: [2, 4, 6, 12],
}
//destructure from simple objects.
/* const {name, home, salary} = mySimpleObject;
console.log(name, home, salary) */

//specific element for an array, not first or second one!
/* const {2:a} = mySimpleObject.numbers;
console.log(a); */

//destructuring for nested objects!
const {feb, mar} = mySimpleObject.money;
// console.log(feb, mar);

//again specific element's destructuring from an array
const {1:balance} = mySimpleObject.account;
// console.log('Balance is:', balance);





//The first step is to fetch data from jsonplaceholder's website and display it on the console. take the Photo api, and show them on the console, then show them website by html with the help of bootstrap card.

const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(allData => showData(allData))
}
loadData();

const showData = photos =>{
    // console.log(photos)
    const photoID = document.getElementById('photoId');
    
    photos.forEach( photo => {
        // console.log(photo.title)
        const myDiv = document.createElement('div');
        myDiv.innerHTML = `
            <div onclick='detailPhoto(${photo.id})' class="card" style="width: 18rem;">
                <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${photo.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `;
        photoID.appendChild(myDiv);
    });
};




///8// after clicking any of the photo displayed, they will show detail of that specific photo by taking photo ID and setting that dynamically.

const detailPhoto = (photoId) => {
    // console.log('Photo ID', photoId)
    fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
    .then(res => res.json())
    .then(data => showDetailPhoto(data))
}

const showDetailPhoto = (specificPhoto) =>{
    const detailPhotoID = document.getElementById('detailPhoto');
    detailPhotoID.innerHTML = ``;
    const myDiv2 = document.createElement('div');
    myDiv2.classList.add('photo-detail');
    myDiv2.innerHTML = `
        <img src='${specificPhoto.thumbnailUrl}'>
        <img src='${specificPhoto.url}'>
        <h2> Title: ${specificPhoto.title} </h2>
    `;
    detailPhotoID.appendChild(myDiv2);
}



///9// Data that you loaded or showing on the website, can use the arrow function inside the code? While using the loop can you use the forEach there.?
//Yes, I CAN!!



///10//