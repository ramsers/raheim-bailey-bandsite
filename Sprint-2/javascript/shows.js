// Put all shows in an array in grouped objects
let shows = [
    {
        Date: "Mon Dec 17 2018",
        Venue: "Ronald Lane",
        Location: "San Francisco, CA"
    },
    {
        Date: "Tue Jul 18 2019",
        Venue: "Pier 3 East",
        Location: "San Francisco, CA"
    },
    {
        Date: "Fri Jul 22 2019",
        Venue: "View Lounge",
        Location: "San Francisco, CA"
    },
    {
        Date: "Sat Aug 12 2019",
        Venue: "Hyatt Agency",
        Location: "San Francisco, CA"
    },
    {
        Date: "Fri Sep 05 2019",
        Venue: "Moscow Center",
        Location: "San Francisco, CA"
    },
    {
        Date: "Wed Aug 11 2019",
        Venue: "Pres Club",
        Location: "San Francisco, CA"
    },
]


// Abstract Away Show Keys to seprate array
let showsInfo = [["Date"], ["Venue"], ["Location"]];



//Create A function that generates Rows, labels, show info using a For Each Loop
let rowGen = () => {
    shows.forEach(() => {
        let divCreate = document.createElement("div");
        divCreate.classList.add("shows__row");
        let showWrap = document.querySelector(".shows__wrap");
        showWrap.appendChild(divCreate);
        
        let dateCtn = document.createElement("div");
        dateCtn.classList.add("date-ctn")

        let labelCreate1 = document.createElement("h5");
        labelCreate1.classList.add("shows__date");
        dateCtn.appendChild(labelCreate1);
     
        
        let venueCtn =document.createElement("div");
        venueCtn.classList.add("venue-ctn");

        let labelCreate2 = document.createElement("h5");
        labelCreate2.classList.add("shows__venue");
        venueCtn.appendChild(labelCreate2);

        locationCtn =document.createElement("div");
        locationCtn.classList.add("location-ctn");

        let labelCreate3 = document.createElement("h5");
        labelCreate3.classList.add("shows__location");
        locationCtn.appendChild(labelCreate3);

        labelCreate1.innerText = showsInfo[0];
        labelCreate2.innerText = showsInfo[1];
        labelCreate3.innerText = showsInfo[2];
        
        divCreate.appendChild(dateCtn);
        divCreate.appendChild(venueCtn);
        divCreate.appendChild(locationCtn);
        // labelCreate1.after(dateCreate1);
        
        let buyTicket = document.createElement("a");
        buyTicket.classList.add("shows__btn");

        buyTicket.innerText = "Buy Tickets";
        divCreate.appendChild(buyTicket);
        
       
    });
    // Generate and Set show Date Info
    let showsrow = document.querySelectorAll(".shows__date");

    let datesCreate1 = document.createElement("h4");
    datesCreate1.innerText = shows[0].Date;
    datesCreate1.classList.add("shows__dates");

    let datesCreate2 = document.createElement("h4");
    datesCreate2.innerText = shows[1].Date;
    datesCreate2.classList.add("shows__dates");

    let datesCreate3 = document.createElement("h4");
    datesCreate3.innerText = shows[2].Date;
    datesCreate3.classList.add("shows__dates");

    let datesCreate4 = document.createElement("h4");
    datesCreate4.innerText = shows[3].Date;
    datesCreate4.classList.add("shows__dates");

    let datesCreate5 = document.createElement("h4");
    datesCreate5.innerText = shows[4].Date;
    datesCreate5.classList.add("shows__dates");

    let datesCreate6 = document.createElement("h4");
    datesCreate6.innerText = shows[5].Date;
    datesCreate6.classList.add("shows__dates");
// For each tp set dates in appropriate place and add utility class
    showsrow.forEach(()=> {
        showsrow[0].after(datesCreate1);
        showsrow[0].classList.add("s-1");

        showsrow[1].after(datesCreate2);
        showsrow[1].classList.add("s-2");

        showsrow[2].after(datesCreate3);
        showsrow[2].classList.add("s-2");

        showsrow[3].after(datesCreate4);
        showsrow[3].classList.add("s-2");

        showsrow[4].after(datesCreate5);
        showsrow[4].classList.add("s-2");

        showsrow[5].after(datesCreate6);
        showsrow[5].classList.add("s-2");
    });

    // Generate and set Venue info
    let showsVenue = document.querySelectorAll(".shows__venue");
    let showsVenue1 = document.createElement("p");
    showsVenue1.innerText = shows[0].Venue;
    showsVenue1.classList.add("shows__venues");

    let showsVenue2 = document.createElement("p");
    showsVenue2.innerText = shows[1].Venue;
    showsVenue2.classList.add("shows__venues");

    let showsVenue3 = document.createElement("p");
    showsVenue3.innerText = shows[2].Venue;
    showsVenue3.classList.add("shows__venues");

    let showsVenue4 = document.createElement("p");
    showsVenue4.innerText = shows[3].Venue;
    showsVenue4.classList.add("shows__venues");

    let showsVenue5 = document.createElement("p");
    showsVenue5.innerText = shows[4].Venue;
    showsVenue5.classList.add("shows__venues");

    let showsVenue6 = document.createElement("p");
    showsVenue6.innerText = shows[5].Venue;
    showsVenue6.classList.add("shows__venues");

    // For each to put venue in proper place and add secondary utlity class for desktop versions
    showsVenue.forEach(() => {
        showsVenue[0].after(showsVenue1);
        showsVenue[0].classList.add("s-1");

        showsVenue[1].after(showsVenue2);
        showsVenue[1].classList.add("s-2");

        showsVenue[2].after(showsVenue3);
        showsVenue[2].classList.add("s-2");

        showsVenue[3].after(showsVenue4);
        showsVenue[3].classList.add("s-2");

        showsVenue[4].after(showsVenue5);
        showsVenue[4].classList.add("s-2");

        showsVenue[5].after(showsVenue6);
        showsVenue[5].classList.add("s-2");
    });

    let showsLocationHold = document.querySelectorAll(".shows__location");
    let locationText1 = document.createElement("p");
        locationText1.classList.add("shows__locations");
        locationText1.innerText = shows[0].Location;

    let locationText2 = document.createElement("p");
        locationText2.classList.add("shows__locations");
        locationText2.innerText = shows[0].Location;

    let locationText3 = document.createElement("p");
        locationText3.classList.add("shows__locations");
        locationText3.innerText = shows[0].Location;

    let locationText4 = document.createElement("p");
        locationText4.classList.add("shows__locations");
        locationText4.innerText = shows[0].Location;

    let locationText5 = document.createElement("p");
        locationText5.classList.add("shows__locations");
        locationText5.innerText = shows[0].Location;

    let locationText6 = document.createElement("p");
        locationText6.classList.add("shows__locations");
        locationText6.innerText = shows[0].Location;
        // For each to generate show locations adding utility classes
    showsLocationHold.forEach(()=> {

        showsLocationHold[0].after(locationText1);
        showsLocationHold[0].classList.add("s-1");

        showsLocationHold[1].after(locationText2);
        showsLocationHold[1].classList.add("s-2");

        showsLocationHold[2].after(locationText3);
        showsLocationHold[2].classList.add("s-2");

        showsLocationHold[3].after(locationText4);
        showsLocationHold[3].classList.add("s-2");

        showsLocationHold[4].after(locationText5);
        showsLocationHold[4].classList.add("s-2");

        showsLocationHold[5].after(locationText6);
        showsLocationHold[5].classList.add("s-2");
    });
}
rowGen();


