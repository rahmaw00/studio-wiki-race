import React, {Component} from 'react';
import WikiApi from './WikiApi.js';

export default class WikiLinks extends Component {
    constructor(props) {
        super(props);
        this.state = { links: [] };
    }
    
    componentDidMount() {
        WikiAPi.getLinks(this.props.title).then(
            links=> this.setState({ links: links }));
    }

  render() {
    var links = this.state.links;
    var items = [];
    
    for (var i=0; i<links.length; i++) {
        items.push(<p>{links[i]}</p>);
    }
    
    var coolerItems = links.map(link => <p>{link}</p>);

    return (
      <div>
      {coolerItems}
      </div>
    );
  }
}