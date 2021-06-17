import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { searchCity, setData } from './actions';

const SearchWeather = ({ city, searchCity, setData}) => {
    const searchButton = async () => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=bad46dfee1ae1125ec4faf31e63449de`);
            const data = res.data.list.map(list => {
                return {temp: list.main.temp, name: list.dt_txt}
            });
            setData(data);
        } catch (error) {
            alert("City search is wrong")
        }
        
    }

    return (
        <div className="form">
            <input onChange={(event) => searchCity(event.target.value)} value={city} className="input_wrapper" type="text" placeholder="Enter city" />
            <button onClick={() => searchButton()} className="button_wrapper">Search</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        city: state.city,
        temperatureData: state.temperatureData,
    }
}
const mapDispatchToProps = {
    searchCity,
    setData,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchWeather);