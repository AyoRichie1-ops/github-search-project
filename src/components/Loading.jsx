import React from 'react'
import {Oval} from "react-loader-spinner"

const Loading = () => {
  return (
    <div>
        <Oval
            height={100}
            width={1000}
            color="black"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={4}
            strokeWidthSecondary={2}
        />

    </div>
  )
}

export default Loading