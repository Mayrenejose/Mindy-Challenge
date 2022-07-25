import React, { FC, useEffect, useState } from 'react';
import { selectorMonth_ } from '../helpers/types';

export const SelectorMonth: FC<selectorMonth_> = ({ handleMonth, indicador }) => {

    const [disable, setDisable] = useState(false);

    const options = [
        { value: '1', label: 'Enero' },
        { value: '2', label: 'Febrero' },
        { value: '3', label: 'Marzo' },
        { value: '4', label: 'Abril' },
        { value: '5', label: 'Mayo' },
        { value: '6', label: 'Junio' },
        { value: '7', label: 'Julio' },
        { value: '8', label: 'Agosto' },
        { value: '9', label: 'Septiembre' },
        { value: '10', label: 'Octubre' },
        { value: '11', label: 'Noviembre' },
        { value: '12', label: 'Diciembre' },
    ]

    useEffect(() => {       
        if (indicador === 'tasa_desempleo') {
            setDisable(true);
            handleMonth('');
        }
        else if (indicador === 'imacec') {
            setDisable(true);
            handleMonth('');
        }
        else if (indicador === 'ipc') {
            setDisable(true);
            handleMonth('');
        }
        else if (indicador === 'utm') {
            setDisable(true);
            handleMonth('');
        } else { setDisable(false) }

    }, [indicador])

    return (
        <>
            <label className="form-label">Mes</label>
            <select className="form-select" disabled={disable} aria-label="Default select example" onChange={(e) => handleMonth(e.target.value)}>
                <option key='0' value='0'>Seleccione...</option>
                {
                    options.map((value: any, index: number) => {
                        return <option key={index} value={value.value} > {value.label} </option>
                    })
                }
            </select>
        </>
    )
}
