const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-120%';
}

function glowAdil() {
    document.getElementById("iconAdil").setAttribute('src', '../source/manGlow.svg');
    document.getElementById("nameAdil").style.color = "#dddddd";
    document.getElementById("adil").style.borderColor = "#aaaaaa";
}

function unglowAdil() {
    document.getElementById("iconAdil").setAttribute('src', '../source/man.svg');
    document.getElementById("nameAdil").style.color = "#777777";
    document.getElementById("adil").style.borderColor = "#444444";
}

function glowGhita() {
    document.getElementById("iconGhita").setAttribute('src', '../source/womanGlow.svg');
    document.getElementById("nameGhita").style.color = "#dddddd";
    document.getElementById("ghita").style.borderColor = "#aaaaaa";
}

function unglowGhita() {
    document.getElementById("iconGhita").setAttribute('src', '../source/woman.svg');
    document.getElementById("nameGhita").style.color = "#777777";
    document.getElementById("ghita").style.borderColor = "#444444";
}

function glowAdilEN() {
    document.getElementById("iconAdil").setAttribute('src', '../source/manGlow.svg');
    document.getElementById("nameAdil").style.color = "#dddddd";
    document.getElementById("adil").style.borderColor = "#aaaaaa";
}

function unglowAdilEN() {
    document.getElementById("iconAdil").setAttribute('src', '../source/man.svg');
    document.getElementById("nameAdil").style.color = "#777777";
    document.getElementById("adil").style.borderColor = "#444444";
}

function glowGhitaEN() {
    document.getElementById("iconGhita").setAttribute('src', '../source/womanGlow.svg');
    document.getElementById("nameGhita").style.color = "#dddddd";
    document.getElementById("ghita").style.borderColor = "#aaaaaa";
}

function unglowGhitaEN() {
    document.getElementById("iconGhita").setAttribute('src', '../source/woman.svg');
    document.getElementById("nameGhita").style.color = "#777777";
    document.getElementById("ghita").style.borderColor = "#444444";
}

function glowAsmaeEN() {
    document.getElementById("iconAsmae").setAttribute('src', '../source/womanGlow.svg');
    document.getElementById("nameAsmae").style.color = "#dddddd";
    document.getElementById("asmae").style.borderColor = "#aaaaaa";
}

function unglowAsmaeEN() {
    document.getElementById("iconAsmae").setAttribute('src', '../source/woman.svg');
    document.getElementById("nameAsmae").style.color = "#777777";
    document.getElementById("asmae").style.borderColor = "#444444";
}

function glowAsmae() {
    document.getElementById("iconAsmae").setAttribute('src', '../source/womanGlow.svg');
    document.getElementById("nameAsmae").style.color = "#dddddd";
    document.getElementById("asmae").style.borderColor = "#aaaaaa";
}

function unglowAsmae() {
    document.getElementById("iconAsmae").setAttribute('src', '../source/woman.svg');
    document.getElementById("nameAsmae").style.color = "#777777";
    document.getElementById("asmae").style.borderColor = "#444444";
}
