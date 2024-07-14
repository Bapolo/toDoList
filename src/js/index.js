window.addEventListener("load", () => {
    const formulario = document.querySelector("#formulario")
    const entradaDotexto = document.querySelector("#entradaDotexto")
    const botaoEnviar = document.querySelector("#botaoEnviar")
    const listaDeTarefas = document.querySelector("#listaDeTarefas")
    let idDoItemDaDListas = 0

    botaoEnviar.addEventListener("click", () => 
        {
            if (entradaDotexto.value === "") return
    
            const li = document.createElement("li")
            li.setAttribute("id", ++idDoItemDaDListas)
            li.innerHTML = `<input type="checkbox" class="itemCheckbox"> ${entradaDotexto.value} <button class="botaoApagar">${'<i class="fa-solid fa-trash"></i>'}</button> `
            listaDeTarefas.appendChild(li)
            entradaDotexto.value = ""

            const checkbox = li.querySelector(".itemCheckbox")

            checkbox.addEventListener("change", (event) =>
            {
                const paiDoCheckBox = event.target.closest('li')

                if (event.target.checked)
                {
                    paiDoCheckBox.style.textDecoration = 'line-through'
                }
                else
                {
                    paiDoCheckBox.style.textDecoration = 'none'
                }
            })

            const botaoApagar = li.querySelector(".botaoApagar")

            botaoApagar.addEventListener("click", (event) =>
            {
                const paiDoBotao = event.target.closest('li')
                paiDoBotao.parentNode.removeChild(paiDoBotao)

            })
    
        })
    
  
    formulario.onsubmit = (event) => event.preventDefault()
})