import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
// import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async term => {
        const response = await axios.get(
            'https://api.unsplash.com/search/photos',
            {
                params: { query: term },
                headers: {
                    Authorization:
                        'Client-ID 504c3bfea79d4191236783c97bb10bd66d1ac890696d150fe01c6730aa6b4674'
                }
            }
        );
        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar submit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;
