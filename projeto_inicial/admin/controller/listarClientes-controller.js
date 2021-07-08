import { clienteService } from "../service/cliente-service.js"

const criaNovaLinha = (nome, email, id) => {
    const novaLinha = document.createElement("tr")
    const content = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
    `
    novaLinha.innerHTML = content
    novaLinha.dataset.id = id
    return novaLinha
}

const table = document.querySelector("[data-tabela]")

table.addEventListener('click', async (event) => {
    let botaoDeletar = event.target.className === 'botao-simples botao-simples--excluir'
    if (botaoDeletar) {
        try {
            const linhaCliente = event.target.closest('[data-id]')
            let id = linhaCliente.dataset.id
            await clienteService.removeCliente(id)
            linhaCliente.remove
        } catch (error) {
            console.log(error)
            window.location.href = "../telas/erro.html"
        }
    }
})

const render = async () => {
    try{
        const clientService = await clienteService.listaClientes()
        clientService.forEach(element => {
            table.appendChild(criaNovaLinha(element.nome, element.email, element.id))
        })
    }catch (error) {
        console.log(error)
        window.location.href = "../telas/erro.html"
    }
}

render()