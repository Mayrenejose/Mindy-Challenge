import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import { grafic_ } from '../helpers/types';
import { Loanding } from '../helpers/Loanding';
import moment from 'moment';
moment.locale('es');

export const Grafic: FC<grafic_> = ({ indicador, yearSelect, monthSelect }) => {

    const [getData, setgetData] = useState([] as any);
    const [getSerie, setgetSerie] = useState([] as any);
    const [date, setDate] = useState([] as any);
    const [filterDate, setfilterDate] = useState([] as any);
    const [worth, setWorth] = useState([] as any);
    const [loander, setLoander] = useState(false);

    useEffect(() => {
        if (indicador === 'tasa_desempleo') {
            getDataGraficDisabled();
        } else if (indicador === 'imacec') {
            getDataGraficDisabled();
        } else if (indicador === 'ipc') {
            getDataGraficDisabled();
        } else if (indicador === 'utm') {
            getDataGraficDisabled();
        }
        else { }
    }, [yearSelect])

    useEffect(() => {
        if (indicador === 'tasa_desempleo') {

        } else if (indicador === 'imacec') {

        } else if (indicador === 'ipc') {

        } else if (indicador === 'utm') {

        }
        else { getDataGraficDisabled(); }

    }, [monthSelect])


    const getDataGraficDisabled = () => {
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
                console.log(error);
            })
    }

    //Funcion que mapea la data para pasarlo a los state 
    const transformDate = () => {
        let worthFull = [] as any;
        setWorth(worthFull);

        getSerie.map((item: any) => {
            worthFull.push(item.valor);
        })
    }

    //filtrar la data por el mes seleccionado
    const filteringData = () => {
        let datesFull = [] as any;
        setDate(datesFull);

        let filter_ = getSerie.filter((itens: any) => itens.fecha[6] === monthSelect)
        setfilterDate(filter_)


        filterDate.map((items: any) => {
            datesFull.push(items.fecha);
        })

    }

    useEffect(() => {
        transformDate();
        filteringData();
    }, [getSerie, monthSelect])

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
