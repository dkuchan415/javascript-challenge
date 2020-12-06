// from data.js

var tableData = data;

// YOUR CODE HERE!

// Log the UFO sighting data from the other file

console.log(tableData)

// tableData.forEach(function(ufoSighting) {
//     console.log(ufoSighting);
// })

// Append rows from js table into html table

// Create variable locating table body in d3

var tbody = d3.select("tbody")

// Append table rows for each UFO sighting using d3

// data.forEach(function(ufoSighting) {
//     console.log(ufoSighting);
//     var row = tbody.append("tr");
// });

// // Use object entries to log each UFO sighting

// data.forEach(function(ufoSighting) {
//     console.log(ufoSighting);
//     var row = tbody.append("tr");

//     Object.entries(ufoSighting).forEach(function([key, value]) {
//         console.log(key, value);
//     });
// });

// // Use d3 to append  cell per UFO sighting
// data.forEach(function(ufoSighting) {
//     console.log(ufoSighting);
//     var row = tbody.append("tr");

//     Object.entries(ufoSighting).forEach(function([key, value]) {
//         console.log(key, value);
//         // Append a cell to the row for each value
//         // in the weather report object
//         var cell = row.append("td");
//     });
// });

// Use d3 to update each cell's text with UFO sighting values 
// (date, city, etc.)

data.forEach(function(ufoSighting) {
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