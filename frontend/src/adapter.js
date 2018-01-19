class Adapter
{
  static getUsers()
  {
    return fetch('http://localhost:3003/users').then(resp => resp.json())

  }
  static postUser(name, birthdate)
  {
    return fetch('http://localhost:3003/users',{
      method: 'post',
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({name: name, birthdate: birthdate})
    })
  }

}
export default Adapter;
