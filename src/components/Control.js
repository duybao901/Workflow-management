import React, { Component } from 'react';
import Search from './Search'
import Sort from './Sort'

class Control extends Component {
    render() {
        return (
            <div className="search-sort row no-gutters">                 
                <Search></Search>
                <div className="sort col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Sort></Sort>
                </div>
            </div>
        );
    }
}
export default Control;
