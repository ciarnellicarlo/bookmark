


const form = document.querySelector("#bookform")

let setBookmark = e => {
    let websiteName = document.querySelector('#websitename').value;
    let websiteUrl = document.querySelector('#websiteurl').value;

    let bookmark = {
        name: websiteName,
        url: websiteUrl
    }

    if(localStorage.getItem('bookmarks') === null) {
        let bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    e.preventDefault();
}

function outputBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    console.log(bookmarks);
    let bookmarksResults = document.querySelector("#websitesbooked");
    bookmarksResults.innerHTML = "";
    for(let i = 0; i < bookmarks.length; i++){
        let name = bookmarks[i].name;
        let url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="savedBookmarks">'+
                                      '<h3>' +name+
                                      '</h3>'+
                                      '</div>';
    }
}

form.addEventListener('submit', setBookmark);
