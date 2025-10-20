const $form = document.querySelector('#form')
const $bottonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
	event.preventDefault()
	const form = new FormData(this)
	$bottonMailto.setAttribute('href',`mailto:ncastillo224@gmail.com?subject= NEW TAMA REWARDS MESSAGE from: ${form.get('name')}&body=${form.get('message')}`)
	$bottonMailto.click()
}
