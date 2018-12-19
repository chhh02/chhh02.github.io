drawLine('jsL1', 120);


function box() {
    var canvas = document.getElementById('whiteBox');
    if (canvas.getContext) {
        var box = canvas.getContext('2d');

        box.fillStyle = "#f7f7f7";
        box.fillRect(0, 0, canvas.width, canvas.height);
        
    }
}

function drawLine(svgID, po, startX) {
    var canvas = document.getElementById(svgID);
    if (canvas.getContext) {
        var line = canvas.getContext('2d');
        // drawing code here
        // line.strokeStyle = "#3F454A";
        // line.lineWidth = 2;
        // line.beginPath();
        // line.moveTo(po, 0);
        // line.lineTo(strat, 0);
        // line.lineTo(280, 0);
        // line.stroke();

        // ctx.closePath();
        line.clearRect(0, 0, canvas.width, canvas.height);
        // var startX = 100;
        var startY = 0;
        var endX = 280;
        var endY = 0;
        var amount = 0;
        setInterval(function() {
            amount += 0.1; 
            
            line.clearRect(0, 0, canvas.width, canvas.height);
            line.strokeStyle = "#3F454A";
            line.moveTo(po, 0);
            line.lineTo(startX + (280 - startX) * amount, 0);
            line.stroke();
            line.lineWidth = 2;
        }, 30);
    }
}

var x = 25; // x coordinate
var y = 25; // y coordinate
var radius = 5; // Arc radius
var startAngle = 0; // Starting point on circle
var endAngle = Math.PI*2; // End point on circle
var anticlockwise = true; // clockwise or anticlockwise

function drawDot(svgID, radius) {
    var canvas = document.getElementById(svgID, radius);
    if (canvas.getContext) {
        var dot = canvas.getContext('2d');
  
        dot.beginPath();
        dot.arc(radius, radius, radius, 0, Math.PI*2, true);     
        dot.fill();
        dot.fillStyle = "#3F454A";
    }
  }


// function draww(){
//     var canvas = $("#paper")[0];
//     var c = canvas.getContext("2d");
//     var startX = 50;
//     var startY = 50;
//     var endX = 100;
//     var endY = 50;
//     var amount = 0;
//     setInterval(function() {
//         amount += 0.6; 
        
//         c.clearRect(0, 0, canvas.width, canvas.height);
//         c.strokeStyle = "black";
//         c.moveTo(startX, startY);
//         c.lineTo(startX + (endX - startX) * amount, startY + (endY - startY) * amount);
//         c.stroke();
//         c.lineWidth = 1;
//     }, 30);
// };

// function draw(svgId) {
//     var canvas = document.getElementById(svgId);
//     if (canvas.getContext) {
//         var ctx = canvas.getContext('2d');
//         // drawing code here
//         ctx.fillStyle = 'rgb(200, 0, 0)';
//         ctx.fillRect(10, 10, 50, 50);
//         ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
//         ctx.fillRect(30, 30, 50, 50);                   
//         } else {
//         // canvas-unsupported code here
//     }
// }