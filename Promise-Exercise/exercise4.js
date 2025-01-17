function getData(links){
let data=links.map(link=>{
    return fetch(link).then(response=>{
        return response.json()
    })
})
return Promise.all(data)
.then(obj=> console.log(obj))
.catch(error=>console.log(error.message))
}
const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    'https://jsonplaceholder.typicode.com/todos/3'
]
getData(urls)
// .then(output=>{
//     console.log('fetched data', output)
// })
// .catch(error=>{
//     console.log(error.message)
// })