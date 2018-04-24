// Declare a "SerialPort" object
var serial;
var user;
var userTwo;
var currentString;
var latestData;

var portName = '/dev/cu.usbmodem1411'; // fill in your serial port name here

// this is the message that will be sent to the Arduino:

function setup() {
    createCanvas(windowWidth, windowHeight);

    // make an instance of the SerialPort object
    serial = new p5.SerialPort();


    // Get a list the ports available
    // You should have a callback defined to see the results. See gotList, below:
    serial.list();

    // Assuming our Arduino is connected,  open the connection to it
    serial.open(portName);

    // When you get a list of serial ports that are available
    serial.on('list', gotList);

    // When you some data from the serial port
    serial.on('data', gotData);
}

function serverConnected() {
    console.log("Server Connected");
}

// Got the list of ports
function gotList(thelist) {
    console.log("List of Serial Ports:");
    // theList is an array of their names
    for (var i = 0; i < thelist.length; i++) {
        // Display in the console
        print(i + " " + thelist[i]);
    }
}

// Connected to our serial device
function gotOpen() {
    println("Serial Port is Open");
}

function gotData() {
    var currentString = serial.read();
    console.log(currentString);
    latestData = currentString;
    console.log(latestData);
    document.getElementById('thediv').innerHTML = latestData;
}

function draw() {

}