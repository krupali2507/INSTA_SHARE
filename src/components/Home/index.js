import {Component} from 'react'
import Slider from 'react-slick'
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
}

const companyLogosData = [
  {
    id: 'd14af630-5d22-4bfb-85dd-bb507b139b82',
    logo:
      'https://res.cloudinary.com/do4qwwms8/image/upload/v1639475819/Company%20Logos%20/netflix-img_keqbbh.png',
  },
  {
    id: '0a932287-8002-4fc8-95d1-8cbed3224e37',
    logo:
      'https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/facebook-img_fxqbxv.png',
  },
  {
    id: '8211ce0c-d7dc-4d2b-8468-5e48ad9ae985',
    logo:
      'https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/google-img_cnnaol.png',
  },
  {
    id: 'daa48153-3f16-4797-8469-5d63c9cba938',
    logo:
      'https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/zomato-img_gb1k9w.png',
  },
  {
    id: '2f4b518e-29b3-45c3-a7a5-80929f7898d9',
    logo:
      'https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/swiggy-img_jgxg6g.png',
  },
  {
    id: '895b9b4d-a283-4ee1-9fb8-933a3c4b449c',
    logo:
      'https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/amazon-img_yvggab.png',
  },
  {
    id: 'a8c67fd0-bab9-46ec-95de-cbfa2e3473f6',
    logo:
      'https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/flipkart-img_cb70ic.png',
  },
]

class Home extends Component {
  componentDidMount() {
    this.getStoriesData()
  }

  getStoriesData = async () => {
    const url = 'https://apis.ccbp.in/insta-share/stories'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)

    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <>
        <Header />
        <div className="home-bg-container">
          <Slider {...settings}>
            {companyLogosData.map(eachlogo => {
              const {id, logo} = eachlogo

              return (
                <div className="slick-item" key={id}>
                  <img className="logo-image" src={logo} alt="company logo" />
                </div>
              )
            })}
          </Slider>
        </div>
      </>
    )
  }
}

export default Home
