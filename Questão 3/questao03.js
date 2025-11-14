function cadastrarUsuario(){
    const nome = document.getElementById("nome").value
    const dataNasc = document.getElementById("dataNasc").value
    const rua = document.getElementById("rua").value
    const numero = document.getElementById("numero").value
    const cidade = document.getElementById("cidade").value
    const uf = document.getElementById("uf").value
    
    
    const resultado = document.getElementById("resultado")
    resultado.style.color = "green"
    resultado.style.fontSize = "24px"
    resultado.innerText = (`${nome} nasceu no dia ${dataNasc} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${uf}.`)
    
}