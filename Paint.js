var color = "black";
var sizeDraw = 6;


var canvas = document.createElement("div");
canvas.classList.add("myCanvas");
document.body.appendChild(canvas);

var colorMenu = document.createElement("div");
colorMenu.classList.add("myMenu");
colorMenu.id = "myColors";
document.body.appendChild(colorMenu);

colors = ["black", "blue", "red", "green", "yellow", "orange", "white"];


function createColor() {

    for (var i = 0; i < colors.length; i++) {
        var buttonItem = document.createElement("div");
        buttonItem.className = "color-btn";
        buttonItem.style.backgroundColor = colors[i];
        colorMenu.appendChild(buttonItem);
    }

    var littleEraser = document.createElement("div");
    littleEraser.className = "littleEraser"
    colorMenu.appendChild(littleEraser);

    var bigEraser = document.createElement("div");
    bigEraser.className = "bigEraser"
    colorMenu.appendChild(bigEraser);

    var increase = document.createElement("div");
    increase.className = "color-btn in"
    var increaseText = document.createTextNode("+");
    increase.appendChild(increaseText);
    colorMenu.appendChild(increase);

    var decrease = document.createElement("div");
    decrease.className = "color-btn de"
    var decreaseText = document.createTextNode("-");
    decrease.appendChild(decreaseText);
    colorMenu.appendChild(decrease);

};


createColor();
draw(color);

function draw(color) {

    document.getElementsByClassName("myCanvas")[0].addEventListener("mousemove", event => {
        if (event.buttons === 1) {
            var x = event.clientX;
            var y = event.clientY;
            var point = document.createElement("div");
            point.style.left = x + "px";
            point.style.top = y + "px";
            point.style.position = "absolute";
            point.style.backgroundColor = "" + color;
            point.style.width = sizeDraw + "px";
            point.style.height = sizeDraw + "px";
            point.className = "myPoint";
            canvas.appendChild(point);
        }
    });

    
}


for (var j = 0; j < colors.length; j++) {
    document.getElementsByClassName("color-btn")[j].addEventListener("click", event => {
        var color = event.target.style.backgroundColor;
        
        draw(color);
    });
}

document.getElementsByClassName("littleEraser")[0].addEventListener("click", event => {
    color = "white";
    if (sizeDraw>2) {
        sizeDraw = sizeDraw-2;
    }

    draw(color);
});

document.getElementsByClassName("bigEraser")[0].addEventListener("click", event => {
    color = "white";
    sizeDraw = sizeDraw+2;

    draw(color);
});

document.getElementsByClassName("in")[0].addEventListener("click", event => {
    sizeDraw = sizeDraw+2;
});

document.getElementsByClassName("de")[0].addEventListener("click", event => {
    if (sizeDraw>2) {
        sizeDraw = sizeDraw-2;
    }
});


