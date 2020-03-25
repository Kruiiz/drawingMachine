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
    //save this image
    saveCanvas('fileName', 'png');
    }

    return false;
  }

}
