
function getUsers()
{
  fetch('http://localhost:3003/user').then(resp => resp.json())

}
function postUser(user)
{
  return fetch('http://localhost:3003/user',{
    method: 'post',
    header:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({fullName: user})
  })
}
export default getUsers;
