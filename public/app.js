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
    const title = event.target.dataset.id
    console.log('title', title)

    const newTitlePrompt = prompt('Введите новое название', `${title}`.trim())
    console.log('newTitlePrompt', newTitlePrompt)

    const titlePut = title.replaceAll(title, newTitlePrompt)

    rename(titlePut).then(() => {
      event.target.dataset.id
      console.log('rename', titlePut)
    })
  }
})

async function remove(id) {
  await fetch(`/${id}`, { method: 'DELETE' })
}

async function rename(titlePut) {
  await fetch(`/${titlePut}`, { method: 'PUT' })
}
