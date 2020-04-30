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
// Put all shows in an array in grouped objects
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

// Create Div Head Variable to hold H5's
// Create Array to hold all H5's for reassignment
let divHead;
let divHeadArr = [];

for (let i = 0; i < 19; i++) {
        divHead = document.createElement("h5");
        divHead.classList.add("shows__label");
        divHeadArr.push(divHead);
    }

     // First Show Titles
let div1Date = divHeadArr[0];
let div1Venue = divHeadArr[1];
let div1Loc = divHeadArr[2];

let div1DateKey = 

div1Date.innerText = showsLabel[0][0];
div1Venue.innerText = showsLabel[0][1];
div1Loc.innerText = showsLabel[0][2];
// console.log(div1Date);
// console.log(div1Venue);
// console.log(div1Loc);

// Second Show Titles
let div2Date = divHeadArr[0];
let div2Venue = divHeadArr[1];
let div2Loc = divHeadArr[2];

div2Date.innerText = showsLabel[0][0];
div2Venue.innerText = showsLabel[0][1];
div2Loc.innerText = showsLabel[0][2];

// console.log(div2Date);
// console.log(div2Venue);
// console.log(div2Loc);

// Third Show Titles
let div3Date = divHeadArr[0];
let div3Venue = divHeadArr[1];
let div3Loc = divHeadArr[2];

div3Date.innerText = showsLabel[0][0];
div3Venue.innerText = showsLabel[0][1];
div3Loc.innerText = showsLabel[0][2];

// console.log(div3Date);
// console.log(div3Venue);
// console.log(div3Loc);

// Fourth Show Titles
let div4Date = divHeadArr[0];
let div4Venue = divHeadArr[1];
let div4Loc = divHeadArr[2];

div4Date.innerText = showsLabel[0][0];
div4Venue.innerText = showsLabel[0][1];
div4Loc.innerText = showsLabel[0][2];

// console.log(div4Date);
// console.log(div4Venue);
// console.log(div4Loc);

// Fifth Show Titles
let div5Date = divHeadArr[0];
let div5Venue = divHeadArr[1];
let div5Loc = divHeadArr[2];

div5Date.innerText = showsLabel[0][0];
div5Venue.innerText = showsLabel[0][1];
div5Loc.innerText = showsLabel[0][2];

// console.log(div5Date);
// console.log(div5Venue);
// console.log(div5Loc);

// Sixth Show Titles
let div6Date = divHeadArr[0];
let div6Venue = divHeadArr[1];
let div6Loc = divHeadArr[2];

div6Date.innerText = showsLabel[0][0];
div6Venue.innerText = showsLabel[0][1];
div6Loc.innerText = showsLabel[0][2];

// console.log(div6Date);
// console.log(div6Venue);
// console.log(div6Loc);   

let divDate;
let divDateArr = [];
// Create Div Date Elements
for (let i = 0; i < 6; i++) {
    divDate = document.createElement("h4");
    divDate.classList.add("shows__date");
    divDateArr.push(divDate);
}

console.log(divDateArr);

// Create Div Venue Elements
let divVenue;
let divVenueArr = [];

for (let i = 0; i < 6; i++) {
    divVenue = document.createElement("p");
    divVenue.classList.add("shows__venue");
    divVenueArr.push(divVenue);
}

console.log(divVenueArr);

// Create Location Elements

let divLoc;
let divLocArr = [];

for (let i = 0; i < 6; i++) {
    divLoc = document.createElement("p");
    divLoc.classList.add("shows__loc");
    divLocArr.push(divLoc);
}

console.log(divLocArr);


    













