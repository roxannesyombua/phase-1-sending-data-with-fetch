// Add your code here
function submitData(name, email) {
    let userData ={
        name: name,
        email: email
    }
    return fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(userData)
          
}).then(response => response.json())
.then(data => {
    
        const div = document.createElement('div');
        div.innerHTML =  `ID: ${data.id}`
        document.body.appendChild(div);

    
    console.log(data)
    return data
    
})
.catch(err => {
    const errlog = document.createElement('p');
    errlog.innerHTML = "Unauthorized Access"
    document.body.appendChild(errlog);
    return err
})

}