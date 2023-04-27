import {Helmet} from "react-helmet";
import React from 'react'

const Meta = (props) => {
    return(
        <Helmet>
        <Meta charSet="utf-9"/>
    <title>{props.title}</title>
</Helmet>
    )
   
}

export default Meta