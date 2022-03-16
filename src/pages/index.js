import * as React from "react"
import { Component } from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./index.scss"

import videoHero from '../video/hero-compress.mp4'
import videoDurability from '../video/durability-compress.mp4'
import videoProduction from '../video/production-compress.mp4'
import videoSpin from '../video/spin-compress.mp4'

class IndexPage extends Component {
  constructor() {
    super()
    this.state = {
      scrollPos: 0,
      ctaIsVisible: false
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    this.setState({ scrollPos: window.pageYOffset })
    if (this.state['scrollPos'] > 600) {
      this.setState({ ctaIsVisible: true })
    } else {
      this.setState({ ctaIsVisible: false })
    }
  }

  render() {
    const { ctaIsVisible } = this.state;

    return (
      <main>
        <title>Photos you love, printed directly on glass – Fracture</title>
        <div className="preheader">
          <div className="inner-container">
            Save 10% with code <strong>MOMENTS10</strong> at checkout
          </div>
        </div>
        <div className="nav">
          <StaticImage src="../images/nav.jpg" alt="navigation" />
        </div>
        <div className="hero">
          <video poster="" width="100%" height="100%" playsinline autoPlay muted loop>
            <source src={videoHero} type="video/mp4" />
          </video>
        </div>
        <div className="intro">
          <div className="inner-container">
            <h1>The photos you love printed in vivid color, directly on glass.</h1>
            <p>Fracture offers a wide range of sizes ready to display on a stand or hang on the wall &#8212; the only thing you&rsquo;ll need is a screwdriver.</p>
            <div className="center-content">
              <a href="#" className="btn-primary">Create your print&nbsp;&nbsp;&#8594;</a>
              <p className="tag">Starting at $25</p>
            </div>
          </div>
        </div>
        <div className="banded">
          <div className="banded-img">
            <StaticImage src="../images/banded.jpg" alt="glass print" />
          </div>
          <div className="banded-content">
            <div className="inner-container">
              <h2>It's a frame, mount, and photo &#8212; all in one.</h2>
              <p>The ink on each Fracture print is UV cured and sealed between the glass and backing, keeping your prints vibrant for years to come.</p>
            </div>
          </div>
        </div>
        <div className="durability">
          <div className="durability-vid">
            <video poster="" width="100%" height="100%" playsinline autoPlay muted loop>
              <source src={videoDurability} type="video/mp4" />
            </video>
          </div>
          <div className="durability-content">
            <div className="inner-container">
              <h2>You&rsquo;ll be surprised at how durable these are.</h2>
              <p>We back up our glass prints with a Lifetime Warranty and Happiness Guarantee. If your Fracture purchase doesn&rsquo;t meet your expectations, we&rsquo;ll replace or refund it. </p>
            </div>
          </div>
        </div>
        <div className="proof">
          <div className="inner-container">
            <div className="proof-hg">
              <StaticImage src="../images/hg.jpg" alt="happiness guarantee" />
            </div>
            <div className="proof-hg--content">
              <h3>Over one million orders &#8212; happiness guaranteed.</h3>
            </div>
            <div className="proof--featured-in">
              <h3>AS FEATURED IN</h3>
              <div className="proof-featured-in--img">
                <StaticImage src="../images/featured.jpg" alt="featured in" />
              </div>
            </div>
            <div className="proof--reviews">
              <div className="proof--reviews--img">
                <StaticImage src="../images/stars.jpg" alt="4.6 stars" />
              </div>
              <div className="proof--reviews--content">
                4.6 STARS, OVER 10,000 CUSTOMER REVIEWS
              </div>
            </div>
          </div>
        </div>
        <div className="manufactured">
          <div className="inner-container">
            <div className="manufactured-img">
              <StaticImage src="../images/screw.jpg" alt="screw" />
            </div>
            <div className="manufactured-content">
              <h2>Manufactured and assembled in the USA.</h2>
              <p>All Fracture prints are produced in Alachua, Florida with and arrive ready for you to display.</p>
            </div>
            <div className="manufactured-vid">
              <video poster="" width="100%" height="100%" playsinline autoPlay muted loop>
                <source src={videoProduction} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-img">
            <StaticImage src="../images/holding.jpg" alt="hand holding print" />
          </div>
          <div className="inner-container">
            <h2>Here's what people say once they&rsquo;ve held their Fracture print:</h2>
          </div>
          <div className="testimonial-item item-01">
            <div className="inner-container">
              <p>
              &ldquo;Excellent quality and exceptional turn around time! Uploaded a photo of my son-in-law fighting a fire, and loved it so much I kept it for myself! Then I ordered him a larger one &#8212; it made his day!&rdquo; <strong>(Misty O. &#8212; West Virginia)</strong>
              </p>
            </div>
            <div className="testimonial-item--img">
              <StaticImage src="../images/testimonial-01.jpg" alt="man holding glass print" />
            </div>
          </div>
          <div className="testimonial-item item-02">
            <div className="inner-container">
              <p>
              &ldquo;We just opened the shipping box and are in awe! You packaged them fabulously, shipped them super fast, and wow! Honestly have never seen photos printed so beautifully. Two thumbs up!&rdquo; <strong>(Sean R. &#8212; Illinois)</strong>
              </p>
            </div>
            <div className="testimonial-item--img">
              <StaticImage src="../images/testimonial-02.jpg" alt="glass prints on table" />
            </div>
          </div>
        </div>
        <div className="spin">
          <div className="inner-container">
            <video poster="" width="100%" height="100%" playsinline autoPlay muted loop>
              <source src={videoSpin} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="cta">
          <div className="inner-container">
            <h2>Let's get this into your hands.</h2>
            <a href="#" className="btn-secondary-white">I have something to print&nbsp;&nbsp;&#8594;</a>
            <a href="#" className="btn-secondary-white">I&rsquo;m looking for inspiration&nbsp;&nbsp;&#8594;</a>
          </div>
        </div>
        <div className="footer">
          <StaticImage src="../images/footer.jpg" alt="footer" />
        </div>
        <div className={`fixed-cta ${ctaIsVisible ? "visible" : ""}`}>
          <div className="center-content">
              <a href="#" className="btn-secondary-white">Create your print&nbsp;&nbsp;&#8594;</a>
              <p className="tag">Starting at $25</p>
            </div>
        </div>
      </main>
    )
  }
}

export default IndexPage
