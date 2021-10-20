import imageIn from './imageInSrc.jpg';
import './App.css';
import './external.css';

function App() {
  return (
<div className="mid">
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title-red">Isaac Photographer</h1>
    <img src={imageIn} alt="imageInSrc" width={320}  height={240}/>
    <img src="/imageInPublic.jpg" alt="imageInPublic" width={320}  height={240}/>
  </div>
  <video width={320} height={340} controls>
  <source src="myVideo.mp4" type="video/mp4" />
</video>

</div>

  );
}

export default App;
