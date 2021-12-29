
import React from 'react';
import { Home } from '../components/Home';
import { Pay } from '../components/Pay';
import { Sale } from '../components/Sale';
import { Shop } from '../components/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


export const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/comprar' element={<Shop/>}/>
                <Route exact path='/transferir' element={<Pay/>}/>
                <Route exact path='/vender' element={<Sale/>}/>
                <Route exact path='/' element={<Home/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </Router>
    )
}
