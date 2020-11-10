import React from 'react'
import { markMatches } from '../utils/highlight';
import glass from './assets/greyglass.png';

import './assets/search.css';

export const SearchResult = ({result, serachString}) => {
    return (
        <div>
          <ul className='search-result'>
            {
              result.length>0 && result.map( (res) => {
                return  (
                <li className='list'>
                <img  src={glass} alt='glass' className="img-greyglass" />
                <p className="result-text" dangerouslySetInnerHTML={{ __html: markMatches(res, serachString ) }} />
              </li>) 
            })
            }
          </ul>
        </div>
    )
}
