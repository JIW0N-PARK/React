import axios from 'axios';

const API_URL = 'http://api.openweathermap.org/data/2.5/forecast';
const API_KEY = 'fe472a9a8a5946a27ccf848d813b5104';

export function addCity(name){
  return (dispatch) => {
    dispatch({ type: 'START_LOADING' });
    dispatch({ type: 'CLEAR_ERRORS' });

    axios.get(API_URL, {params: {
      q: name,
      appid: API_KEY,
      units: 'metric'
    }}).then(({data}) => {
      dispatch({
        type: 'ADD_CITY', 
        payload: data
      });
    }).catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: error.response.data
      });
    }).then(() => {
      dispatch({ type: 'END_LOADING' });
    });
  };
}


// function addCity(city) {
//   return {
//     type: 'ADD_CITY',
//     payload: city
//   };
// }

// function fetchCity(city){
//   return (dispatch) => {
//     dispatch({type: 'ADD_CITY', payload: city});
//   };
// }