const searchBook = () => {
    const search = document.getElementById('search-text')
    const errorHandale = document.getElementById('errors')
    const searchText = search.value;
    if (searchText === '') {
        errorHandale.innerText = `Search Feild Cannot Be Empty`

    }
    // console.log(searchText)

    toggleSpinner('visible')
    toggleSearchResult('hidden')
    toggleBookQuantity('hidden')
    toggleErrorHandle('hidden')
    search.value = ''
    const url = `http://openlibrary.org/search.json?q=${searchText}`
    // console.log(url)
    toggleErrorHandle('visible')
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
}
//          Toggle-Handle
const toggleSpinner = visibilityStyle => {
    document.getElementById('spinner').style.visibility = visibilityStyle;
}
const toggleSearchResult = visibilityStyle => {
    document.getElementById('search-result').style.visibility = visibilityStyle;
}
const toggleBookQuantity = visibilityStyle => {
    document.getElementById('book-quantity').style.visibility = visibilityStyle;
}
const toggleErrorHandle = visibilityStyle => {
    document.getElementById('errors').style.visibility = visibilityStyle;
}
//         Display-Result
const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = ''
    const bookQuantity = document.getElementById('book-quantity')
    bookQuantity.textContent = ''
    const h2 = document.createElement('h2')
    h2.innerText = `Find Books:${books.length}`
    bookQuantity.appendChild(h2)
    toggleSpinner('hidden')
    toggleSearchResult('visible')
    toggleBookQuantity('visible')
    books.forEach(book => {
        // console.log(book)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
              <div class="card">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <a class = "text-dark">${book.author_name}</a>
                        <h6>Publisher: ${book.publisher[0]}</h6>
                        <p>Published: ${book.publish_date[0]}</p>
                    </div>
                </div>
        `
        searchResult.appendChild(div)
        toggleSpinner('hidden')
        toggleSearchResult('visiable')
        toggleBookQuantity('visible')
        toggleErrorHandle('hidden')
    })

}