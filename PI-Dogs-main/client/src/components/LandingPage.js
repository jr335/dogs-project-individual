//import {react} from 'React';
import {Link} from 'react-router-dom';
//import {connect} from 'react-redux';

export default function LandingPage() {
 return(
 <div>
    <h1>Bienvenidos</h1>
  <Link to='/home'>
    <button>Inicio</button>
  </Link>
</div>)

};



