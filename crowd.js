document.getElementById('right').addEventListener('click', displayMenu)
document.getElementById('back').addEventListener('click',displayBackModal)
document.getElementById('r1').addEventListener('click', completed)
document.getElementById('r2').addEventListener('click', chosen)
document.getElementById('r3').addEventListener('click', chosen1)
document.getElementById('closeModal').addEventListener('click', returnPrincipal)
document.getElementById('bambooContinue').addEventListener('click', completed)
document.getElementById('blackContinue').addEventListener('click', completed)
document.getElementById('bambooSelect').addEventListener('click', displayBackModal)
document.getElementById('bambooSelect').addEventListener('click', chosen)
document.getElementById('blackSelect').addEventListener('click', displayBackModal)
document.getElementById('blackSelect').addEventListener('click', chosen1)
document.getElementById('got').addEventListener('click', returnPrincipal)

function displayMenu(){
   document.getElementById('menuMobile').classList.toggle('close')
   document.getElementById('hamburger').classList.toggle('hamburger')
   document.getElementById('closeMenu').classList.toggle('closeMenu')
   document.getElementById('hamburger').classList.toggle('closeMenu')
}

function displayBackModal(){
    document.getElementById('modal').style.display='block'
    document.getElementById('container').style.opacity='0.1'
    document.getElementById('container').style.pointerEvents='none'
}

function returnPrincipal(){
    document.getElementById('modal').style.display='none'
    document.getElementById('completedModal').style.display='none'
    document.getElementById('container').style.opacity='1'
    document.getElementById('container').style.pointerEvents='auto'
    //document.getElementById('prices').focus()
    document.getElementById('bamboo').style.borderColor='whiteSmoke'
    document.getElementById('bambooValor').style.display='none'
    document.getElementById('black').style.borderColor='whiteSmoke'
    document.getElementById('blackValor').style.display='none' 
}

function chosen(){
    document.getElementById('bamboo').style.borderColor='hsl(176, 72%, 28%)'
    document.getElementById('bambooValor').style.display='block'
    document.getElementById('bambooNumber').focus()
    document.getElementById('black').style.borderColor='whiteSmoke'
    document.getElementById('blackValor').style.display='none'  
}

function chosen1(){
    document.getElementById('black').style.borderColor='hsl(176, 72%, 28%)'
    document.getElementById('blackValor').style.display='block'
    document.getElementById('blackNumber').focus()
    document.getElementById('bamboo').style.borderColor='whiteSmoke'
    document.getElementById('bambooValor').style.display='none'    
}

function completed(){
    document.getElementById('completedModal').style.display='block'
    document.getElementById('modal').style.display='none'
    document.getElementById('bamboo').style.borderColor='whiteSmoke'
    document.getElementById('bambooValor').style.display='none'
    document.getElementById('black').style.borderColor='whiteSmoke'
    document.getElementById('blackValor').style.display='none'    
}