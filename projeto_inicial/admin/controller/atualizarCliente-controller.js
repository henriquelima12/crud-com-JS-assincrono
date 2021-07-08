import { clienteService } from "../service/cliente-service.js"

(async () => {
    const getUrl = new URL(window.location)
    const id = getUrl.searchParams.get('id')

    const inputNome = document.querySelector("[data-nome]")
    const inputEmail = document.querySelector("[data-email]")

    try{
        const dados = await clienteService.detalhaCliente(id)
        inputNome.value = dados.nome
        inputEmail.value = dados.email
    }catch(error){
        console.log(error)
        window.location.href = "../telas/erro.html"
    }

    const form = document.querySelector("[data-form]")
    try{
        form.addEventListener('submit', async (event) => {
            event.preventDefault()
            await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
            window.location.href = "../telas/edicao_concluida.html"
        })
    }catch(error){
        console.log(error)
        window.location.href = "../telas/erro.html"
    }   
})()

