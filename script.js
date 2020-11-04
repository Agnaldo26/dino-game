const dino = document.querySelector('.dino');
const background = document.querySelector('.background')
let isJumping =false;

function handleKeyUp(event){
    if(event.keyCode === 32){
       if(!isJumping){
           jump();
       }
    }
}
console.log(handleKeyUp)


function jump(){
    let position =0;
    isJumping =true;

    let upInterval= setInterval(() =>{
        if(position>= 150){
            clearInterval(upInterval);

            //Descendo
            let downInterval = setInterval(() =>{
                if(position <= 0){
                    clearInterval(downInterval)
                    isJumping= false;
                } else{
                    position -= 20;
                    dino.style.bottom = position + "px"}  
            },40)
       
        } else{
            //Subindo
            position += 20;
            dino.style.bottom = position +'px'}

    },10);
}

function createCactus(){
    const cactus = document.createElement('div')
    let cactusPosition = 1000;
    let randomTime = Math.random() * 4000;


    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition +'px'
    background.appendChild(cactus);

    let leftInterval = setInterval (() => {
        

        if(cactusPosition < -60){
            clearInterval(leftInterval);
                background.removeChild(cactus)
        } else {
            currentPosition = 7;
            cactusPosition -= currentPosition +1;
            cactus.style.left = cactusPosition + 'px';
        }

    },20);

    setTimeout(createCactus, randomTime) //Recursividade: uma função invoca ela mesma de dentro dela. O segundo argumento, randomTIme, é o tempo em milessegundos.
}

createCactus();

document.addEventListener('keydown', handleKeyUp); 