import React from 'react'
import Search from '../components/Search'
import Loading from '../components/Loading'
import Info from '../components/Info'
import User from '../components/User'
import { useGlobalContext } from '../hooks/useGlobalContext'

const Home = () => {
 const {isLoading} = useGlobalContext()
 console.log(isLoading);
 if (isLoading) {
  return(
    <main>
      <Search/>
      <Loading/>
    </main>
  );
 }


  return (
    <div>
        <main>
            <Search />
            <Info />
            <User />
        </main>
    </div>
  )
}

export default Home