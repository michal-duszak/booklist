export const buildTable = (table, books) => {
    books.forEach(book => {
        const newBook = document.createElement('tr')
        const titleCell = document.createElement('td')
        titleCell.innerText = book.title
        newBook.appendChild(titleCell)
        const authorCell = document.createElement('td')
        authorCell.innerText = book.author
        newBook.appendChild(authorCell)
        const categoryCell = document.createElement('td')
        categoryCell.innerText = book.category
        newBook.appendChild(categoryCell)
        const priorityCell = document.createElement('td')
        priorityCell.innerText = book.priority
        newBook.appendChild(priorityCell)
        const actionsCell = document.createElement('td')
        const actionsCellDiv = document.createElement('div')
        actionsCellDiv.classList.add("actions")
        const trashIconEl = document.createElement("i")
        trashIconEl.classList.add("fas", "fa-trash")
        actionsCellDiv.appendChild(trashIconEl)
        actionsCell.appendChild(actionsCellDiv)
        newBook.appendChild(actionsCell)
        table.appendChild(newBook)
    })
}

export const buildNewBook = (table, book) => {
    const newBook = document.createElement('tr')
        const titleCell = document.createElement('td')
        titleCell.innerText = book.title
        newBook.appendChild(titleCell)
        const authorCell = document.createElement('td')
        authorCell.innerText = book.author
        newBook.appendChild(authorCell)
        const categoryCell = document.createElement('td')
        categoryCell.innerText = book.category
        newBook.appendChild(categoryCell)
        const priorityCell = document.createElement('td')
        priorityCell.innerText = book.priority
        newBook.appendChild(priorityCell)
        table.appendChild(newBook)
}
