const token = localStorage.getItem('token')
const url = 'https://zodiacify.herokuapp.com'

class Adapter
{

  static getUsers()
  {
    return fetch(`${url}/users`).then(resp => resp.json())
  }

  static getAllEastSigns() {
    return fetch(`${url}/easterns`)
    .then(res => res.json())
  }

  static getAllWestSigns() {
    return fetch(`${url}/westerns`)
    .then(res => res.json())
  }

  static getEasternPartners(easternId)
  {
    return fetch(`${url}/easterns/${easternId}`).then(resp => resp.json())
  }
  static postUser(name, birthdate)
  {
    return fetch(`${url}/users`,{
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
    return fetch(`${url}/users/${user.id}`,{
      method: 'PATCH',
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({eastern: easternId, western: westernId})
    })
    .then(res => res.json())
  }

  static postToAuth(full_name, password) {
    return fetch(`${url}/auth/`, {
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({full_name, password})
    }).then(res => res.json())
  }

  static getCurrentUserAuth() {
    return fetch(`${url}/current_user/`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorization': token
      }
    })
    .then(res => res.json())
  }

}
export default Adapter;
