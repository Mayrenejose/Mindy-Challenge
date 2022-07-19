import React, { FC, useEffect, useState } from 'react';
import { selectorYears_ } from '../helpers/types';

export const SelectorYears: FC<selectorYears_> = ({ indicador, handleYears }) => {

    const [years, setYears] = useState([] as any);

    //Funcion que recibe a la fecha de inicio del indicador.
    function printYears(startYear: number) {
        let rangeNumbers = [] as any;
        setYears(rangeNumbers);
        for (let i = startYear; i <= 2022; i++) {
            rangeNumbers.push(i);
        }
    }

    useEffect(() => {

        switch (indicador) {

            case 'uf':
                printYears(1977);
                break;

            case 'libra_cobre':
                printYears(2012);
                break;

            case 'tasa_desempleo':
                printYears(2009);
                break;

            case 'euro':
                printYears(1999);
                break;

            case 'imacec':
                printYears(1997);
                break;

            case 'dolar':
                printYears(1984);
                break;

            case 'tpm':
                printYears(2001);
                break;

            case 'ivp':
                printYears(1990);
                break;

            case 'ipc':
                printYears(1928);
                break;

            case 'dolar_intercambio':
                printYears(1988);
                break;

            case 'utm':
                printYears(1990);
                break;

            case 'bitcoin':
                printYears(2009);
                break;
        }

    }, [indicador])

    return (
        <>
        <label className="form-label">Año</label>
            <select className="form-select" aria-label="Default select example" onChange={(e) => handleYears(e.target.value)}>
                <option key='0' value='0'>Seleccione...</option>
                {
                    years.map((item: any, index: number) => {
                        return <option key={index} value={item}> {item} </option>

                    })
                }
            </select>
        </>
    )
}
