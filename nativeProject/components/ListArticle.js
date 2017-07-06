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
    const getDetail = this.props.getDetail
    console.log(getDetail);
    return( <TouchableOpacity key={i} onPress={() => getDetail()}>
              <Text>{article.title}</Text>
            </TouchableOpacity>)
  }

  render() {
    console.log(this.props);
    return (
        <View>{this.props.articles.map((article,index) => this.renderList(article,index))}</View>
    );
  }
}
