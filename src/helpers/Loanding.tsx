import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Plane } from 'react-loader-spinner';

export const Loanding = () => {

    return (
        <div className='loanding'>
          <div>
          <Plane
          color="#FFC300" 
          ariaLabel="loading-indicator"
          />
            <h4 className='mensaje'>Espere por Favor!</h4>
          </div>
        </div>
      )
}
