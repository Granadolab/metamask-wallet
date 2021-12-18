
import React, { Fragment } from 'react';
import { DocumentsOutline, EllipsisVerticalOutline } from 'react-ionicons';




export const Account = () => {
    return (
        <Fragment>
            <div className='divide-y divide-y-reverse divide-gray-300'>
                <div>
                    <div className='flex justify-end py-2'>
                                <EllipsisVerticalOutline
                                    color={'#00000'} 
                                    title={'list'}
                                    height="20px"
                                    width="20px"
                                />
                    </div>
                    <div className="flex justify-center">
                            <div className='pt-2'>
                                <p className='text-gray-600'>Account 1</p>
                            </div>
                    </div>
                </div>
                <div className='flex justify-center pb-2'>
                    <div className='flex flex-row'>
                        <span className='px-1'>
                                <p className='text-gray-500 italic leading-7'>fewiohroihu45ih234o32hg</p>
                            </span>
                            <DocumentsOutline
                            color={'#a39f9f'} 
                            title={'copy'}
                            height={'20px'}
                            width={'20px'}
                            />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
