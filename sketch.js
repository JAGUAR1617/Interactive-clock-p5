function setup() {
  createCanvas(400,300);
  angleMode(DEGREES);
  
}

function draw() { 
  background(58, 58, 58);
  translate(200,150);
  rotate(-90);
  noFill();
  secon();
  hrs();
  minu();
  //mid point
  stroke(255);
  point(0,0);
  rotate(90);
  textSize(12);
  text('edited by: P Jha', 0, 140)
  

}

function secon() {
  
  let sc= second();
  strokeWeight(8);   
  fill(241,5,5, 140);
  //seconds
  stroke(sc*8,sc*8,sc*2);
  let end1= map(sc, 0, 60, 0, 360 );
  arc(0,0,230,230,0, end1);
  push();
  rotate(end1);
  //line(0, 0, 100, 0);
  textSize(16);
  strokeWeight(0.5);
  text(sc,110, 20);
  
  pop();  
  
}


function hrs() {
  fill(0,5,245, 140);

  let hr= hour();
  //hours
  stroke(245);
  let end3= map(hr%12, 0, 12, 0, 360 );
  arc(0,0,180,180,0, end3);
  push();
  rotate(end3);
  //line(0,0,50,0);
  textSize(16);
  strokeWeight(1);
  text(hr,50,15);
  pop();  

  
}


function minu() {
  fill(241,5,5, 140);

  let mn= minute();

  //minutes
  stroke('#05f5ad');
  let end2= map(mn, 0, 60, 0, 360 );
  arc(0,0,200,200,0, end2);
  push();
  rotate(end2);
  //line(0,0,75,0);
  textSize(16);
  strokeWeight(1);
  text(mn,80,20);
  
  pop();  
  
  
} 


