import React, { Fragment } from 'react'

export const Button = ({children, title}) => {

    return (
       <Fragment>
            <div className='flex flex-col px-4'>
                <div className='flex justify-center  rounded-full  p-2 h-10 w-10 bg-meta-blue '>
                {children}
                </div>
                <div className='py-2'>
                <p className='text-sm text-meta-blue font-mono text-left'>{title}</p>
                </div>
            </div>
       </Fragment>
    )
}
