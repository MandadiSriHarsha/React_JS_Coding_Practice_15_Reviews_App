import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewNumber: 0}

  showPreviousUser = () => {
    let {reviewNumber} = this.state
    reviewNumber -= 1
    if (reviewNumber < 0) {
      this.setState({reviewNumber: 0})
    } else {
      this.setState({reviewNumber})
    }
  }

  showNextUser = () => {
    const {reviewsList} = this.props
    const {reviewNumber} = this.state
    if (reviewNumber + 1 < reviewsList.length) {
      this.setState({reviewNumber: reviewNumber + 1})
    } else {
      this.setState({reviewNumber: reviewsList.length - 1})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {reviewNumber} = this.state
    const review = reviewsList[reviewNumber]
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="reviews-carousel-bg-container">
        <h1 className="reviews-carousel-heading">Reviews</h1>
        <img src={imgUrl} className="reviews-carousel-image" alt={username} />
        <div className="reviews-carousel-name-button-card">
          <button
            type="button"
            className="left-arrow"
            onClick={this.showPreviousUser}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="left-arrow-image"
              alt="left arrow"
            />
          </button>
          <p className="username">{username}</p>
          <button
            type="button"
            className="right-arrow"
            onClick={this.showNextUser}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="right-arrow-image"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
