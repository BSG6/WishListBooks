const thumbUp = document.getElementsByClassName("fa-thumbs-up");
const trash = document.getElementsByClassName("fa-trash-o");
const thumbDown = document.getElementsByClassName("fa-thumbs-down");


Array.from(thumbUp).forEach(function(element) {
    element.addEventListener('click', function(){
        console.log('hi')
        const title = this.parentNode.parentNode.childNodes[1].innerText
        // const msg = this.parentNode.parentNode.childNodes[3].innerText
        //changed thumbUp index from [5] to [3] because there is no msg with [3] it is not being used
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[3].innerText)
        fetch('recipes', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            'title': title,
            'thumbUp':thumbUp
            })
        })
        .then(response => {
            if (response.ok) return response.json()
        })
        .then(data => {
            console.log(data)
            window.location.reload(true)
        })
    });
});
Array.from(thumbDown).forEach(function(element) {

        element.addEventListener('click', function(){
            console.log('hi?')
        const title = this.parentNode.parentNode.childNodes[1].innerText
        // const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp= parseFloat(this.parentNode.parentNode.childNodes[3].innerText)
        fetch('recipesDown', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            'title': title,
            'thumbUp':thumbUp
            })
        })
        .then(response => {
            if (response.ok) return response.json()
        })
        .then(data => {
            console.log(data)
            window.location.reload(true)
        })
    });
});

Array.from(trash).forEach(function(element) {
    element.addEventListener('click', function(){
            const title = this.parentNode.parentNode.childNodes[1].innerText
            // const msg = this.parentNode.parentNode.childNodes[3].innerText
            fetch('recipes', {
                method: 'delete',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                'title': title
                })
            }).then(function (response) {
                window.location.reload()
            })
        });
}); 