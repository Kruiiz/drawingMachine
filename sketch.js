function setup() {
  createCanvas(800, 800);
  background(245,106,180);

  strokeWeight(5);
}

function draw() {

  if (mouseIsPressed){
    //line(mouseX, mouseY, pmouseX, pmouseY);
      line(mouseX, mouseY, pmouseX, pmouseY);
  }

  function keyTyped(){

    if (key === 's'){
      console.log('key ${key} is being typed')

      if (key === 's'){

      }
    }

    return false;
  }

}
