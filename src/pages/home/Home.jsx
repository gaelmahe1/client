import './home.scss';
import Nav from '../../components/nav/Nav'



const Home = () => {
  return (
    <div>
        <Nav />
        <div className="homeContainer">
          <div className="item">
          <img src="https://images.pexels.com/photos/9965702/pexels-photo-9965702.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Bande démo"  className="headerImg"/>
          <p>Création de bandes démos<br/>sur-mesure</p>
          <button>En savoir plus</button>
          </div>
        </div>
    </div>
  )
}

export default Home