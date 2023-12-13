import { createContext, useEffect, useState } from "react";
import mockUser from './Data/user'
import mockFollower from './Data/followers'
import axios from "axios";

export const GithubContext = createContext();
const baseUrl = 'https://api.github.com'

const GithubProvider = ({children}) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [followers, setFollowers] = useState(mockFollower);
    const [request, setRequest] = useState(0)
    const [error, setError] = useState({show: false, msg: ''})
    const [isLoading, setIsLoading] = useState(false)

    const searchUser = async (user) => {
        setIsLoading(true)
        const url = `${baseUrl}/users/${user}`

        const { data } =  await axios (url)
        if (data) {
            setGithubUser(data);
            const {followers_url} = data
            const {data: followdata} = await axios (`${followers_url}?per_page=100`)
            setFollowers(followdata)
        } else {
            setError({show: true, msg: "There is no User with that username"})
        }
        // console.log(data)

        setIsLoading(false)
        checkReq()
        // console.log(user);
    }

    const checkReq = async () => {
        try {
            const {data :{rate: {remaining}}} = await axios(`${baseUrl}/rate_limit`)
            setRequest(remaining)
            if (remaining === 0) {
                setError({show:true, msg: '*Sorry you have excedded your hourly rate limit*'})
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        checkReq()
    },[])

    return <GithubContext.Provider value={{githubUser, followers, request, error, isLoading, searchUser}}>
        {children}
    </GithubContext.Provider>
}


export default GithubProvider;