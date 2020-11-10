import React , {useState} from 'react'
import voice  from './assets/voice.png';
import close from './assets/close.png';
import line from './assets/line.png';
import blueglass from './assets/blueglass.png';
import greyglass from './assets/greyglass.png';

import { connect } from 'react-redux';
import { saveresult, search } from '../redux/actions/searchActions';
import { savesearch } from '../redux/actions/searchActions';
import { find } from '../utils/serach';

import './assets/search.css';

const SearchBar = (props) => {
    const [serachString, setserachString] = useState("");


    let activeClass = props.active ===  0 ? "search-bar"  : "search-bar-active";

    

    // serach function
    const handleSearch = (e) => {
        setserachString(e.target.value);
        if(props.previousResult.length !== 0){
            props.Search(e.target.value);
            let findresult = find(props.previousResult, e.target.value);
            if(findresult.length > 0)  props.SaveResult(findresult);
        }
    }
    //saving data in store
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            props.SaveSearch(e.target.value)
            setserachString("");
        }
    }
    
    const handleSearchButton = (e) => {
        if(e.target.value.trim().length !== 0){
            props.SaveSearch(e.target.value)
            setserachString("");
        }
    }


    return (
        <div className={activeClass}>
            <img src={greyglass} alt='greyglass' className="img-greyglass" />
            <input placeholder='search here...' value={serachString}  onChange={ handleSearch} onKeyPress={ handleKeyPress } />
            <div>
                <img onClick={() => setserachString("")} src={close} alt='close' className="img-close" />
                <img src={line} alt='line' className="img-line" />
                <img src={voice} alt='voice' className='img-voice' />
                <img onClick={ handleSearchButton} src={blueglass} alt='blueglass' className="img-blueglass" />
            </div>
        </div>
    )
}


//redux state
const mapStateToProps = (state) => {
    return{
        previousResult: state.search.previousResult,
        serachString: state.search.serachString
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Search: (sentence) => dispatch(search(sentence)),
        SaveSearch: (sentence) => dispatch(savesearch(sentence)),
        SaveResult: (result) => dispatch(saveresult(result))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(SearchBar);