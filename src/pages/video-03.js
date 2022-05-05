import * as React from "react"
import { Component } from "react"

import "./video.scss"

import videoHero from '../video/video-03-transcode.mp4'
import heroPoster from '../images/video-poster-03.jpg'

class IndexPage extends Component {
  

  render() {

    return (
      <main id="video">
        <title>Photos you love, printed directly on glass – Fracture</title>
        <div className="header">
					Nav / Preheader<br />(160px desktop / 120px mobile)
        </div>
        <div className="hero">
					<div class="text-area">
						<div class="text-wrapper">
							<h1>Glass prints outshine the rest</h1>
							<p>Canvas and framed prints can't compare to the beauty and clarity of glass.</p>
							<p className="feature">
								25% off single prints until May 10<br />
								Sale ends: 05:04:20
							</p>
							<a href="/" className="btn-secondary-white">Upload a photo</a>
						</div>
					</div>
          <video width="100%" poster={heroPoster} playsInline autoPlay muted loop>
            <source src={videoHero} type="video/mp4" />
          </video>
        </div>
      </main>
    )
  }
}

export default IndexPage
