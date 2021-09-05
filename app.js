// const { functionsIn } = require("lodash")

const result = document.querySelector('#result')

const search = document.querySelector('#search')
const button = document.querySelector('#btn')

const img_url = document.querySelector('#imgUrl').attributes.src
const userName = document.querySelector('#username')
const gitName = document.querySelector('#gitName')
const joinDate = document.querySelector('#date')
const bio = document.querySelector('#bio')
const repos = document.querySelector('#repos')
const followers = document.querySelector('#followers')
const following = document.querySelector('#following')

const locat = document.querySelector('#location')
const site = document.querySelector('#site')
const twitter = document.querySelector('#twitter')
const github = document.querySelector('#github')

const monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

button.addEventListener('click' , function(){
    console.log(search.value)
    userData(search.value)
})


const userData = async (name) => {
    const config = { headers: { Accept : "application/vnd.github.v3+json"}}
    try {
        const res = await axios.get(`https://api.github.com/users/${name}` , config)
    } catch(e){
        alert('OOPS!!! Something went worng :( \nMake sure you have entered correct username')
        console.log('Error!!! ', e )
    }
    const res = await axios.get(`https://api.github.com/users/${name}` , config)
    // console.log(res.data)
    result.classList.remove('hidden')
    display(res.data)
}

const display = (data) => {
    img_url.nodeValue = data.avatar_url
    userName.innerText = data.name
    gitName.innerText = "@"+data.login
    const date = new Date(data.created_at)
    joinDate.innerText = `Joined ${date.getDay()} ${monthList[date.getMonth()]} ${date.getFullYear()}`
    bio.innerText = data.bio
    repos.innerText = data.public_repos
    followers.innerText = data.followers
    following.innerText = data.following
    locat.innerText = data.location
    site.innerHTML = `<a href=${data.blog} target="blank">${data.blog}</a>`
    twitter.innerHTML = `<a href="https://twitter.com/${data.twitter_username}" target="blank">${data.twitter_username}</a>`
    github.innerHTML = `<a href="${data.html_url}" target="blank">@${data.login}</a>`
}

search.addEventListener('change' , function(e){
    result.className += " hidden"
    img_url.nodeValue = ""
    userName.innerText = ""
    gitName.innerText = ""
    bio.innerText = ""
    repos.innerText = ""
    followers.innerText = ""
    following.innerText = ""
    locat.innerText = ""
    site.innerHTML = ""
    twitter.innerHTML = ""
    github.innerHTML = ""

    userData(search.value)
})


