import { Fragment } from 'react';
import { Account } from './components/Account';
import { Cash } from './components/Cash';
import { Header } from './components/Header';

export const App = () => {
    return (
        <Fragment>
           <div className="container mx-auto px-32 py-4 ">
                <Header/>
                <Account/>
                <Cash/>
           </div>
        </Fragment>
    )
}
