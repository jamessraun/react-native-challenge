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
    this.state = { articles:[],source:'',is_loading:true}
  }

  chooseSource(data){
    this.setState({source: data})
  }

  componentDidMount(){
    this.props.loadSource()
  }

  componentWillReceiveProps(nextProps){
    const { sources } = nextProps
    let data = sources.filter(source => (source.id==='initial'))
    if(data.length===0){
      this.setState({
        sources:nextProps.sources.unshift({id:'initial',name:'Find news...'})
      })
    }
  }

  getArticles(source){
    this.props.loadArticles(source)
  }


  getDetail(){
    this.props.navigation.navigate('Detail')
  }

  render() {

    const { sources } = this.props

    if(sources){
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
          <ListArticle articles={this.props.articles} navigator={this.props.navigation}/>
        </View>
      </View>
    );
  } else {
    return(<View><Text>test</Text></View>)
   }
  }
}

const mapStateToProps = ({sourcesReducer,articlesReducer}) => {
  return {
    sources: sourcesReducer.sources,
    articles: articlesReducer.articles,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSource: () => dispatch(loadAction()),
    loadArticles: (source) => dispatch(loadAction(source)),

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeArticle);
