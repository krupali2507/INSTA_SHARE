import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const loginResponse = await response.json()
    if (response.ok) {
      const jwtToken = loginResponse.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      const errorMsg = loginResponse.error_msg
      this.setState({errorMsg})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg} = this.state
    return (
      <div className="bg-container">
        <div>
          <img
            src="https://res.cloudinary.com/dop7nqhwv/image/upload/v1652021531/Layer_2landing_kcauuc.png"
            alt="website login"
          />
        </div>
        <form className="Rectangle8" onSubmit={this.onSubmitForm}>
          <div className="logo-container">
            <img
              src="https://res.cloudinary.com/dop7nqhwv/image/upload/v1652021530/Standard_Collection_8logo_hjcgtb.png"
              alt="website logo"
              className="website-logo"
            />
            <h1 className="logo-text">Insta Share</h1>
          </div>
          <div className="input-container">
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              id="username"
              className="input-login"
              onChange={this.onChangeUsername}
              value={username}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              className="input-login"
              onChange={this.onChangePassword}
              value={password}
            />
            <p>{errorMsg}</p>
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}
export default Login
