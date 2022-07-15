import React from 'react';
import { Indicator } from './Indicator';


export const TopBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="d-flex">
                       <Indicator /> 
                    </div>
                </div>
            </nav>
        </>
    )
}
