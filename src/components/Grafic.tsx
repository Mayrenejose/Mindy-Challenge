import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import { grafic_ } from '../helpers/types';
import { Loanding } from '../helpers/Loanding';


export const Grafic: FC<grafic_> = ({ indicador, yearSelect, monthSelect }) => {

    const [getData, setgetData] = useState([] as any);
    const [getSerie, setgetSerie] = useState([] as any);
    const [date, setDate] = useState([] as any);
    const [worth, setWorth] = useState([] as any);
    const [loander, setLoander] = useState(false);
    //console.log(date);
    //console.log(monthSelect);

    /* const prueba = date[0].slice(5,7)
    console.log(prueba); */

    useEffect(() => {
        if (indicador === 'tasa_desempleo') {
            getDataGrafic();
            monthSelect = '';
        } else if (indicador === 'imacec') {
            getDataGrafic();
            monthSelect = '';
        } else if (indicador === 'ipc') {
            getDataGrafic();
            monthSelect = '';
        } else if (indicador === 'utm') {
            getDataGrafic();
            monthSelect = '';
        }
        else { }
    }, [yearSelect])

    useEffect(() => {
        if (indicador === 'tasa_desempleo') {

        } else if (indicador === 'imacec') {

        } else if (indicador === 'ipc') {

        } else if (indicador === 'utm') {

        }
        else { getDataGrafic(); }

    }, [monthSelect])


    const getDataGrafic = () => {
        setLoander(true);
        axios({
            method: 'get',
            url: (`https://mindicador.cl/api/${indicador}/${yearSelect}`),
        })
            .then((response) => {
                setgetData(response.data);
                setgetSerie(response.data.serie);
                setLoander(false);
            }).catch((error) => {
                setLoander(false);
            })
    }

    //Filtrado de data
    const filteringData = () => {
        let datesFull = [] as any;
        setDate(datesFull);

        let worthFull = [] as any;
        setWorth(worthFull);

        getSerie.filter((itens: any) => {
            if (monthSelect === '') {
                worthFull.push(itens.valor);
                datesFull.push(itens.fecha);
            } else if (monthSelect) {            
                return itens.fecha.slice(5,7) === monthSelect;
            }
        }).map((iten: any) => {
            worthFull.push(iten.valor);
            datesFull.push(iten.fecha);
        })
    }

    useEffect(() => {
        filteringData();
    }, [getSerie])


    return (
        <>
            <div className='d-flex justify-content-center'>
                {loander ?
                    <Loanding /> :
                    <Plot
                        data={[
                            {
                                x: [...date],
                                y: [...worth],
                                type: 'scatter',
                                mode: 'lines',
                                marker: { color: 'red' },
                            },
                        ]}
                        layout={{ width: 700, height: 500, title: getData.nombre + ' de ' + yearSelect, yaxis: { title: 'Valor en ' + getData.unidad_medida } }}
                    />
                }
            </div>
        </>
    )
}

