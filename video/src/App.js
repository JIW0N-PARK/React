import React from 'react';
//import logo from './logo.svg';
import './App.css';
import * as youtubeSearch from 'youtube-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const GOOGLE_KEY = "...";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '슬기로운 의사생활',
      videos: [],
      selectedVideo: null
    };
  }
  
  componentDidMount() {
    this.search(this.state.term);
  }

  search(term) {
    this.setState({term: term});
    youtubeSearch(term, {key: GOOGLE_KEY}, (err, results) => {
      if(err) return console.log(err);
      console.log(results);
      this.setState({
        videos: results,
        selectedVideo: results[0]
      });
    });
  }

  render() {
    return (
    <div className="App mt-3 ml-5 mr-5">
      <SearchBar term={this.state.term} onChange={(term) => {this.search(term);}}/>
      <div className="row">
        <div className="col-8">
          <VideoDetail video={this.state.selectedVideo}/>
        </div>
        <div className="col-4">
          <VideoList videos={this.state.videos} 
            onItemSelect={(video) => {
              this.setState({selectedVideo: video})
            }}/>
        </div>
      </div>
    </div>
  );
  }
  
}

export default App;
