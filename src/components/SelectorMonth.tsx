import React, { FC, useEffect, useState } from 'react';
import { selectorMonth_ } from '../helpers/types';

export const SelectorMonth: FC<selectorMonth_> = ({ handleMonth, indicador }) => {

    const [disable, setDisable] = useState(false);

    const options = [
        { value: 'Enero', label: 'Enero' },
        { value: 'Febrero', label: 'Febrero' },
        { value: 'Marzo', label: 'Marzo' },
        { value: 'Abril', label: 'Abril' },
        { value: 'Mayo', label: 'Mayo' },
        { value: 'Junio', label: 'Junio' },
        { value: 'Julio', label: 'Julio' },
        { value: 'Agosto', label: 'Agosto' },
        { value: 'Septiembre', label: 'Septiembre' },
        { value: 'Octubre', label: 'Octubre' },
        { value: 'Noviembre', label: 'Noviembre' },
        { value: 'Diciembre', label: 'Diciembre' },
    ]

    useEffect(() => {       
        if (indicador === 'tasa_desempleo') {
            setDisable(true);
        }
        else if (indicador === 'imacec') {
            setDisable(true);
        }
        else if (indicador === 'ipc') {
            setDisable(true);
        }
        else if (indicador === 'utm') {
            setDisable(true);
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
