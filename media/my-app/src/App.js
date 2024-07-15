import logo from './logo.svg';
import './App.css';
import kalki from "./videos/kalkitrailer.mp4"
import img from "./images/schedule.jpg"
import audio from "./audios/priyatama.mp3"

function App() {
  return (
    <div className="App">
    <img src="https://www.zapcricket.com/cdn/shop/articles/WhatsApp_Image_2024-04-27_at_16.23.54.webp?v=1714218423"></img>
    <img src="./images/abc.avif"></img>
    <img src={img}></img>
    <br></br>
    <hr></hr>
<audio src="https://services.brninfotech.com/tws/media2/songs/Ala Vaikuntapuram lo/01 - Samajavaragamana.mp3" controls></audio>   
<audio src="./audios/life of ram.mp3"controls muted autoplay></audio>
<audio src={audio} controls></audio>
<br></br>
<hr></hr>

<video className="videos" src="https://services.brninfotech.com/tws/media2/trailers/AlaVaikuntapuramloo.mp4" controls></video>
<video className="videos" src="./videos/bahubalitrailer.mp4"controls></video>
<video className="videos" src={kalki} controls></video>    
    </div>
  );
}

export default App;
