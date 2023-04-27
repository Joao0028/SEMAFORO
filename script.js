function vermelho(){
    var vermelho = document.querySelector(".vermelho")
    var amarelo = document.querySelector(".amarelo")
    var verde = document.querySelector(".verde")




    amarelo.style.transition = "0.2s"
    amarelo.style.background = "rgb(97, 88, 7)"
    amarelo.style.boxShadow = "none"
    amarelo.style.border = " 1px solid white"

    verde.style.transition = "0.2s"
    verde.style.background = "rgb(60, 120, 64)"
    verde.style.boxShadow = "none"
    verde.style.border = " 1px solid white"

    vermelho.style.transition = "0.2s"
    vermelho.style.background = "red"
    vermelho.style.boxShadow = "0 0  18px 5px #991d1d"
    vermelho.style.border = "1px solid rgb(255, 255, 255, 0.172)"
}

function amarelo(){
    var vermelho = document.querySelector(".vermelho")
    var amarelo = document.querySelector(".amarelo")
    var verde = document.querySelector(".verde")




    amarelo.style.transition = "0.2s"
    amarelo.style.background = "yellow"
    amarelo.style.boxShadow = "0 0  18px 5px yellow"
    amarelo.style.border = " 1px solid rgb(255, 255, 255, 0.172)"

    verde.style.transition = "0.2s"
    verde.style.background = "rgb(60, 120, 64)"
    verde.style.boxShadow = "none"
    verde.style.border = " 1px solid white"

    vermelho.style.transition = "0.2s"
    vermelho.style.background = "brown"
    vermelho.style.boxShadow = "none"
    vermelho.style.border = "1px solid white"
}

function verde(){
    var vermelho = document.querySelector(".vermelho")
    var amarelo = document.querySelector(".amarelo")
    var verde = document.querySelector(".verde")




    amarelo.style.transition = "0.2s"
    amarelo.style.background = "rgb(97, 88, 7)"
    amarelo.style.boxShadow = "none"
    amarelo.style.border = " 1px solid white"

    verde.style.transition = "0.2s"
    verde.style.background = "green"
    verde.style.boxShadow = "0 0  18px 5px green"
    verde.style.border = " 1px solid rgb(255, 255, 255, 0.172)"

    vermelho.style.transition = "0.2s"
    vermelho.style.background = "brown"
    vermelho.style.boxShadow = "none"
    vermelho.style.border = "1px solid white"
}

function iniciar(){
    var vermelho = document.querySelector(".vermelho")
    var amarelo = document.querySelector(".amarelo")
    var verde = document.querySelector(".verde")

    amarelo.style.transition = "0.2s"
    amarelo.style.background = "rgb(97, 88, 7)"
    amarelo.style.boxShadow = "none"
    amarelo.style.border = " 1px solid white"

    verde.style.transition = "0.2s"
    verde.style.background = "rgb(60, 120, 64)"
    verde.style.boxShadow = "none"
    verde.style.border = " 1px solid white"

    vermelho.style.transition = "0.2s"
    vermelho.style.background = "brown"
    vermelho.style.boxShadow = "none"
    vermelho.style.border = "1px solid white"


    for(var i = 0; i <= 10; i++ ){
        //Vermelho:
        setTimeout(()=>{
            var vermelho = document.querySelector(".vermelho")
            var amarelo = document.querySelector(".amarelo")
            var verde = document.querySelector(".verde")

            amarelo.style.transition = "0.2s"
            amarelo.style.background = "rgb(97, 88, 7)"
            amarelo.style.boxShadow = "none"
            amarelo.style.border = " 1px solid white"

            verde.style.transition = "0.2s"
            verde.style.background = "rgb(60, 120, 64)"
            verde.style.boxShadow = "none"
            verde.style.border = " 1px solid white"

            vermelho.style.transition = "0.2s"
            vermelho.style.background = "red"
            vermelho.style.boxShadow = "0 0  18px 5px #991d1d"
            vermelho.style.border = "1px solid rgb(255, 255, 255, 0.172)"
        },1000)
    }
    //Amarelo
    setTimeout(()=>{
        var vermelho = document.querySelector(".vermelho")
        var amarelo = document.querySelector(".amarelo")
        var verde = document.querySelector(".verde")
    
        amarelo.style.transition = "0.2s"
        amarelo.style.background = "yellow"
        amarelo.style.boxShadow = "0 0  18px 5px yellow"
        amarelo.style.border = " 1px solid rgb(255, 255, 255, 0.172)"
    
        verde.style.transition = "0.2s"
        verde.style.background = "rgb(60, 120, 64)"
        verde.style.boxShadow = "none"
        verde.style.border = " 1px solid white"
    
        vermelho.style.transition = "0.2s"
        vermelho.style.background = "brown"
        vermelho.style.boxShadow = "none"
        vermelho.style.border = "1px solid white"
    },3000)

    //Verde
    setTimeout(()=>{
        var vermelho = document.querySelector(".vermelho")
        var amarelo = document.querySelector(".amarelo")
        var verde = document.querySelector(".verde")
    
        amarelo.style.transition = "0.2s"
        amarelo.style.background = "rgb(97, 88, 7)"
        amarelo.style.boxShadow = "none"
        amarelo.style.border = " 1px solid white"
    
        verde.style.transition = "0.2s"
        verde.style.background = "green"
        verde.style.boxShadow = "0 0  18px 5px green"
        verde.style.border = " 1px solid rgb(255, 255, 255, 0.172)"
    
        vermelho.style.transition = "0.2s"
        vermelho.style.background = "brown"
        vermelho.style.boxShadow = "none"
        vermelho.style.border = "1px solid white"
    },6000)
    setTimeout(()=>{
        var vermelho = document.querySelector(".vermelho")
        var amarelo = document.querySelector(".amarelo")
        var verde = document.querySelector(".verde")
    
        amarelo.style.transition = "0.2s"
        amarelo.style.background = "rgb(97, 88, 7)"
        amarelo.style.boxShadow = "none"
        amarelo.style.border = " 1px solid white"
    
        verde.style.transition = "0.2s"
        verde.style.background = "rgb(60, 120, 64)"
        verde.style.boxShadow = "none"
        verde.style.border = " 1px solid white"
    
        vermelho.style.transition = "0.2s"
        vermelho.style.background = "brown"
        vermelho.style.boxShadow = "none"
        vermelho.style.border = "1px solid white"
    },7000)

    
    console.log(i)
}
