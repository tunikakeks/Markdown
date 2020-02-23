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

        data = data.replace(/\\\|\|(.*?)\|\|/g, "<p>||$1||</p>")
        data = data.replace(/\\\*\*(.*?)\*\*/g, "<p>**$1**</p>")
        data = data.replace(/\\\*\*\*(.*?)\*\*\*/g, "<p>***$1***</p>")
        data = data.replace(/\\\*(.*?)\*/g, "<p>*$1*</p>")
        data = data.replace(/\\_(.*?)_/g, "<p>_$1_</p>")
        data = data.replace(/\\__(.*?)__/g, "<p>__$1__</p>")
        data = data.replace(/\\~~(.*?)~~/g, "<p>~~$1~~</p>")
        data = data.replace(/\\``(.*?)``/g, "<p>``$1``</p>")
        data = data.replace(/\\(.*?)```\n([^´]+)\n```/gm, '<p>```$2```</p>')

        data = data.replace(/\|\|(.*?)\|\|/g, "<span class='spoiler hidden'>$1</span>") // spoiler
        data = data.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") //Bold
        data = data.replace(/\*\*\*(.*?)\*\*\*/g, "<b><i>$1</i></b>") //bold italic
        data = data.replace(/\*(.*?)\*/g, "<i>$1</i>") //italic
        data = data.replace(/_(.*?)_/g, "<i>$1</i>") //italic
        data = data.replace(/__(.*?)__/g, "<u>$1</u>") // underlined
        data = data.replace(/~~(.*?)~~/g, "<strike>$1</strike>") // striked
        data = data.replace(/``(.*?)``/g, '<span class="oneLineBlock">$1</span>') // block
        data = data.replace(/(.*?)```\n([^´]+)\n```/gm, '<span class="multiLineBlock">$2</span>') // multi line block
        data = data.replace(/> (.*[^< >])/g, '<span class="blockquote">$1</span>') // Blockquote

        data = data.replace(/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/g, '<span class="uri"><a href="$1" target="_blank">$1</a></span>') // url

        ca[i].innerHTML = data
    }
}

//Trigger markDown() function on an Event (here on the Window Load Event)
window.addEventListener("load", markDown)