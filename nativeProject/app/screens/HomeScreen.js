import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Picker,
  View,
  Button,
} from 'react-native';
import axios from 'axios';

import ListArticle from '../.././components/ListArticle';

export default class HomeArticle extends Component {

  constructor(props){
    super(props)
    this.state={dataSource: [],articles:[],source:'',is_loading:true}
  }

  chooseSource(data){
    console.log('masuk sini');
    console.log(this.source);
    this.setState({source: data})
  }

  componentDidMount(){

    axios.get('https://newsapi.org/v1/sources')
    .then((response)=> {
      let data = response.data.sources.map(source => { return {id:source.id,name:source.name}})
        this.setState({dataSource:data ,is_loading:false,source:'abc-news-au'})
    })
    .catch(error => {

    })
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
    console.log('masuk sini');
    console.log(this.props.navigation);
    this.props.navigation.navigate('Detail')
  }

  render() {

    if(this.state.is_loading)

    return(<View />)
    else {
    return (
      <View>
        <Picker
          selectedValue={this.state.source}
          onValueChange={(itemValue, itemIndex) => this.chooseSource(itemValue)}>
          {this.state.dataSource.map(source => (<Picker.Item key={source.id} label={source.name} value={source.id}/>))}
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
   }
  }
}
