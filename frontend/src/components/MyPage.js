import React from 'react'

class MyPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        {this.props.users.length === 0 ? "Loading" :
          <div>
            <h1>{this.props.users[0].full_name}</h1> - Eastern Zodiac Sign:
             <p>
              {this.props.users[0].eastern.sign} - 
              {this.props.users[0].eastern.description}
             </p>
          </div>
        }
      </div>
    )
  }
}

export default MyPage
