const heart = document.getElementsByClassName("fa-heart");
const trash = document.getElementsByClassName("fa-trash-o");
const thumbDown = document.getElementsByClassName("fa-thumbs-down");


Array.from(heart).forEach(function(element) {
    element.addEventListener('click', function(){
        console.log('hi')
        const title = this.parentNode.parentNode.childNodes[1].innerText
        const link = this.parentNode.parentNode.childNodes[3].innerText
        const heart = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('savedBooks', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            'title': title,
            'link' : link,
            'heart':heart
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
        const link = this.parentNode.parentNode.childNodes[3].innerText
        const heart= parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('savedBooksDown', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            'title': title,
            'link' : link,
            'heart':heart
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
            const link = this.parentNode.parentNode.childNodes[3].innerText
            fetch('savedBooks', {
                method: 'delete',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                'title': title,
                'link' : link
                })
            }).then(function (response) {
                window.location.reload()
            })
        });
}); 