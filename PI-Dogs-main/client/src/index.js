import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
const axios = require('axios')

class DogsBreed extends React.Component {
  constructor(){
    super();
    this.state = {
      imgURL: "",
      breed: [""],
      select: ""
    }
  }

  getDogPicture = () => {
   
    const { select } = this.state;
    let url = 'https://api.thedogapi.com/v1/breeds?api_key=3bc7d5d3-2fb4-46d0-9ebe-a7a1117fbc08' + select + "/images/random";
    axios
      .get(url)
      .then(response => {
        this.setState({
          imgURL: response.data.message
        })
        console.log(response.data.message)
      })
      .catch(e => {
        console.log("error fetching image")
      })
  }

  getBreed = () => {
    const {breed} = this.state
    axios
      .get("'/dogs")
      .then(response => {
        this.setState({
          breed: breed.concat(response.data.message)
        })
      })
      .catch(e => {
        console.log("error fetching list")
      })
  }

   getRandomPicture = () => {
     const { breed } = this.state
     const randomDog = Math.floor(Math.random()*breed.length)
     const choice = (randomDog === 0 ? "wolfhound" : breed[randomDog])
     let url = "'https://api.thedogapi.com/v1/breeds"
     axios
       .get(url)
       .then(response => {
         this.setState({
           imgURL: response.data.message,
           select: choice
         })
       })
       .catch(e => {
         console.log("error fetching image")
       })
       console.log(url)
   }

  handleSelect = (e) => {
    this.setState({
      select: e.target.value
    })
  }

  componentDidMount() {
    this.getBreed()
   this.getRandomPicture()
  }

  render() {
    const { breed, imgURL, select} = this.state
    return(
      <div className="main">
        
        <h1>Las distintas Razas de perros que existen</h1>
        <div class="content">
          <div>
            <h3>para iniciar haga Click en el botón</h3>
             {<select value={select} onChange={this.handleSelect}>
              {breed.map(e => 
                <option value={e}> {e} </option>
              )}
            </select>}  
               <button id="submit" disabled={!select} onClick={this.getDogPicture}>INICIO</button>
          </div>
          
          { <div>
            <h3>Option 2: Click the random button for a random dog.</h3>
            <p>Breed: {select}</p>
            <button onClick={this.getRandomPicture}>RANDOM</button>
          </div> }
          <div id="box-img">
            <img alt="dog" src={imgURL} className="height-Picture" />
          </div>
        </div>
      </div>
    )
  }
}

ReactDom.render(
  <DogsBreed />,
  document.getElementById('root')
);