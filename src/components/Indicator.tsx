import React, { useEffect, useState, FC } from 'react';
import axios from 'axios';
import { selectorIndicator } from '../helpers/types';


export const Indicator: FC<selectorIndicator> = ({ handleIndicator }) => {

    const [data, setData] = useState([] as any);

    useEffect(() => {
        getIndicator();
        prueba();
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

    const prueba = () =>{
        Object.values(data).filter((iten: any)=>{
            if(iten === '1.7.0') {
                console.log(iten);                
            }            
        })
    }

    return (
        <>
            <label className="form-label">Indicador</label>
            <select className="form-select" aria-label="Default select example" onChange={(e) => handleIndicator(e.target.value)}>
                <option key='0' value='0'>Seleccione...</option>
                {
                    Object.values(data).map((item: any, index: number) => { 
                        return <option key={index} value={item.codigo}> {item.nombre} </option>
                    })
                }
            </select>
        </>
    )
}
