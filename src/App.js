import React, { Component } from "react"



import './App.css';
import AboutMe from "./components/AboutMe";
import Town from "./components/Town";



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenu: 'a'
    }
  }

  render() {
    return (
      <div className="content-body">

          <div className="App">
            
            <div className="menu">
              <p className="menu-item" onClick={() => this.setState({ selectedMenu: 'a' })}>
              {
                this.state.selectedMenu === 'a' ?
                <div style={{ color: 'orange', fontWeight: 'bold' }}>About Me</div>
                :
                <div>About Me</div>
              }
              </p>


              <p className="menu-item" onClick={() => this.setState({ selectedMenu: 'm' })}>
                
              {
                this.state.selectedMenu === 'm' ?
                <div style={{ color: 'orange', fontWeight: 'bold' }}>My Town</div>
                
                :
                <div>My Town</div>
              }
              </p>

            </div>

            {this.state.selectedMenu === 'a' ? <AboutMe />:<Town />}
          
          </div>
      </div>
    );
  }
}


export default App;
