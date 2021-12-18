import React, { Fragment } from 'react'
import { Button } from './common/Button'
import { ArrowDownOutline } from 'react-ionicons'
import { TrendingUpOutline } from 'react-ionicons'
import { RepeatOutline } from 'react-ionicons'





export const Cash = () => {
    return (
       <Fragment>
            <div className="flex justify-center">
                <div className='flex flex-col '>
                    <div className='flex flex-row justify-center py-2 '>
                        <div className='rounded-full  h-4 w-4 py-4'>
                            <img src='https://cdn.worldvectorlogo.com/logos/ethereum-1.svg' alt="ethereum"/>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center pt-6' >
                        <p className='text-slate-800 font-ligth text-3xl'>0 ETH</p>
                    </div>
                    <div className='flex flex-row justify-center py-2' >
                        <p className='text-slate-400 font-normal text-md'>$0.00 USD</p>
                    </div>
                    <div className='flex justify-center py-2'>
                        <Button
                        title={'comprar'}
                        >
                        <ArrowDownOutline
                                color={'#ffffff'} 
                                height="24px"
                                width="24px"
                                padd
                                />
                        </Button>
                        <Button
                        title={'enviar'}
                        >            
                            <TrendingUpOutline
                            color={'#ffffff'} 
                            height="24px"
                            width="24px"
                            />
                        </Button>

                        <Button
                        title={'canjear'}
                        >
                                <RepeatOutline
                                color={'#ffffff'} 
                                height="24px"
                                width="24px"
                                />
                        </Button>
                    </div>
                </div>
            </div>
       </Fragment>
    )
}
