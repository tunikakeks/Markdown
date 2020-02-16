const spoilerTags = document.querySelectorAll('span.spoiler')
// For each Spoiler Tag in the HTML Doc
spoilerTags.forEach(function (spoiler) {
    spoiler.addEventListener('click', function (e) {
        if (this.classList.contains('hidden')) {
            this.classList.remove('hidden')
        }
    })
})

//Markdown System
function markDown() {
    var ca = document.getElementsByTagName("body");
    for (var i = 0; i < ca.length; i++) {
        var data = ca[i].innerHTML
        // data = data.replace(/[_]{1}(.*?)[_]{1}/g, "<span class='italic'>$1</span>")
        data = data.replace(/\|\|(.*?)\|\|/i, "<span class='spoiler hidden'>$1</span>") // spoiler

        data = data.replace(/\*\*(.*?)\*\*/i, "<b>$1</b>") //Bold

        data = data.replace(/\*\*\*(.*?)\*\*\*/i, "<b><i>$1</i></b>") //bold italic

        data = data.replace(/\*(.*?)\*/i, "<i>$1</i>") //italic
        data = data.replace(/_(.*?)_/i, "<i>$1</i>") //italic

        data = data.replace(/__(.*?)__/i, "<u>$1</u>") // underlined

        data = data.replace(/~~(.*?)~~/i, "<strike>$1</strike>") // striked

        data = data.replace(/´(.*?)´/i, '<span class="oneLineBlock">$1</span>') // block
        data = data.replace(/(.*?)´´´\n([^´]+)\n´´´/gm, '<span class="multiLineBlock">$2</span>') // multi line block

        data = data.replace(/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/g, '<span class="uri"><a href="$1" target="_blank">$1</a></span>') // url

        ca[i].innerHTML = data
    }
}

//Trigger markDown() function on an Event (here on the Window Load Event)
window.addEventListener("load", markDown)