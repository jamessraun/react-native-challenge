import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
} from 'react-native';

export default class DetailScreen extends Component{

  render(){
    console.log(this.props);
    const { article } = this.props.navigation.state.params
    return (
      <View>
        <View><Text>Title: {article.title}</Text></View>
        <View><Text>Description: {article.description}</Text></View>
        <View><Text>Author:{article.author}</Text></View>
      </View>
    )
  }
}
