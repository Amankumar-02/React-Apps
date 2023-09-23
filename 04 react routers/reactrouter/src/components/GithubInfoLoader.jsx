export const GithubInfoLoader = async ()=>{
    const response = await fetch('http://api.github.com/users/hiteshchoudhary')
    return response.json()
}