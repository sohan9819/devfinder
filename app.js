
const userData = async () => {
    const config = { headers: { Accept : "application/vnd.github.v3+json"}}
    const res = await axios.get('https://api.github.com/users/sohan9819' , config)
    console.log(res.data);
}


userData();
