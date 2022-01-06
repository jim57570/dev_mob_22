const API_KEY = '3064ea834dd2c3d31d07395d2da4a15e';
const url = 'https://api.themoviedb.org/3';

export const discover = async (currentPage) => {
    try {
      const response = await fetch(url + '/discover/movie?sort_by=popularity.desc&api_key=' + API_KEY + '&page=' + (currentPage+1),
      {method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }});
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  export const findMovie = async (query, currentPage) => {
    try {
      const response = await fetch(url + '/search/movie?api_key=' + API_KEY + '&query=' + query + '&page=' + (currentPage+1),
      {method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }});
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  export const detailMovie = async (id) => {
    try {
      const response = await fetch(url + '/movie/' + id + '?api_key=' + API_KEY,
      {method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }});
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  export const castMovie = async (id) => {
    try {
      const response = await fetch(url + '/movie/' + id + '/credits?api_key=' + API_KEY,
      {method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }});
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };