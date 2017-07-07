import axios from 'axios'

export const loadAction = (source='') => {

  return {
    type:'Get_SOURCES',
    payload:axios.get('https://newsapi.org/v1/sources')
  }
}
