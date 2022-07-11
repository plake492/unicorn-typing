window.addEventListener('DOMContentLoaded', () => {
  const removeBtn = document.getElementById('remove-unicorns-btn')
  const addBtn = document.getElementById('add-unicorns-btn')

  const removeUnicorns = () => {
    for (let i = 0; i < cornify_count; i++) {
      cornify_click_cupcake_button()
    }
  }

  removeBtn.addEventListener('click', removeUnicorns)
  addBtn.addEventListener('click', cornify_add)
})
