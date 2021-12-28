
import React, { Fragment, useState } from 'react';
import { Active } from './Active';
import { Activity } from './Activity';
import { Token } from './Token';


export const Transaction = () => {

    const actives = 'active';
    const activity = 'activity';

    const [change, setChange] = useState('active');

    const handleChange = (param) => {
        setChange(param);
    }

    return (
       <Fragment>
           <div>
               <div className='flex flex-row py-4'>
                    <div onClick={()=>handleChange(actives)} className='flex-1  px-1 py-2 shadow-lg cursor-pointer'>
                        <p></p>
                        <p className='text-meta-blue text-center'>Activos</p>
                          
                    </div>
                    <div onClick={()=>handleChange(activity)} className='flex-1 px-1 py-2 shadow-lg cursor-pointer'>
                        <p></p>
                        <p className='text-meta-blue text-center'>Actividad</p>
                    </div>
               </div>

               <div>

                   {
                       (change === 'active' )
                       ?
                        <Fragment>
                            <div className='flex flex-row hover:bg-gray-300'>
                                <Active/>
                            </div>
                            <div className='py-8 flex justify-center'>
                                <Token/>
                            </div>
                        </Fragment>
                       
                       :
                       <Activity/>

                   }
               </div>
           </div>
       </Fragment>
    )
}
