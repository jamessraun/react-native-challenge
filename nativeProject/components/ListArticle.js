import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Picker,
  ListView,
  View
} from 'react-native';

export default class ListArticle extends Component {

  constructor(props){
    super(props)
  }

  renderList(article,i){
    return(<Text key={i}>{article.title}</Text>)
  }

  render() {
    return (
        <View>{this.props.articles.map((article,index) => this.renderList(article,index))}</View>
    );
  }
}

AppRegistry.registerComponent('ListArticle', () => ListArticle);
