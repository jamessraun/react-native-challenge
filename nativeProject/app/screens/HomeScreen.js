import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  Text,
  Picker,
  View,
  Button,
} from 'react-native';
import axios from 'axios';

import ListArticle from '../.././components/ListArticle';
import { loadAction } from '../actions/loadAction'

class HomeArticle extends Component {

  constructor(props){
    super(props)
    this.state = { articles:[],ource:'',is_loading:true}
  }

  chooseSource(data){
    this.setState({source: data})
  }

  componentDidMount(){

    this.props.loadAction()
  }

  getArticles(source){

    axios.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=2b8dc8cd0b964e7d87e5e805a531bc27`)
    .then((response)=> {
      let data = response.data.articles
        this.setState({articles:data})
    })
    .catch(error => {

    })
  }


  getDetail(){
    this.props.navigation.navigate('Detail')
  }

  render() {

    const { sources } = this.props
    console.log('----',sources);

    if(sources)
    return (
      <View>
        <Picker
          selectedValue={this.state.source}
          onValueChange={(itemValue, itemIndex) => this.chooseSource(itemValue)}>
          { sources.map(source => (<Picker.Item key={source.id} label={source.name} value={source.id}/>)) }
        </Picker>
        <Button
          onPress={() => this.getArticles(this.state.source)}
          title="Search"
          color="#841584"
          accessibilityLabel="Search News"
        />
        <View>
          <ListArticle articles={this.state.articles} navigator={this.props.navigation}/>
        </View>
      </View>
    );

    else {
    return(<View />)
   }
  }
}

const mapStateToProps = ({sourcesReducer}) => {
  return {
    sources: sourcesReducer.sources
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAction: () => dispatch(loadAction())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeArticle);
