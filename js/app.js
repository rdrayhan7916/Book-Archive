const searchBook = () => {
    const search = document.getElementById('search-text')
    const searchText = search.value;
    // console.log(searchText)
    search.value = ''
    const url = `http://openlibrary.org/search.json?q=${searchText}`
    console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
}

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result')

    books.forEach(book => {
        console.log(book)


        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
              <div class="card">
                    <img src="https://covers.openlibrary.org/b/id/554106-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <a class = "text-dark">${book.author_name}</a>
                        <h6>${book.publisher[0]}</h6>
                        <p>${book.publish_date[0]}</p>
                    </div>
                </div>
        `
        searchResult.appendChild(div)
    })

}