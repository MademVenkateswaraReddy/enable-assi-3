const buttonInput = document.getElementById('myButton').addEventListener('click', fetchData);

function fetchData(){
    document.getElementById('result').textContent = '';

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        if(!response.ok){
            throw new Error('HTTP error - ' + response.status)
        }
        return response.json()
    })
    .then(data =>{
        document.getElementById('result').textContent = JSON.stringify(data, null);
    })
    .catch(error =>{
        document.getElementById('result').textContent = `Error: ${error.message}`
    })
}