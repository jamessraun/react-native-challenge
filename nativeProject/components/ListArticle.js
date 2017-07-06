import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class ListArticle extends Component {

  constructor(props){
    super(props)
  }

  renderList(article,i){
    const { navigate } = this.props.navigator;
    return( <TouchableOpacity key={i} onPress={() => navigate('Detail',{article})}>
              <Text>{article.title}</Text>
            </TouchableOpacity>)
  }

  render() {
    return (
        <View>{this.props.articles.map((article,index) => this.renderList(article,index))}</View>
    );
  }
}
