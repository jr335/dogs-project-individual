import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
export default  class dashboard extends Component {
  state = {
    data: [],
    Value: ""
  };

  componentDidMount() {
    this.getDogsapi();
  }

  getDogsapi = () => {
    axios
      .get(`https://localhost:3001`)
      .then(res => {
        const a = Object.entries(res.data.message)
          .map(k => (k[1].length ? k[1].map(i => i + " " + k[0]) : k[0]))
          .flat();

        this.setState({ data: a });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onChangeApi = e => {
    e.preventDefault();
    let value = e.target.value;
    console.log(value);
    this.setState({ Value: value });
  };

  render() {
    if (this.state.Value) {
      return <Link to={this.state.Value`../components/dogsPage.js/${this.state.Value}`} />;
    }
    return (
      <div>
        <div>
          <h2> Hey! </h2>
          <h3>Here the dogs list and you can select which dog you want.</h3>
        </div>
        <form>
          <ul className="list-unstyled">
            {this.state.data.map(i => {
              return (
                <li>
                  <hr />
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.onChangeApi}
                    value={i}
                    id={i}
                  >
                    {i}
                  </button>
                </li>
              );
            })}
          </ul>
        </form>
      </div>
    );
  }
}


