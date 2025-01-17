function getData(){
     let data= fetch('https://jsonplaceholder.typicode.com/todos/1')
     data.then(response=>{
        return response.json()
     })
     .then(todos=>{
        console.log(todos);
     })
     .catch(error=>{
        console.log(error.message)
     })

    }
getData()