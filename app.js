document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJSON)
document.getElementById('button3').addEventListener('click', getAPIdata)

// Get local text file data
function getText(){
    fetch('data.txt')
    .then(res => res.text())
    .then(data => {
        console.log(data)
        document.getElementById('output').innerHTML = data
    })
    .catch(err => console.log(err))
}

// Get local JSON data
function getJSON(){
    fetch('posts.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let output = ''
        data.forEach(function(post) {
            output += `<li>${post.title}</li>`
        });
        document.getElementById('output').innerHTML = output
    })
    .catch(err => console.log(err))
}

// Get extenral API data
function getAPIdata(){
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let output = ''
        data.forEach(function(user) {
            output += `<li>${user.login}</li>`
        });
        document.getElementById('output').innerHTML = output
    })
    .catch(err => console.log(err))
}