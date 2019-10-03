import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };
    //arrow function binds the .this to SearchBar and prevents undefined error
    onFormSubmit = event => {
        event.preventDefault();

        this.props.submit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            //We make the element controlled by passing the value through state
                            value={this.state.term}
                            onChange={e =>
                                this.setState({ term: e.target.value })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
