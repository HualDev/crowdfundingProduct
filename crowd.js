let backed=document.getElementById('backed').value
let nBacked=document.getElementById('nBacked').value
let bambooNumber=document.getElementById('bambooNumber').value
let bambooLeft=document.getElementById('bambooLeft').value
let blackNumber=document.getElementById('blackNumber').value
let blackLeft=document.getElementById('blackLeft').value
let mahoganyLeft=document.getElementById('mahoganyLeft').value
let percent

document.getElementById('right').addEventListener('click', displayMenu)
document.getElementById('back').addEventListener('click',displayBackModal)
document.getElementById('r1').addEventListener('click', completed)
document.getElementById('r1').addEventListener('click', noReward)
document.getElementById('r2').addEventListener('click', chosen)
document.getElementById('r3').addEventListener('click', chosen1)
document.getElementById('r4').addEventListener('click', chosen2)
document.getElementById('closeModal').addEventListener('click', returnPrincipal)
document.getElementById('bambooContinue').addEventListener('click', bambooCalculator)
document.getElementById('blackContinue').addEventListener('click', blackCalculator)
document.getElementById('mahoganyContinue').addEventListener('click', mahoganyCalculator)
document.getElementById('bambooSelect').addEventListener('click', displayBackModal)
document.getElementById('bambooSelect').addEventListener('click', chosen)
document.getElementById('blackSelect').addEventListener('click', displayBackModal)
document.getElementById('blackSelect').addEventListener('click', chosen1)
document.getElementById('mahoganySelect').addEventListener('click', displayBackModal)
document.getElementById('mahoganySelect').addEventListener('click', chosen2)
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
    document.getElementById('r1').focus()
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
    document.getElementById('mahogany').style.borderColor='whiteSmoke'
    document.getElementById('blackValor').style.display='none'
    document.getElementById('mahoganyValor').style.display='none'
    document.getElementById('r2').checked=true
}

function chosen1(){
    document.getElementById('black').style.borderColor='hsl(176, 72%, 28%)'
    document.getElementById('blackValor').style.display='block'
    document.getElementById('blackNumber').focus()
    document.getElementById('bamboo').style.borderColor='whiteSmoke'
    document.getElementById('mahogany').style.borderColor='whiteSmoke'
    document.getElementById('bambooValor').style.display='none'
    document.getElementById('mahoganyValor').style.display='none'
    document.getElementById('r3').checked=true  
}

function chosen2(){
    document.getElementById('mahogany').style.borderColor='hsl(176, 72%, 28%)'
    document.getElementById('mahoganyValor').style.display='block'
    document.getElementById('mahoganyNumber').focus()
    document.getElementById('bamboo').style.borderColor='whiteSmoke'
    document.getElementById('black').style.borderColor='whiteSmoke'
    document.getElementById('bambooValor').style.display='none'
    document.getElementById('blackValor').style.display='none'
    document.getElementById('r4').checked=true 
}

function bambooCalculator(){
    bambooNumber=document.getElementById('bambooNumber').value

    if(bambooNumber<25){
        chosen()
        document.getElementById('bambooNumber').style.borderColor='tomato'        
    }else{
        backed=parseInt(backed)+parseInt(bambooNumber)
        nBacked=parseInt(nBacked)+1
        bambooLeft=parseInt(bambooLeft)-1
        document.getElementById('backed').value=backed
        document.getElementById('nBacked').value=nBacked
        document.getElementById('bambooLeft').value=bambooLeft
        document.getElementById('mBambooLeft').value=bambooLeft
        document.getElementById('mobileBambooLeft').value=bambooLeft
        percent=parseInt(backed/1000)
        document.getElementById('hrLine').style.width=percent+'%'
        completed()

        if(bambooLeft<=0){
            document.getElementById('bamboo').style.opacity='0.5'
            document.getElementById('bamboo').style.pointerEvents='none'
            document.getElementById('bambooCard').style.opacity='0.5'
            document.getElementById('bambooCard').style.pointerEvents='none'
            document.getElementById('bambooSelect').innerHTML='Out of Stock'
        }
    }    
 }

function blackCalculator(){
    blackNumber=document.getElementById('blackNumber').value

    if(blackNumber<75){
        chosen1()
        document.getElementById('blackNumber').style.borderColor='tomato' 
    }else{
        backed = parseInt(backed)+parseInt(blackNumber)
        nBacked=parseInt(nBacked)+1
        blackLeft=parseInt(blackLeft)-1
        document.getElementById('backed').value=backed
        document.getElementById('nBacked').value=nBacked
        document.getElementById('blackLeft').value=blackLeft
        document.getElementById('mBlackLeft').value=blackLeft
        document.getElementById('mobileBlackLeft').value=blackLeft
        completed()

        if(blackLeft<=0){
            document.getElementById('black').style.opacity='0.5'
            document.getElementById('black').style.pointerEvents='none'
            document.getElementById('blackCard').style.opacity='0.5'
            document.getElementById('blackCard').style.pointerEvents='none'
            document.getElementById('blackSelect').innerHTML='Out of Stock'
        }
    }    
}

function mahoganyCalculator(){
    mahoganyNumber=document.getElementById('mahoganyNumber').value

    if(mahoganyNumber<200){
        chosen2()
        document.getElementById('mahoganyNumber').style.borderColor='tomato' 
    }else{
        backed = parseInt(backed)+parseInt(blackNumber)
        nBacked=parseInt(nBacked)+1
        mahoganyLeft=parseInt(mahoganyLeft)-1
        document.getElementById('backed').value=backed
        document.getElementById('nBacked').value=nBacked
        document.getElementById('mahoganyLeft').value=mahoganyLeft
        document.getElementById('mMahoganyLeft').value=mahoganyLeft
        document.getElementById('mobileMahoganyLeft').value=mahoganyLeft
        completed()

        if(mahoganyLeft<=0){
            document.getElementById('mahogany').style.opacity='0.5'
            document.getElementById('mahogany').style.pointerEvents='none'
            document.getElementById('mahoganyCard').style.opacity='0.5'
            document.getElementById('mahoganyCard').style.pointerEvents='none'
            document.getElementById('mahoganySelect').innerHTML='Out of Stock'
        }
    }    
}

function noReward(){
    nBacked=parseInt(nBacked)+1
    document.getElementById('nBacked').value=nBacked
}

function completed(){
    document.getElementById('completedModal').style.display='block'
    document.getElementById('modal').style.display='none'
    document.getElementById('bamboo').style.borderColor='whiteSmoke'
    document.getElementById('bambooValor').style.display='none'
    document.getElementById('black').style.borderColor='whiteSmoke'
    document.getElementById('blackValor').style.display='none'
    document.getElementById('mahogany').style.borderColor='whiteSmoke'
    document.getElementById('mahoganyValor').style.display='none'
    document.getElementById('r1').checked=false
    document.getElementById('r2').checked=false
    document.getElementById('r3').checked=false
    document.getElementById('r4').checked=false
    document.getElementById('got').focus()
}

