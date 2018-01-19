class Adapter
{
  static getUsers()
  {
    return fetch('http://localhost:3001/users').then(resp => resp.json())

  }
  static postUser(name, birthdate)
  {
    return fetch('http://localhost:3001/users',{
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({full_name: name, birthdate: birthdate})
    })
    .then(res => res.json())
  }

}
export default Adapter;
