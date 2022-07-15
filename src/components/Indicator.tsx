import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SelectorYears } from './SelectorYears';


export const Indicator = () => {

    const [data, setData] = useState([] as any);
    const [indicatorSelect, setIndicatorSelect] = useState('');
    const [monthSelect, setMonthSelect] = useState('');
    //console.log(indicatorSelect);
    //console.log(data);


    useEffect(() => {
        getIndicator();
    }, [])

    const getIndicator = () => {
        axios({
            method: 'get',
            url: 'https://mindicador.cl/api'
        })
            .then((response) => {
                setData(response.data);
            }).catch(console.log)
    }

    return (
        <>
            <select className="form-select" aria-label="Default select example" onChange={(e) => setIndicatorSelect(e.target.value)}>
                <option key='0' value='0'>Seleccione...</option>
                {
                    Object.values(data).map((item: any, index: number) => {
                        return <option key={index} value={item.codigo}> {item.nombre} </option>
                    })
                }
            </select>

            <SelectorYears 
            indicador={indicatorSelect}
            />

            <select className="form-select" aria-label="Default select example">
                <option key='0' value='0'>Seleccione...</option>

            </select>
        </>
    )
}
