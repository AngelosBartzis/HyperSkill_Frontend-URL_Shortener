/*Start of stage 2.

let input = document.getElementById('input-url');
let urlList = document.getElementById('list-url');
let errorMessage = document.getElementById('error-message');
//let anchors = document.getElementsByClassName('anchors');
//let spanText = document.getElementById('span-id');
//let count = 0;

function inputAction() {
    let url = input.value;
    if (/^(http(s)?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-.\/?%:#&=]*)?$/.test(url) === true) {
        const createList = document.createElement('li');
        createList.innerHTML = getRandomShorturl();
        urlList.appendChild(createList);
    } else {
        errorMessage.textContent = "Please enter a valid url";
    }
}

function getRandomShorturl() {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return `<a target='_blank' href='${input.value}' >localhost/${text}</a> - ${input.value}<span> - Clicks: 0</span>`;
}

document.getElementById("list-url").addEventListener("click", function(e) {
    let counterElement = e.target.nextElementSibling;
    let countNumber = counterElement.innerText.at(11);
    let counter = parseInt(countNumber);
    counter++;
    counterElement.innerText = ' - Clicks: ' + counter;
})

End of stage2.*/


/*

//Other solution #1
.....
function appendList(shortURL, url) {
    // Add to list
    const item = document.createElement("li")
    item.innerHTML = `<a href="${url}" onclick="addClick()">${shortURL}</a><span> - ${url} - <span id="clicks">Clicks: ${clickCount}</span></span>`
    document.querySelector("#list-url").appendChild(item);
}

function addClick() {
    clickCount += 1;
    let clickItem = document.querySelector('#clicks').innerHTML = `Clicks: ${clickCount}`
}

let clickCount = 0;


//Other solution #2
<script>
    let createBtn = document.getElementById("button-create");
    let url = document.getElementById("input-url");
    let list = document.getElementById("list-url");
    let error = document.getElementById("error-message");

    createBtn.addEventListener("click", function () {
        if(/^(http|https:\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(url.value)) {
            let random = Math.random().toString(36).substring(2,7);
            let newItem = document.createElement("li");
            newItem.innerHTML = `<a onclick="countClicks(this);" href="${url.value}">localhost/${random}</a> - ${url.value} - <span class="count">Clicks: <em>0</em</span>`;
            list.appendChild(newItem);
        } else {
            error.innerHTML = "Please enter a valid url";
        }
    });

    function countClicks(link) {
        let countSpan = link.parentElement.querySelector('.count em');
        let currentCount = parseInt(countSpan.textContent);
        countSpan.textContent = currentCount + 1;
    }

</script>
 */


/*Start of stage 3.

let input = document.getElementById('input-url');
let urlList = document.getElementById('list-url');
let errorMessage = document.getElementById('error-message');

function inputAction() {
    let url = input.value;
    if (/^(http(s)?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-.\/?%:#&=]*)?$/.test(url) === true) {
        const createList = document.createElement('li');
        getRandomShorturl(createList);
        urlList.appendChild(createList);
    } else {
        errorMessage.textContent = "Please enter a valid url";
    }
}

function getRandomShorturl(parent) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    const anchor = document.createElement('a');
    anchor.href = input.value;
    anchor.target = '_blank';
    anchor.innerText = `localhost/${text}`;
    const textNode = document.createTextNode(` - ${input.value}`);
    const span = document.createElement('span');
    span.innerText = ` - Clicks: 0`;
    parent.appendChild(anchor);
    parent.appendChild(textNode);
    parent.appendChild(span);
    //return `<a target='_blank' href='${input.value}'>localhost/${text}</a> - ${input.value}<span> - Clicks: 0</span>`;
}

document.getElementById('list-url').addEventListener('click', (e) => {
    let counterElement = e.target.nextElementSibling;
    let countNumber = counterElement.innerText.at(11);
    let counter = parseInt(countNumber);
    counter++;
    counterElement.innerText = ' - Clicks: ' + counter;
});

function deleteInputurl() {
    if (input.value === '') {
        urlList.innerHTML = '';
    }
    Object.values(urlList.children).forEach(el => {
        const text = el.innerText;
        const [short, long] = text.split('-').map(t => t.trim());
        if (short === input.value || long === input.value) {
            urlList.removeChild(el);
        }
    });
}

End of stage 3. */

/*Another way:
function removeURL(url) {
    let focus = document.querySelector("#input-url").value
    let list = document.querySelector("#list-url")
    let items = list.querySelectorAll(".item")

    if (focus === "") {
        list.innerHTML = "";
    } else {

        for (let i = 0; i < items.length; i++) {
            if (items[i].href === focus) {
                items[i].parentNode.remove()
            }
        }
    }
}
 */

let input = document.getElementById('input-url');
let urlList = document.getElementById('list-url');
let errorMessage = document.getElementById('error-message');

function inputAction() {
    let url = input.value;
    if (/^(http(s)?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-.\/?%:#&=]*)?$/.test(url) === true) {
        const createList = document.createElement('li');
        getRandomShorturl(createList);
        urlList.appendChild(createList);
    } else {
        errorMessage.textContent = "Please enter a valid url";
    }
}

function getRandomShorturl(parent) {
    let shortUrl = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++)
        shortUrl += possible.charAt(Math.floor(Math.random() * possible.length));
    const anchor = document.createElement('a');
    anchor.href = input.value;
    anchor.target = '_blank';
    anchor.innerText = `localhost/${shortUrl}`;
    const textNode = document.createTextNode(` - ${input.value}`);
    const span = document.createElement('span');
    span.innerText = ` - Clicks: 0`;
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', function() {
        toggleEditMode(editButton, shortUrl, anchor);
    });
    parent.appendChild(anchor);
    parent.appendChild(textNode);
    parent.appendChild(span);
    parent.appendChild(editButton);
}

// Toggle between edit mode and save mode
function toggleEditMode(editButton, shortUrl, anchor) {
    const listItem = editButton.parentElement;
    if (editButton.innerText === 'Edit') {
        // Switch to Edit Mode
        const input = document.createElement('input');
        input.value = shortUrl;
        listItem.replaceChild(input, anchor); // Replace link with input

        editButton.innerText = 'Save'; // Change button text to Save
    } else if (editButton.innerText === 'Save') {
        // Switch to Save Mode
        const input = listItem.querySelector('input');
        const newShortUrl = input.value.trim();

        if (newShortUrl.length >= 5) {
            anchor.innerText = `localhost/${newShortUrl}`;   // Update the text with new short URL
            listItem.replaceChild(anchor, input); // Replace input with link
        }
        editButton.innerText = 'Edit'; // Change button text back to Edit
    }
}

document.getElementById('list-url').addEventListener('click', (e) => {
    let counterElement = e.target.nextElementSibling;
    let countNumber = counterElement.innerText.at(11);
    let counter = parseInt(countNumber);
    counter++;
    counterElement.innerText = ' - Clicks: ' + counter;
});

function deleteInputurl() {
    if (input.value === '') {
        urlList.innerHTML = '';
    }
    Object.values(urlList.children).forEach(el => {
        const text = el.innerText;
        const [short, long] = text.split('-').map(t => t.trim());
        if (short === input.value || long === input.value) {
            urlList.removeChild(el);
        }
    });
}