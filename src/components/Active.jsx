import React, { Fragment } from 'react'

export const Active = () => {

    return (
      <Fragment>
            <div className='flex'>
                <div className="flex flex-col">
                    <div className='flex flex-row justify-center py-2 '>
                        <div className='rounded-full shadow-2xl h-4 w-4 py-4'>
                            <img src='https://cdn.worldvectorlogo.com/logos/ethereum-1.svg' alt="ethereum"/>
                        </div>
                        <div className='flex flex-row justify-center pt-4 px-2' >
                            <p className='text-slate-800 font-ligth text-md'>0 ETH</p>
                        </div>
                    </div>
                    
                    <div className='flex flex-row justify-center' >
                        <p className='text-slate-400 font-normal text-sm'>$0.00 USD</p>
                    </div>

                </div>
                
            </div>
      </Fragment>
    )
}
