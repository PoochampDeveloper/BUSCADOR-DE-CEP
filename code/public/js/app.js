async function loadInfo(cep) {
	const request = await fetch(`http://viacep.com.br/ws/${cep}/json`)
	const body = await request.json()
	document.querySelector(".output-box").innerHTML = `
		<p>Cep = ${body.cep}</p>
		<p>Rua = ${body.logradouro}</p>
		<p>Numero = ${body.complemento}</p>
		<p>Bairro = ${body.bairro}</p>
		<p>Cidade = ${body.localidade}</p>
		<p>Estado = ${body.uf}</p>
	`
}

const input = document.querySelector("#cep")
const button = document.querySelector("#btn")
const limparButton = document.querySelector("#limpar")

button.addEventListener("click", () => {
	if (input.value === "") {
		alert("Insira alguma coisa")
	} else {
		loadInfo(input.value.trim())
	}
})

limparButton.addEventListener("click", () => {
	input.value = ""
})