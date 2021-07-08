import { clienteService } from "../service/cliente-service.js"

const form = document.querySelector("[data-form]")

try{
    form.addEventListener('submit', async (event) => {
        event.preventDefault()
    
        const nome = event.target.querySelector("[data-nome]").value
        const email = event.target.querySelector("[data-email]").value
    
        await clienteService.criaCliente(nome, email)
        window.location.href = '../telas/cadastro_concluido.html'
    })
}catch(error){
    console.log(error)
    window.location.href = "../telas/erro.html"
} 
