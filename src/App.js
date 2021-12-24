import { Fragment } from 'react';
import { Account } from './components/Account';
import { Cash } from './components/Cash';
import { Header } from './components/Header';
import { Transaction } from './components/Transaction';


export const App = () => {
    return (
        <Fragment>
           <div className="container mx-auto px-32 py-4 ">
                <Header/>
                <Account/>
                <Cash/>
                <Transaction/>
           </div>
        </Fragment>
    )
}
