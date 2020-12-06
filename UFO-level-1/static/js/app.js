// from data.js

var tableData = data;

// YOUR CODE HERE!

// Log the UFO sighting data from the other file

// console.log(tableData)

var tbody = d3.select("tbody")


// Use d3 to update each cell's text with UFO sighting values 
// (date, city, etc.)

data.forEach(function(ufoSighting) {
    // console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        // console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
        cell.text(value)
    });
});

// Filter table based on date

var button = d3.select('#filter-btn');

// create event handlers
//add form later to allow 'enter' to filter

button.on("click", runButton);

// Create event handler function

function runButton() {
    //Prevent page from refreshing
    d3.event.preventDefault();

    //select input element and get raw HTML node
    var inputElement = d3.select("#datetime").property("value");

    console.log(inputElement);

    //If statement for blank input

    if (inputElement) {
        var filteredData = tableData.filter((ufo) => ufo.datetime === inputElement);
    }
    else {
        var filteredData = tableData;
    }

    console.log(filteredData);

    // remove all dates from table
    tbody.html("");

    // Build a table with the new filtered data

    filteredData.forEach(function(ufoSighting) {
        console.log(ufoSighting);
        var row = tbody.append("tr");
    
        Object.entries(ufoSighting).forEach(function([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            // in the weather report object
            var cell = row.append("td");
            cell.text(value)
        });
    });
};

