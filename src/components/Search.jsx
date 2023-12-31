import React, {useState} from 'react'
import '../styles/Search.css';
import {MdSearch} from "react-icons/md"
import { useGlobalContext } from '../hooks/useGlobalContext';

const Search = () => {
  const {error, request, isLoading, searchUser} = useGlobalContext()
  const [searchText, setSearchText] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()

    searchUser(searchText);
  }
  return (
    <section className="section">
      <div className="section-center search-card">
        {error.show && <div className="error-wrapper"><p>{error.msg}</p></div>}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch/>
            <input 
            type="text" 
            placeholder="Enter Gitub User" 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)}
            />
            
            {request > 0 && !isLoading && (<button type='submit'>Search</button>)}
          </div>
        </form>
        <h3 className='req'>Requests: {`${request}`}/60</h3>
      </div>
    </section>
  )
}

export default Search