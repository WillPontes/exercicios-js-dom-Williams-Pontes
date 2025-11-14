function mudarForma(){
    div = document.getElementById("forma")
    btnforma = document.getElementById("btn-forma")
    const valueborder = div.style.borderRadius 
  
    if (valueborder == "0%"){
        div.style.borderRadius = "50%"
        btnforma.innerText = "Mudar Forma"
    }
    else{
        div.style.borderRadius = "0%"
        btnforma.innerText = "Retornar ao original"
    }
    
}

