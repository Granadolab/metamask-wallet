import React, { Fragment } from 'react'

export const Table = ({props}) => {
    return (
      <Fragment>
         <div className='flex justify-center p-4'>
            <table className='table-auto w-full'>
                <thead>
                    <tr>
                    <th className='text-gray-500 font-mono text-left'>AMOUNT</th>
                    <th className='text-gray-500 font-mono text-left'>TOKEN TRANSACTION</th>
                    <th className='text-gray-500 font-mono text-left'>DATE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className='text-gray-400'>0.00256397 eth</td>
                    <td className='text-meta-blue'>2ywodmdfp243534534sdfklfd</td>
                    <td>27-10-2021</td>
                    </tr>
                    <tr>
                    <td className='text-gray-400'>0.09563977 eth</td>
                    <td className='text-meta-blue'>2ywodmdfp243534534sdfklfd</td>
                    <td>27-10-2021</td>
                    </tr>
                    <tr>
                    <td className='text-gray-400'>0.00147563 eth</td>
                    <td className='text-meta-blue'>2ywodmdfp243534534sdfklfd</td>
                    <td>27-10-2021</td>
                    </tr>
                </tbody>
            </table>
         </div>
      </Fragment>
    )
}
