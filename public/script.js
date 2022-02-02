const getPosts = document.getElementById('get-posts')
const results = document.getElementById('results')
const URL = 'http://localhost:3000'

getPosts.addEventListener('click', () => {
    fetch(`${URL}/api/posts`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((err) => console.warn(err))
})