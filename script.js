const form = document.querySelector("#bookform");
const nameAlert = document.querySelector(".name");
const urlAlert = document.querySelector(".url");
const closeButton = document.querySelectorAll(".closebutton")
const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
const regex = new RegExp(expression);

let setBookmark = e => {
    let websiteName = document.querySelector('#websitename').value;
    let websiteUrl = document.querySelector('#websiteurl').value;

    if(!websiteName) {
        nameAlert.classList.toggle("active");
        return false
    } else if(!websiteUrl) {
        urlAlert.classList.toggle("active");
        return false
    }

    if(!websiteUrl.match(regex)){
        urlAlert.classList.toggle("active");
        return false
    }

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

const closeAlert = () => {
    closeButton.forEach(item => item.addEventListener('click', e => e.currentTarget.closest(".notvalid").classList.toggle("active")));
}

closeAlert();

const deleteBookmark = url => {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for (let i = 0; i < bookmarks.length; i++) {
        if(bookmarks[i].url == url) {
            bookmarks.splice(i, 1)
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    outputBookmarks()
}
const outputBookmarks = () => {
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
