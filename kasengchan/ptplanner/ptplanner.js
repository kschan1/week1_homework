// console.log('its working');

var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverley = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

var lines = [alamein, glenWaverley, sandringham];
var lineNames = ['Alamein', 'Glen Waverley', 'Sandringham'];

// hardcoding origin and destination
var origin = 'Windsor';
var destination = 'Glenferrie';

var transitStation = 'Richmond';

console.log('origin: ' + origin);
console.log('destination: ' + destination);


// To find origin line and station index
for (var i = 0; i < lines.length; i++) {
  var oriStationIndex = lines[i].indexOf(origin);
  if (oriStationIndex !== -1) {
    var oriLineIndex = i;
    var originInfo = [oriLineIndex, oriStationIndex];
    break;
  }
}

// To find destination line and destination index
for (var i = 0; i < lines.length; i++) {
  var desStationIndex = lines[i].indexOf(destination);
  if (desStationIndex !== -1) {
    var desLineIndex = i;
    var destinationInfo = [desLineIndex, desStationIndex];
    break;
  }
}


// Function to get route between two stations on the same line
var getRoute = function(startIndex,endIndex,line){
  if (startIndex >= endIndex) {
    route = line.slice(endIndex, startIndex + 1);
    route = route.reverse();
  } else {
    route = line.slice(startIndex,endIndex + 1);
  }
  return route;
}


// Check if origin line is different with destination line
var requireTransit = (oriLineIndex !== desLineIndex);

// If transit is necessary
if (requireTransit) {
  // Get route from origin station to transit station
  var transitIndex = lines[oriLineIndex].indexOf(transitStation);
  var routeLine1 = getRoute(oriStationIndex,transitIndex,lines[oriLineIndex]);

  // Get route from transit station to destination station
  var transitIndex = lines[desLineIndex].indexOf(transitStation);
  var routeLine2 = getRoute(transitIndex,desStationIndex,lines[desLineIndex]);

  // Get total stops
  var totalStops = (routeLine1.length - 1) + (routeLine2.length - 1);

  console.log(lineNames[oriLineIndex] + ' line.');  // Print original line
  console.log(routeLine1.join(' -----> ')); // Print route on original line
  console.log('Switch to ' + lineNames[desLineIndex] +' line.');  // Print transit line
  console.log(routeLine2.join(' -----> ')); // Print route on destination line
  console.log(totalStops + ' stops total'); // Print total stops
} else {
  // When transit is not necessary
  // Get route from origin station to destination station
  var routeLine1 = getRoute(oriStationIndex,desStationIndex,lines[oriLineIndex]);

  // Get total stops
  var totalStops = (routeLine1.length - 1);

  console.log(lineNames[oriLineIndex] + ' line.');  // Print line
  console.log(routeLine1.join(' -----> ')); // Print route

  // Print total stop/stops
  if (totalStops === 1) {
    console.log(totalStops + ' stop total');
  } else {
    console.log(totalStops + ' stops total');
  }
}
