function createcard(title, cName, views, monthold, duration, thumbnail) {
    let viewNumber
    if (views < 1000) {
        viewNumber = views
    }
    else if (views >= 1000000) {
        viewNumber = views / 1000000 + "M"
    }
    else{
        viewNumber = views / 1000 + "K"
    }

    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration} </div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewNumber} views . ${monthold} months ago</p>
            </div>
        </div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createcard("Events, Event Bubbling, setInterval & setTimeout | Sigma Web Development Course - Tutorial #74","Nikhilcoding",100000,7,"32:11","image.avif")