import React, { Fragment } from 'react';
import {
    Link
  } from "react-router-dom";

export const Button = ({children, title, path}) => {

    return (
       <Fragment>
            <div className='flex flex-col px-4'>

                <div className='flex justify-center  rounded-full  p-2 h-10 w-10 bg-meta-blue '>
                    <Link
                    to={`${path}`}
                    >
                        {children}
                    </Link> 
                </div>
                
                <div className='py-2'>
                    <p className='text-sm text-meta-blue font-mono text-left'>{title}</p>
                </div>
            </div>
       </Fragment>
    )
}
