class Adapter
{
  static getUsers()
  {
    return fetch('http://localhost:3001/users').then(resp => resp.json())

  }

  static getEasternPartners(easternId)
  {
    return fetch(`http://localhost:3001/easterns/${easternId}`).then(resp => resp.json())
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

  static patchSignsToUser(user, easternId, westernId)
  {
    return fetch(`http://localhost:3001/users/${user.id}`,{
      method: 'PATCH',
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({eastern: easternId, western: westernId})
    })
    .then(res => res.json())
  }

}
export default Adapter;
