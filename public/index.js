const submit = document.querySelector('.submit')
submit.addEventListener('click', getBowl)

function getBowl(){
    // const form = document.querySelector('#form')
    // console.log(form.title.value)
    // const title = document.querySelector('#')
    // const title = document.querySelector('.title')

        fetch('bowl', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'title': title,
                'base': base,
                'protien':protein,
                'veggies':veggies,
                'toppings': toppings
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
