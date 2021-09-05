// const { functionsIn } = require("lodash")

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

button.addEventListener('click' , function(){
    console.log(search.value)
    userData(search.value)
})


const userData = async (name) => {
    const config = { headers: { Accept : "application/vnd.github.v3+json"}}
    const res = await axios.get(`https://api.github.com/users/${name}` , config)
    console.log(res.data)
    display(res.data)
}

const display = (data) => {
    img_url.nodeValue = data.avatar_url
    userName.innerText = data.name
    gitName.innerText = "@"+data.login
    bio.innerText = data.bio
    repos.innerText = data.public_repos
    followers.innerText = data.followers
    following.innerText = data.following
    locat.innerText = data.location
    site.innerHTML = `<a href=${data.blog} target="blank">${data.blog}</a>`
    twitter.innerHTML = `<a href="https://twitter.com/${data.twitter_username}" target="blank">${data.twitter_username}</a>`
    github.innerHTML = `<a href="${data.html_url}" target="blank">@${data.login}</a>`
}



// userData()

// date = new Date('2013-03-10T02:00:00Z');
// console.log(date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate());

// const d = new Date("2020-05-07T19:29:40Z");
// console.log(d)
// console.log(d.getDate())
// console.log(d.getMonth())
// console.log(d.getFullYear())

