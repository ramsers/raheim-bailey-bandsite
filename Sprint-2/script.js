// var divArr = [];

//  function createDiv() {
//     for(var i = 0; i < 7; i++) {
//         var divCreate = document.createElement("div");
//         divArr.push(divCreate[i]);
//     }
//     return divArr;
//  }   

// console.log(divArr[0]);

// Creation of Div Elements
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");
let div5 = document.createElement("div");
let div6 = document.createElement("div");

// Adding classes to divs
div1.classList.add("shows__one");
div2.classList.add("shows__two");
div3.classList.add("shows__three");
div4.classList.add("shows__four");
div5.classList.add("shows__five");
div6.classList.add("shows__six");

// Pushing div to Array
let divArr = [];
divArr.push(div1);
divArr.push(div2);
divArr.push(div3);
divArr.push(div4);
divArr.push(div5);
divArr.push(div6);
console.log(divArr);

// Selecting wrapper, looping through Divs & Appending to wrapper
let showsWrap = document.querySelector(".shows__wrap");

for (let i = 0; i < divArr.length; i++) {
    showsWrap.appendChild(divArr[i]);
}

let shows = [
    {
        "Date": "Mon Dec 17 2018",
        "Venue": "Ronald Lane",
        "Location": "San Francisco, CA"
    },
    {
        "Date": "Tue Jul 18 2019",
        "Venue": "Pier 3 East",
        "Location": "San Francisco, CA"
    },
    {
        "Date": "Fri Jul 22 2019",
        "Venue": "View Loungue",
        "Location": "San Francisco, CA"
    },
    {
        "Date": "Sat Aug 12 2019",
        "Venue": "Hyatt Agency",
        "Location": "San Francisco, CA"
    },
    {
        "Date": "Fri Sep 05 2019",
        "Venue": "Moscow Center",
        "Location": "San Francisco, CA"
    },
    {
        "Date": "Wed Aug 11 2019",
        "Venue": "Pres Club",
        "Location": "San Francisco, CA"
    },
]

let showsLabel = shows.map(Object.keys);
let showsInfo = shows.map(Object.values);
console.log(showsLabel);
// console.log(showsLabel[0][0])
console.log(showsInfo);

let div1Head = document.createElement("h5");
div1Head.innerText = showsLabel[0][0];
showsWrap.appendChild(div1Head);
console.log(div1Head);






