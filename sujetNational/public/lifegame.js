let canvas = document.getElementById("myCanvas");
let body = document.getElementById("b");
let ctx = canvas.getContext("2d");
let x = window.innerWidth;
let y = window.innerHeight;
ctx.canvas.width = window.innerWidth - 1;
ctx.canvas.height = window.innerHeight - 1;
let isDrawing = false;
let l = false;
let a = false;
window.addEventListener("resize", event => {
    console.log(x + " " + y)
    x = window.innerWidth;
    y = window.innerHeight;
    ctx.canvas.width = window.innerWidth - 1;
    ctx.canvas.height = window.innerHeight - 1;
    sto = false
    vitesse = 100
    console.log(tab2.length)
    for (let i = 0; i < x / 10; i++) {
        if (i >= tab2.length) {
            tab2[i] = []
            tab = []
        }
    }
    console.log(tab2.length)
    makeTab()
});




body.addEventListener("click", event => {
    if (isDrawing) {
        tab2[Math.ceil(event.x / 10) - 1][Math.ceil(event.y / 10) - 1] = true

        ctx.beginPath();
        ctx.rect((Math.ceil(event.x / 10) - 1) * 10, (Math.ceil(event.y / 10) - 1) * 10, 10, 10);
        ctx.fill();
        ctx.closePath();

    }
    if(!a){
        $( "#button" ).toggleClass( "buttonsAnimates" )
        $( "#button" ).toggleClass( "button" )
        console.log("aaa")
        a=true
    }
    isDrawing = false;
})
body.addEventListener('mousedown', event => {
    isDrawing = true;
})
body.addEventListener('mousemove', e => {
    if (isDrawing) {
        tab2[Math.ceil(event.x / 10) - 1][Math.ceil(event.y / 10) - 1] = true

        ctx.beginPath();
        ctx.rect((Math.ceil(event.x / 10) - 1) * 10, (Math.ceil(event.y / 10) - 1) * 10, 10, 10);
        ctx.fill();
        ctx.closePath();

    }
})

let tab = []
let tab2 = []
let sto = false
let vitesse = 100
for (let i = 0; i < x / 10; i++) {
    tab2[i] = []
    for (let j = 0; j < y / 10; j++) {
        tab2[i][j] = false
    }
}
random()

function makeTab() {
    for (let i = 0; i < x / 10; i++) {
        tab[i] = []
        for (let j = 0; j < y / 10; j++) {
            tab[i][j] = tab2[i][j]
        }
    }
}
makeTab()
const make = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < x / 10; i++) {
        ctx.moveTo(i * 10, 0);
        ctx.lineTo(i * 10, y);
        if (l)
            ctx.stroke();

    }
    for (let j = 0; j < y / 10; j++) {
        ctx.moveTo(0, j * 10);
        ctx.lineTo(x, j * 10);
        if (l)
            ctx.stroke();

    }

    for (let i = 0; i < x / 10; i++) {
        for (let j = 0; j < y / 10; j++) {
            n = voisinNb(i, j)
            if (tab[i][j]) {
                if (n == 2 || n == 3) {
                    tab2[i][j] = true

                } else {
                    tab2[i][j] = false
                }

            } else if (n == 3) {
                tab2[i][j] = true
            }
        }
    }

    makeTab()
    for (let i = 0; i < x / 10; i++) {
        for (let j = 0; j < y / 10; j++) {
            if (tab[i][j] == true) {
                ctx.beginPath();
                ctx.rect(i * 10, j * 10, 10, 10);
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
const draw = () => {
    if (!sto)
        make();
}
function voisinNb(x, y) {
    n = 0;
    if (tab[x - 1]) {
        n = tab[x - 1][y - 1] ? n + 1 : n
        n = tab[x - 1][y] ? n + 1 : n
        n = tab[x - 1][y + 1] ? n + 1 : n

    }
    n = tab[x][y - 1] ? n + 1 : n
    n = tab[x][y + 1] ? n + 1 : n

    if (tab[x + 1]) {
        n = tab[x + 1][y - 1] ? n + 1 : n
        n = tab[x + 1][y] ? n + 1 : n
        n = tab[x + 1][y + 1] ? n + 1 : n
    }
    return n
}
inter = setInterval(draw, vitesse)

function pause() {
    sto = sto ? false : true
    console.log(sto)
}

function random() {

    for (let i = 0; i < x / 10; i++) {
        tab2[i] = []
        for (let j = 0; j < y / 10; j++) {
            tab2[i][j] = Math.random() < 0.5
        }
    }
}

function rapi() {
    clearInterval(inter)
    vitesse /= 2;

    inter = setInterval(draw, vitesse)

}

function lent() {
    clearInterval(inter)
    vitesse *= 2;
    inter = setInterval(draw, vitesse)
}

function ligne() {
    l = !l
}



