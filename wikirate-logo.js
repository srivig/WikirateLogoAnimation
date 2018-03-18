var s = Snap("#wl");
var wrDot;
var colors = ["#f78d1f", "#0081ba", "#ec4e50", "#079c8e", "#58595b"]
var animateDuration = 2000;
var r = 20;
var inital_x = 150;
var inital_y = 150;
var rows = 5;
var columns = 10;
var space_x = 50;
var space_y = 50;

function init() {
  wrDot = new Array(columns);
  generateCircles(inital_x, inital_y, r, rows, columns, space_x, space_y);
}

function generateCircles(x, y, r, rows, columns, space_x, space_y) {
  var x_coord = x;
  for (var i = 0; i < rows; i++) {
    wrDot[i] = new Array(rows)
    x = x_coord;
    for (var j = 0; j < columns; j++) {
      wrDot[i][j] = s.circle(x, y, r);
      wrDot[i][j].attr({
        fill: colors[i]
      })
      x += space_x;
    }
    x = space_x;
    y += space_y;
  }
}

function animateLogo(col, dist, part, order) {
  var cy_coord = dist;
  for (i = 0; i < 5; i++) {
    if (part==3 && i==4){
      var cy = dist-50;
      wrDot[i][col].animate({
        cy: cy
      }, animateDuration)
    } else if(part==2) {
      wrDot[order[i]][col].animate({
        cy: cy_coord
      }, animateDuration)
      cy_coord += 50;
    } else {
      wrDot[i][col].animate({
        cy: cy_coord
      }, animateDuration)
      cy_coord += 50;
    }
  }
}

function animationSequence() {
  animateLogo(0, 300);
  animateLogo(1, 250);
  animateLogo(2, 200);
  animateLogo(4,200,2, [2,3,4,0,1]);
  animateLogo(5,300,3);
  animateLogo(6,250,3);
  animateLogo(7,200,3);
  animateLogo(8,150,3);
  animateLogo(9,100,3);
}

function animate() {
  setTimeout(function(){ animationSequence(); }, 1000);
}

init();
animate();
