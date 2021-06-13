let output

function setup(){
    createCanvas(800,600)
    background(50)
    output = createP("output")

    stroke(255)
    //angleMode(DEGREES)
    translate(0,300)  // make this the origin
    depth = 5
    //caculate lenth so it fits on the canvas depth 5 is 10 pixles
    ruleLenght = 10*(3**(5-depth)) 
    koch(depth,ruleLenght)  //koch(depth of recursion, len of first rule

}
    
function draw(){
    background(50);
    translate(0,300)  // make this the origin
    depth = int(map(mouseX,0,width,0,6,true))
    print("depth "+str(depth))
    output.html("depth "+str(depth))
    //depth = 5
    //caculate lenth so it fits on the canvas depth 5 is 10 pixles
    ruleLenght = 10*(3**(5-depth)) 
    koch(depth,ruleLenght)  
}
        
function rule(ln){
    ln /=3
    // draw rule
    line(0,0,ln,0)
    translate(ln,0)
    rotate(radians(-60))
    line(0,0,ln,0)
    translate(ln,0)
    rotate(radians(120))
    line(0,0,ln,0)
    translate(ln,0)
    rotate(radians(-60))
    line(0,0,ln,0)
}
   
function koch(order, ln){
    if (order == 0){
      line(0,0,width,0)
    }
    else if(order == 1){
        rule(ln)
    }
    else{
        order -= 1
        koch(order,ln)
        pos = ln
        
        pos =ln *0.3333
        translate(pos,0)
        rotate(radians(-60))
        koch(order,ln)
        pos =ln *0.3333
        translate(pos,0)
        rotate(radians(120))
        koch(order,ln)
        pos =ln *0.3333
        translate(pos,0)
        rotate(radians(-60))
        koch(order,ln)
    }
}