
const primaryAnim = primary.getAnimations()[0];
const secondaryAnim = secondary.getAnimations()[0];
const charAnim = character.getAnimations()[0];

let lastDirection = 'right';
let atStart = true;
let atEnd = false;


primary.addEventListener("animationend", () => {
    primaryAnim.pause();
    if (lastDirection === 'right') atEnd = true;
    if (lastDirection === 'left') atStart = true;
});

const moveLeft = function(){
    if (atStart) return;
    if (atEnd) atEnd = false;

    if (lastDirection==='left') {
        primaryAnim.play();
        secondaryAnim.play();
        charAnim.play();
    } else {
        primaryAnim.reverse();
        secondaryAnim.reverse();
        charAnim.reverse();
    }
    lastDirection = 'left';
};

const moveRight = function(){
    if (atEnd) return;
    if (atStart) atStart = false;
    
    if (lastDirection==='right') {
        primaryAnim.play();
        secondaryAnim.play();
        charAnim.play();
       
    } else {
        primaryAnim.reverse();
        secondaryAnim.reverse();
        charAnim.reverse();
    
    }

    lastDirection = 'right';
};

const pause = function(){
    primaryAnim.pause();
    secondaryAnim.pause();
    charAnim.pause();
};


//=====================================
// Tastaturabfrage
//=====================================
globalThis.addEventListener('down', onkeydown, false);
globalThis.addEventListener('up', onkeyup, false);

let keys = {};
onkeydown = onkeyup = (e) => {
    keys[e.code] = e.type == 'keydown';

    if      (keys.KeyA && !keys.KeyD)  moveLeft();  	
    else if (keys.KeyD && !keys.KeyA)  moveRight();
    else if (keys.KeyA && keys.KeyD)   pause();  	
    else if (!keys.KeyA && !keys.KeyD) pause(); 
};

