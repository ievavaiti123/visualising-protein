
let protein;
let canvas, canvas1;

function setup() {
  createCanvas(windowWidth, windowHeight);


  canX = 200;
  canY = 300;
  canvas1 = createGraphics(canX, canY);

  noLoop();
  background(200);
  angleMode(DEGREES);
  fetch("./json/protein.json").then(function(response) {
    return response.json();
  }).then(function(data) {

    // console.log(data);
    
    protein = data.protein;

    drawProtein();
  
  }).catch(function(err) {
    console.log(`Something went wrong: ${err}`);
  });

}

function draw() {
  background(200);
  setup();
}

function drawProtein(){
  // let grain = new Grain(x, y, 5)
  let r = (width*height)/48000;
  console.log(r);
  let value;
  canvas1.grain = [];

  for (let i=0; i<protein.length; i++) {
    value = protein[i].amount;

    let cCol = protein[i].color;
    let type = protein[i].type;

    for (let j = 0; j < value; j ++) {
      canvas1.grain.push(new Grain());

      if (type == "fish" || type =="meat") {
      push();
      translate((width/2)-(canX+canX/2), height/3);
      canvas1.grain[j].show(random(5, canvas1.width - 5), random(5, canvas1.height - 5), 5, cCol);
      pop();
   
      } else if

       (type != "fish" || type !="meat") {
        push();
        translate((width/2)+(canX/2), height/3);
        canvas1.grain[j].show(random(5, canvas1.width - 5), random(5, canvas1.height - 5), 5, cCol);
        pop();
      
        }
      
    }

  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
