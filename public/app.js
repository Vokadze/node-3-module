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
    let title = event.target.dataset.id
    console.log('title', title)

    const newTitleName = prompt('Введите новое название', `${title}`.trim())
    console.log('newTitleName', newTitleName)

    rename(newTitleName).then(() => {
      return event.target.dataset.id.replace(title, newTitleName)
    })
  }
})

async function remove(id) {
  await fetch(`/${id}`, { method: 'DELETE' })
}

async function rename(newTitleName) {
  await fetch(`/${JSON.stringify(newTitleName)}`, { method: 'PUT' })
}
