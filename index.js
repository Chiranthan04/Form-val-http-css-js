const namesw = document.getElementById('name')
const password = document.getElementById("password")
const form = document.getElementById('form')
const error = document.getElementById('Error')

form.addEventListener('submit' ,(e) => {
    let messages = []
    if (namesw.value === '' || namesws.value == null ){
        messages.push('Name is Requred')
    }

    if (password.value.length <= 6){
       messages.push('Password must be 6 char long')
    }
    
    if (messages.length > 0){
        error.innerText = messages.join(', ')
    }

    e.preventDefault()

}
)