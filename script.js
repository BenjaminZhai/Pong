let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 700;

// Global Variables
let y = 300
let y2 = 300
let x = 790
let x2 = 0
let frame = 0
let bx = 400
let by = 300
let bdx = 5
let bdy = 0
let bdx2 = -5
let side = Math.random()
let s1 = 0
let s2 = 0

let upkeypressed = false;
let downkeypressed = false;
let wkeypressed = false;
let skeypressed = false;

let imgone = document.getElementById("1")
let imgtwo = document.getElementById("2")
let imgthree = document.getElementById("3")

document.getElementById("btn").addEventListener("click", start);

function start(){

    // Update Frames
    frame += 2
    
    if (frame < 120){
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, cnv.width, cnv.height);
        ctx.drawImage(imgthree, 0, 0, cnv.width, cnv.height)
    } else if (frame < 240){
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, cnv.width, cnv.height);
        ctx.drawImage(imgtwo, 0, 0, cnv.width, cnv.height)
    } else if (frame < 360){
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, cnv.width, cnv.height);
        ctx.drawImage(imgone, 0, 0, cnv.width, cnv.height)
    } else{


    // MOVEMENT
    if (upkeypressed){
        y -= 5
    }

    if (downkeypressed){
        y += 5
    }

    if (wkeypressed){
        y2 -= 5
    }

    if (skeypressed){
        y2 += 5
    }

    if (y >= 600){
        y = 600
      } else if (y <= 0){
        y=0
      }
    
    if (y2 >= 600){
        y2 = 600
      } else if (y2 <= 0){
        y2 = 0
      }
    // Draw
    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Player 
    ctx.fillStyle = "white"
    ctx.fillRect(x, y, 10, 100)

    // Player 2
    ctx.fillStyle = "white"
    ctx.fillRect(x2, y2, 10, 100)

    // Score
    ctx.font = "30px Comic Sans MS"
    ctx.fillStyle = "white"
    ctx.fillText(s2, 50, 50)

    ctx.font = "30px Comic Sans MS"
    ctx.fillStyle = "white"
    ctx.fillText(s1, 720, 50)


    if (side <= 0.5){
    by += bdy
    bx += bdx
    } else {
        bx += bdx2
        by += bdy
    }
    
  
    if (bx >= x + 10 && by >= y && by <= y+33){
        bdx *= -1
        bdx2 *= -1
        bdy = -5
        
    } else if (bx >= x + 10 && by >= y && by <= y+66){
        bdx *= -1
        bdx2 *= -1
    } else if (bx >= x + 10 && by >= y && by <= y+100){
        bdx *= -1
        bdx2 *= -1
        bdy = 5
    }
    
     
    if (bx <= x2 + 10 && by >= y2 && by <= y2+33){
        bdx *= -1
        bdx2 *= -1
        bdy = -5
    } else if (bx <= x2 + 10 && by >= y2 && by <= y2+66){
        bdx *= -1
        bdx2 *= -1
    } else if (bx <= x2 + 10 && by >= y2 && by <= y2+100){
        bdx *= -1
        bdx2 *= -1
        bdy = 5
    }

    if (by <=0 && bx >= 0){
        bdy *= -1
    } else if (by >= 700 && bx <= 800){
        bdy *= -1
    }

    if (bx < -10){
        bx = 400
        by = Math.random() * 650
        bdx *= -1
        bdx2 *= -1
        s1 ++

        
    } else if (bx > 810){
        bx = 400
        by = Math.random() * 650
        bdx *= -1
        bdx2 *= -1
        s2 ++
    }

    // Ball
    ctx.fillStyle = "white"
    ctx.beginPath();
    ctx.arc(bx, by, 10, 0, 2* Math.PI)
    ctx.fill()
    
}

    requestAnimationFrame(start)
}

// Event Stuff
document.addEventListener("keyup", keyup)
document.addEventListener("keydown", keydown)

function keydown(event){
    console.log(event.keyCode)
    if (event.keyCode === 38){
        upkeypressed = true;
      } else if (event.keyCode === 40){
        downkeypressed = true
    } else if (event.keyCode === 87){
        wkeypressed = true
    } else if (event.keyCode === 83){
        skeypressed = true
    }
    
}

function keyup (event){
    if (event.keyCode === 38) {
        upkeypressed = false;
      } else if (event.keyCode === 40) { 
        downkeypressed = false;
      } else if (event.keyCode === 87){
        wkeypressed = false;
    } else if (event.keyCode === 83){
        skeypressed = false;
    }
}