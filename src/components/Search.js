import React from 'react'
import  SearchBar  from './SearchBar'
import { SearchResult } from './SearchResult'
import { connect } from 'react-redux';

import './assets/main.css';


const Search = (props) => {
    let res = props.result ? props.result: [];
    
    //passing for highlight
    let serachString = props.serachString;
    
    //checking search result 
    let active = res.length === 0 ? 0 : 1;
    return (
        <div className="wrapper">
            <SearchBar active={active} />
           {  
           active  > 0  &&
           <SearchResult result={res} serachString={serachString} />
           } 
        </div>
    )
}

//redux state
const mapStateToProps = (state) => {
    return{
        result: state.search.result,
        serachString: state.search.serachString
    }
}

export default connect(mapStateToProps)(Search);