import React, { FC, useEffect, useState } from 'react';
import { selectorYears_ } from '../helpers/types';

export const SelectorYears: FC<selectorYears_> = ({ indicador }) => {

    
    const [yearSelect, setYearSelect] = useState(0);
    console.log(yearSelect);
    

    switch (indicador) {

        case 'uf':
             for (let i = 1977; i <= 2022; i++){
                //setYearSelect(i);
                console.log(i);               
            }                     
            break;

        /* case 'aprobada':
            const approved = cotizaciones.filter(item =>
                item.estado === 'aprobada')
            setdataO(approved)
            break;

        case 'rechazada':
            const rejected = cotizaciones.filter(item =>
                item.estado === 'rechazada')

            setdataO(rejected)
            break;

        case 'pedido':
            const order = cotizaciones.filter(item =>
                item.estado === 'pedido')
            setdataO(order)
            break;

        case 'delete':
            setdataO(cotizaciones)
            break; */

    }



    return (
        <>
            <select className="form-select" aria-label="Default select example">
                <option key='0' value='0'>Seleccione...</option>

            </select>
        </>
    )
}
