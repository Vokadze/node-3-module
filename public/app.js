document.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id
    console.log(id)

    console.log('remove: ', id)

    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }
})

document.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'rename') {
    const titleText = event.target.dataset.id
    const title =
      prompt('Введите новое название', `${titleText}`.trim()) || titleText

    rename(title).then(() => {
      event.target.dataset.id
    })
  }
})

async function remove(id) {
  await fetch(`/${id}`, { method: 'DELETE' })
}

async function rename(title) {
  await fetch(`/${title}`, { method: 'PUT' })
}
