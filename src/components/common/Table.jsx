import React, { Fragment } from 'react'

export const Table = ({props}) => {
    return (
      <Fragment>
         <div className='flex justify-center p-4'>
            <table className='table-auto w-full'>
                <thead>
                    <tr>
                    <th className='text-gray-500 font-mono text-left'>City</th>
                    <th className='text-gray-500 font-mono text-left'>Artist</th>
                    <th className='text-gray-500 font-mono text-left'>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                    </tr>
                    <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                    </tr>
                    <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                    </tr>
                </tbody>
            </table>
         </div>
      </Fragment>
    )
}
