import React, { Component } from "react"


class Town extends Component {

    constructor(props) {
        super(props)
        this.state = {
            temperatureInDegree: "",
            temperatureInFahrenheit: "",
            showTemperatureInDegrees: false,
            check: false
        };

        this.fetchData = this.fetchData.bind(this);

    }

    fetchData(){
        fetch( 
        "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=8b15f804403cfa600c5f7b3563435264&units=metric"
      ).then(response => {
        return response.json()
    })
    .then(response => {
        this.setState({
            temperatureInDegree:  Math.floor(response.main.temp),
            temperatureInFahrenheit: this.temperatureInFahrenheitFromDegree(response.main.temp) 
        })
    });  
    }
    
    
    temperatureInFahrenheitFromDegree(DegreeTemp) {
        return Math.floor((DegreeTemp * 9/5) + 32);
    }
    
    componentDidMount() {
        this.fetchData();
    }

    handleCheckbox(e) {
        this.setState({ showTemperatureInDegrees: e.target.checked });
    }
      

    render() {
        return (
            <div>
                <img alt={`Nasik City Image`} width={525} 
                src= "nasik.jpg"                
                />


                    <h1>
                        I hail from the city Nasik❣
                    </h1>
                    <p>
                    Nashik is an ancient holy city in Maharashtra, a state in western India. It’s known for its links to the “Ramayana” epic poem.
                    </p>

                    <br></br>
                    <br></br>
                    
                <div class = "content-body">

                    <label><input type="checkbox" value="check" 
                        onChange = {(e) => this.setState({check: !this.state.check})}/> Degrees </label>

                        <h1>
                        {this.state.check ? this.state.temperatureInDegree + " ℃" : this.state.temperatureInFahrenheit + " ℉"}
                        </h1>


                    {
                        this.state.temperatureInDegree < 10 ? 
                        <img alt={`Its cold icon`} width={125} src= "cold.png"/> :
                        (this.state.temperatureInDegree >= 10 && this.state.temperatureInDegree < 20) ? 
                        <img alt={`Its Mild icon`} width={125} src= "mild.png"/> : 
                        <img alt={`Its Sunny icon`} width={125} src= "sunny.png"/>
                    }
                </div>

                

            </div>

        )
    }
}


export default Town;