import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

import file from './apis/youtube';
import VideoDetail from './components/VideoDetail';

class App extends React.Component{
  state={
    list_of_videos:[],
    chosen_video: null
  }
    grab_data = async (user_term) => {
      const response = await file.get('/search',{
        params:{
          q:user_term
        }
      })
      this.setState({
        list_of_videos:response.data.items,
        chosen_video: response.data.items[0]
      })
    }
    
    grab_video = (video)=>{
      this.setState({chosen_video:video})
    }
    
    
    render(){
    return (
      <div className="App">
        <h3>Search Video</h3>
        <SearchBar grab_data={this.grab_data} />
        <div className="Display">


            <div className="VideoDetail">
              <VideoDetail chosen_video={this.state.chosen_video} />
            </div>
            <div className="VideoList">
              <VideoList grab_video={this.grab_video} list_of_videos={this.state.list_of_videos} />
            </div>


            
        </div>
        
      
        
        
        
      </div>
    );
  }
}

export default App;