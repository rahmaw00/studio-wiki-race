import React, {Component} from 'react';
import WikiApi from './WikiApi.js';
import { Jumbotron, Button } from 'react-bootstrap';

export default class GameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: "Loading..."
    };
  }
  
  componentDidMount() {
    var self = this;
    WikiApi.getSummary(this.props.title).then(
      function(text) {
        self.setState({
          summary: text
        });
      });
  }
  
  
  render() {
    var currentTitle = this.props.title;

    return (
      <Jumbotron>
        <h1>{this.props.title}</h1>
        <p>{this.state.summary}</p>
      </Jumbotron>
    );
  }
}