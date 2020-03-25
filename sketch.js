let array = [];

function setup() {
  createCanvas(700, 700);
  background(245,106,180);

  strokeWeight(5);
}

function draw() {

  if (mouseIsPressed){
    //stroke(map(mouseX, 0, 700, 0, 255, true))
      //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
      //line(mouseX, mouseY, pmouseX, pmouseY);
      array.push([mouseX,mouseY]);
  }

  function keyTyped(){

  if (key === 's'){
    //save this image?
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){
    //diplay image

    for(let i = 0; i < array.length - 1; i++){
      line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    }

  //  line(array[0][0], array[0][1], array[1][0], array[1][1]);
  //  line(array[1][0], array[1][1], array[2][0], array[2][1]);
  }

   return false;

 }

}
