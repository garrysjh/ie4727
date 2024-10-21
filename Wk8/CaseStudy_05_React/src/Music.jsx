import './styles/reset.css'
import './styles/music.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import flower from './assets/flower.jpg'

function Music() {
  return (
    <div>
    <Navbar/>
    <div className="main-body">
        <div className="main-title">
            <h2>Music at JavaJam</h2>
            <p> The first Friday night each month at JavaJam is a special night. Join us from 8pm to 11pm for some music
                you would not want to miss.</p>
        </div>
        <div className="music">
            <div className="music-item">
                <div className="music-item-title">
                    JANUARY
                </div>
                <div className="music-item-body">
                    <img src={flower}/>
                    <div className="music-item-content">
                        <p>
                            Melanie morris entertains with her melodic folk style. <br/>
                            <strong>CDs are available now!</strong>
                        </p>
                        <audio controls>
                            <source src="assets/audio.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
                </div>
            </div>
            <div className="music-item">
                <div className="music-item-title">
                    FEBRUARY
                </div>
                <div className="music-item-body">
                    <img src={flower}/>
                    <div className="music-item-content">
                        <p>
                            Tahoe Greg is back from his tour. <br/>
                            New songs. New stories. <br/>
                            <strong>CDs are available now!</strong>
                        </p>
                        <audio controls>
                            <source src="assets/audio.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <Footer/>
      </div>
  )
}

export default Music
