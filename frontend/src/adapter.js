
function getUsers()
{
  fetch('http://localhost:3003/user').then(resp => resp.json())
}
export default getUsers;
