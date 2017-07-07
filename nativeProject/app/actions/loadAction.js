import axios from 'axios'

export const loadAction = (source='') => {

  let type='';
  let payload=[];

  if(source){
    type = 'GET_ARTICLES',
    payload = axios.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=2b8dc8cd0b964e7d87e5e805a531bc27`)
  }
  else {
    type = 'GET_SOURCES',
    payload = axios.get('https://newsapi.org/v1/sources')
  }

  return {
    type,
    payload
  }
}
