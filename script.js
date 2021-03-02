


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

    outputBookmarks()

    e.preventDefault();
}

function deleteBookmark(url) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for (let i = 0; i < bookmarks.length; i++) {
        if(bookmarks[i].url == url) {
            bookmarks.splice(i, 1)
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    outputBookmarks()
}

function outputBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    let bookmarksResults = document.querySelector("#websitesbooked");
    bookmarksResults.innerHTML = "";
    for(let i = 0; i < bookmarks.length; i++){
        let name = bookmarks[i].name;
        let url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="savedBookmarks">'+
                                      '<h3>' +name+
                                      '</h3>'+
                                      '<a class="visit" target="_blank" href="'+url+'">Visit</a>'+
                                      '<a onclick="deleteBookmark(\''+url+'\')" class="delete" href="#">Delete</a>'+
                                      '</div>';
    }
}

form.addEventListener('submit', setBookmark);
