import React from 'react'
import Features from './components/Features'
import ReviewsContainer from '../reviews/ReviewsContainer'

class SpotView extends React.Component {
  render(){
    const apiKey = 'AIzaSyDo_Krv2uazBGRStApzLzVeHlyKFsfIQiM'
    const { spot } = this.props
    const features = spot.features.split(',');
    const style = {
      background: `url('../assets/img/large/${spot.name.toLowerCase().split(' ').join('').replace(/[^\w\s]/gi, '')}large.jpg') no-repeat`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '75%'
    }
    const mapQuery = `${spot.address.replace(' ', '+')},${spot.city}+${spot.province}`
    return(
      <div className="wrapper">
        <section className="spot__description page_ft" style={{width: '25%', margin: 0, marginTop: '-25px', float: 'left'}}>
          <h6>Spot Features</h6>
          <Features data={spot.features} />
        </section>
        <section className="featured__large" style={style}>
          <div className="featured__desc" style={{backgroundColor: 'rgba(0,0,0,0.4)', width: '100%', padding: '10px'}}>
            <h3 style={{paddingBottom: 5}}>{spot.name}</h3>
            <p>With {features[0]}, {features[1]} and more, {spot.name} is the perfect place for you and your friends to hangout!</p>
          </div>
        </section>
        <div className="row">
          <section className="spot__events grid-half">
            <h6>Reviews</h6>
            <ReviewsContainer spotId={spot._id}/>
          </section>
          <section className="spot__events grid-half" style={{position: 'relative'}}>
            <h6>Map</h6>
              <iframe
                width="600"
                height="450"
                frameBorder="0" style={{border: 0, zIndex: 999}}
                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${mapQuery}`}
                allowFullScreen>
              </iframe>
              <div style={{position: 'absolute', top: 'calc(50% - 10px)', left: 'calc(50% - 10px)', zIndex: '-1'}}>
                <div className="sk-wave">
                  <div className="sk-rect sk-rect1"></div>
                  <div className="sk-rect sk-rect2"></div>
                  <div className="sk-rect sk-rect3"></div>
                  <div className="sk-rect sk-rect4"></div>
                  <div className="sk-rect sk-rect5"></div>
                </div>
              </div>
          </section>
        </div>
      </div>
    )
  }
}

export default SpotView
