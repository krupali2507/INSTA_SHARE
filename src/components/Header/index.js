import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Header extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <nav className="navbar-container">
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/dop7nqhwv/image/upload/v1652021530/Standard_Collection_8logo_hjcgtb.png"
            alt="website logo"
          />
          <span>Insta Share</span>
        </div>
        <ul className="navbar-link-container">
          <li className="nav-link">Home</li>
          <li className="nav-link">Profile</li>
          <button
            type="button"
            className="logout-btn"
            onClick={this.onClickLogout}
          >
            Logout
          </button>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Header)
