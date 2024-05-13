let form = document.getElementById("login-form")
let projecstUrl = 'http://127.0.0.1:8000/api/users/token/'

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let formData = {
        'username': form.username.value,
        'password': form.password.value
    }

    fetch(projecstUrl, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if(data.access){
            localStorage.setItem("token", data.access)
            window.location = 'http://127.0.0.1:5500/project-list.html'
        } else{
            alert('Username or password did not work')
        }
    })
})