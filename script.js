const form = document.querySelector("#bookform")

let popi = e => {
    let websiteName = document.querySelector('#websitename').value;
    let websiteUrl = document.querySelector('#websiteurl').value;

    let bookmark = {
        name: websiteName,
        url: websiteUrl
    }

    console.log(bookmark);
    e.preventDefault();
}

form.addEventListener('submit', popi);
