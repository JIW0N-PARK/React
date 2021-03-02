import React, {Component} from 'react';
//import App from '../App';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state={
      term: this.props.term
    }
  }
  change(term){
    this.setState({term});
  }

  render() {
    return(
      <div className="input-group mb-3">
        <input type="text" className="form-control shadow-none" 
          placeholder="Search" 
          aria-label="Search" 
          aria-describedby="button-addon2" value={this.state.term} 
          onChange={(event) => {
            this.change(event.target.value)}}
          onKeyDown={(event) => {
            if(event.key === 'Enter') {
              this.props.onChange(this.state.term)
            }
          }}/>
        <div className="input-group-append">
          <button className="btn btn-info" type="button" id="button-addon2" onClick={() => {
            this.props.onChange(this.state.term);
          }}>Search</button>
        </div>
      </div>
    )
    
  }
}

export default SearchBar;