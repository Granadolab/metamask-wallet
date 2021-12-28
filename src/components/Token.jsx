

import React, { Fragment } from 'react';

export const Token = () => {
    return (
      <Fragment>   
        <div className='flex flex-row'>
            <div>
                <p className='text-slate-400 font-normal text-center text-sm'>Don't see your token?</p>
                <p className='text-slate-400 font-normal text-center text-sm'>
                    <a href="g" className='text-meta-blue'>Refresh list</a>  or  <a href="g" className='text-meta-blue'>import tokens</a>
                </p>
                
            </div>
        </div>
      </Fragment>
    )
}
