import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const defaultSearchTerm = 'javascript';
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, onSearch] = useVideos(defaultSearchTerm);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);
  // };

  return (
    <div className="ui container">
      <SearchBar
        onSearch={onSearch}
        defaultSearchTerm={defaultSearchTerm}></SearchBar>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
