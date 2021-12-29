import React, {Fragment} from 'react';

import { Account } from './Account';
import { Cash } from './Cash';
import { Footer } from './Footer';
import { Header } from './Header';
import { Transaction } from './Transaction';


export const Home = () => {
    return (
        <Fragment>
            <div className="container mx-auto px-32 py-4 ">
                <Header/>
                <Account/>
                <Cash/>
                <Transaction/>
                <Footer/>
            </div>
        </Fragment>
    )
}
