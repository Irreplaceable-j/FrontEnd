const API_KEY = '_MIVAJu4DgOsE_s0wd727t8xiADCjiEZIC08nsG-r04';
const URL = 'http://api.unsplash.com/photos/random?'
const params = {
  client_id: API_KEY,
  orientation: 'landscape',
  query: 'landscape'
}

const queryString = new URLSearchParams(params);
const api = async () => {
  const response = await fetch(URL + queryString, {
    header: {
      'Accept-Version': 'v1'
    }
  });

  return response.json();
}

export { api };


