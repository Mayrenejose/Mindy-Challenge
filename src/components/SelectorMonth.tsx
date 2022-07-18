import React, { FC, useEffect, useState } from 'react';
import { selectorMonth_ } from '../helpers/types';

export const SelectorMonth: FC<selectorMonth_> = ({ handleMonth, indicador }) => {

    const [disable, setDisable] = useState(false);

    const options = [
        { value: '01', label: 'Enero' },
        { value: '02', label: 'Febrero' },
        { value: '03', label: 'Marzo' },
        { value: '04', label: 'Abril' },
        { value: '05', label: 'Mayo' },
        { value: '06', label: 'Junio' },
        { value: '07', label: 'Julio' },
        { value: '08', label: 'Agosto' },
        { value: '09', label: 'Septiembre' },
        { value: '10', label: 'Octubre' },
        { value: '11', label: 'Noviembre' },
        { value: '12', label: 'Diciembre' },
    ]

    useEffect(() => {

        switch (indicador) {

            case 'tasa_desempleo':
                setDisable(true);
                break;

            case 'imacec':
                setDisable(true);
                break;

            case 'ipc':
                setDisable(true);
                break;

            case 'utm':
                setDisable(true);
                break;
        }

    }, [indicador])

    return (
        <>
            <label>Mes</label>
            <select className="form-select" disabled={disable} aria-label="Default select example" onChange={(e) => handleMonth(e.target.value) }>
                <option key='0' value='0'>Seleccione...</option>
                {
                    options.map((value: any, index:number) => {
                        return <option key={index} value={value.value} > {value.label} </option>
                    })
                }
            </select>
        </>
    )
}
