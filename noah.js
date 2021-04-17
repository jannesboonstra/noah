let head = document.getElementById("head");
let main = document.getElementById("main");
let dagen = new Date(2021,5,18).getTime();
let woorddag = "";
let nu = new Date().getTime();
let verschil = dagen - nu;
let dag = Math.floor(verschil / (1000 *60*60*24))

if(dag < 0){
    dag = -1;
    clearInterval(countdown);
}
switch(dag){
    case -1:
        woorddag = `<h1>Je bent net jarig geweest</h1>`;
        break;
    case 0:
        woorddag = `<h1>Van harte gefeliciteerd NOAH!!!!</h1>`;
        break;
    case 1:
        woorddag = `<h1>Nog ${dag} nachtje slapen!</h1>`;
        break;
    default:
        woorddag = `<h1>Nog ${dag} nachtjes slapen!</h1>`;
        break;

};

head.innerHTML = woorddag;

for(let i = 0; i < dag; i++){
    main.innerHTML += `<div class="cont"><img src="loader.gif" class="rocket"></img><p class="num">${i + 1}</p></div>`;
}

if(dag == 0){
    main.innerHTML = "<img src='birthday.gif'></img>"
}

