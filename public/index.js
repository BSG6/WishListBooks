const submit = document.querySelector('.submit')
submit.addEventListener('click', getBook)

function getBook(){
    // const form = document.querySelector('#form')
    // console.log(form.title.value)
    // const title = document.querySelector('#')
    // const title = document.querySelector('.title')

        fetch('books', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'title': title,
                'link': link
            })
            })
            .then(response => {
                if (response.ok) return response.json()
            })
            .then(data => {
                console.log(data)
                window.location.reload(true)
            })
}
