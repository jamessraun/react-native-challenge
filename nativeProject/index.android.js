import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Picker,
  ListView,
  View,
  TouchableHighlight,
} from 'react-native';
import axios from 'axios'
import { Bubbles } from 'react-native-loader';


import ListArticle from './components/ListArticle'

const styles = StyleSheet.create({
  container: {
    // flex: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    // fontSize: 20,
    // textAlign: 'center',
    // margin: 10,
  },
  instructions: {
    // textAlign: 'center',
    // color: '#333333',
    // marginBottom: 5,
  },
});

export default class nativeProject extends Component {

  constructor(props){
    super(props)
    this.state={dataSource: [],articles:[],source:'',is_loading:true}
  }

  chooseSource(data){
    this.setState({source: data})
  }

  getSource(data){

  }

  componentDidMount(){
    let self = this
    axios.get('https://newsapi.org/v1/sources')
    .then((response)=> {
      let data = response.data.sources.map(source => { return {id:source.id,name:source.name}})
        self.setState({dataSource:data ,is_loading:false})
    })
    .catch(error => {

    })
  }

  getArticles(source){
    let self = this
    axios.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=latest&apiKey=2b8dc8cd0b964e7d87e5e805a531bc27`)
    .then((response)=> {
      let data = response.data.articles
        self.setState({articles:data})
    })
    .catch(error => {

    })
  }

  render() {
    if(this.state.is_loading)
    return(<View />)
    else {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.source}
          onValueChange={(itemValue, itemIndex) => this.chooseSource(itemValue)}>
          {this.state.dataSource.map(source => (<Picker.Item key={source.id} label={source.name} value={source.id}/>))}
        </Picker>
        <View />
        <TouchableHighlight onPress={() => this.getArticles(this.state.source)}>
          <Text>Test</Text>
        </TouchableHighlight>

        <View><View />
          <ListArticle articles={this.state.articles}/>
        </View>
      </View>
    );
   }
  }
}



AppRegistry.registerComponent('nativeProject', () => nativeProject);
