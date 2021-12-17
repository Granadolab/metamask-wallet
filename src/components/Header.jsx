import React, { Fragment } from 'react'

export const Header = () => {
    return (
<Fragment>
    <nav className="bg-white drop-shadow-md">
        <div className="w-full mx-auto px-2">
            <div className="flex flex-row py-4">
                <div className="w-full md:px-4">
                    <img className="hidden lg:block h-10 w-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDOtymFPSUi4XZGMeW6PvOoEuDFPflQRyqg&usqp=CAU" alt="Workflow"/>
                </div>
                <div className="w-full px-2">
                    <div className='flex flex-row justify-end'>
                      <div className='pr-2 py-3'>
                         <div className='rounded-full  h-2 w-2 bg-gradient-to-r from-teal-500 to-green-800  border-red-500'></div>
                      </div>
                       <div className='pr-2'>
                            <select className="text-gray-750 font-mono   py-2 rounded-lg text-sm font-medium" placeholder='seleccione red'>
                                    <option>Red principal Ethereum</option>
                                    <option>Red principal Bitcoin</option>
                                    <option>Red principal Theter</option>
                            </select>
                       </div>
                      
                        <div className='rounded-full  h-8 w-8 bg-gradient-to-r from-cyan-500 to-blue-500  border-red-500'></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </nav>
</Fragment>
    )
}
