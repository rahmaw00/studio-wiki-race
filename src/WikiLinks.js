import React, {Component} from 'react';
import WikiApi from './WikiApi.js';

export default class WikiLinks extends Component {
    constructor(props) {
        super(props);
        this.state = { links: [] };
    }
    
    componentDidMount() {
        WikiApi.getLinks(this.props.title).then(
            links=> this.setState({ links: links }));
    }
    

  render() {
    var links = this.state.links;
    
    var coolerItems = links.map(link => <button onClick={coolerItems}>{link}</button>);

    return (
      <div>
      {coolerItems}
      </div>
    );
  }
}