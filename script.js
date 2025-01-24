const $form = document.querySelector('#form')
const $bottonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
	event.preventDefault()
	const form = new FormData(this)
	$bottonMailto.setAttribute('href',`mailto:nicolascastillocamacho@gmail.com?subject= NEW MESSAGE from: ${form.get('name')}&body=${form.get('message')}`)
	$bottonMailto.click()
}