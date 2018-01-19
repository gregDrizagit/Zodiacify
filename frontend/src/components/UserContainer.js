import React from 'react'
// import getUsers from './adapter';

class UserContainer extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      fullName: "",
      birthdate: null
    }

  }
  componentDidMount()
  {
    this.setState({fullName: this.props.name, birthdate: this.props.date})

  }

  calculateWesternSign = () =>
  {
    let zodiac =
    {
      aries: [new Date("1900-3-21"), new Date('1900-4-20')],
      taurus: [new Date("1900-4-21"), new Date("1900-5-20")],
      gemini: [new Date("1900-5-21"), new Date("1900-6-20")],
      cancer: [new Date("1900-6-21"), new Date("1900-7-21")],
      leo: [new Date("1900-7-22"), new Date("1900-8-22")],
      virgo: [new Date("1900-8-23"), new Date("1900-9-21")],
      libra: [new Date("1900-9-22"), new Date("1900-10-21")],
      scorpio: [new Date("1900-10-22"), new Date("1900-11-21")],
      sagittarius: [new Date("1900-11-22"), new Date("1900-12-21")],
      capricorn: [new Date("1900-12-22"), new Date("1900-1-20")],
      aquarius: [new Date("1900-1-21"), new Date("1900-2-19")],
      pisces: [new Date("1900-2-20"), new Date("1900-3-20")]
    }
  }
  render()
  {
    console.log(this.state)
    return(
      <div>
        {<h1>Welcome {this.props.name} - {this.props.date.toString()}</h1>}
      </div>
    )
  }
}
export default UserContainer
