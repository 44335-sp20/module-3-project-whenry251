/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

//PART ONE: GENERATE A RANDOM ROOM RATE. Write a function called genRand() that has no paremeters that will return a room rate between 100 and 400. HINT: You should hit a number within this range within 10 tries.
  
function genRand(){
    var rate = Math.floor(Math.random() * 300) + 100;
    return rate;
}

  // PART TWO: CALCULATE AND RETURN THE EXPIRY DETAILS FOR THE OFFER. Write a function called offerExpires that has one parameter a Date object. The function should return a string in the format "OFFER EXPIRES NEXT "WeekDay" (Date Month Year)". The date should be one week from today's date
function offerExpires(date){
    date.setDate(date.getDate() + 7);
    //I wasn't completely sure how to code that but I saw the setDate method on W3 schools so I tried it
    var expiryDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var expiryMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return "Offer expires next " + expiryDay[date.getDay()] + "<br>(" + date.getDate() + " " + expiryMonth[date.getMonth()] + " " + date.getFullYear() + ")";
}
  
//PART THREE: CALL THE FUNCTIONS AND WRITE INFO TO WEBPAGE

//Call getRand() function to get random room rate and write it to the special rate section on the webpage
    document.getElementById("specialRate").innerHTML = genRand();

//create a new Date object
var date = new Date();

//Call the function passing the date object to it and write it to the offer ends section on the webpage
    document.getElementById("offerEnds").innerHTML = offerExpires(date);


