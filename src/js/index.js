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
    
        })
    
        if (listaDeTarefas.lenght)
        {
            const checkbox = li.querySelector(".itemCheckbox")
    
            checkbox.addEventListener("change", (event) =>
            {
                if (event.target.checked)
                {
                    console.log("Elemento preenchido")
                }
            }) 
        }
  
    formulario.onsubmit = (event) => event.preventDefault()
})