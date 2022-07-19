import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import { grafic_ } from '../helpers/types';
import moment from 'moment';
moment.locale('es');

export const Grafic: FC<grafic_> = ({ indicador, yearSelect, monthSelect }) => {

    const [getData, setgetData] = useState([] as any);
    const [getSerie, setgetSerie] = useState([] as any);
    const [date, setDate] = useState([] as any);
    const [worth, setWorth] = useState([] as any);

    useEffect(() => {
        getDataGrafic();
    }, [monthSelect])

    const getDataGrafic = () => {
        axios({
            method: 'get',
            url: (`https://mindicador.cl/api/${indicador}/${yearSelect}`)
        })
            .then((response) => {
                setgetData(response.data);
                setgetSerie(response.data.serie)
            }).catch(console.log)
    }
    //Funcion que mapea la data para pasarlo a los state y cambia el formato de la fecha
    const transformDate = () => {
        let datesFull = [] as any;
        setDate(datesFull);

        let worthFull = [] as any;
        setWorth(worthFull);

        getSerie.map((item: any, index: any) => {
            let fecha = moment(item.fecha).format("MMMM D , YYYY");
            datesFull.push(fecha);

            worthFull.push(item.valor);
        })
    }

    useEffect(() => {
        transformDate();
    }, [getSerie])

    return (
        <div className='d-flex justify-content-center'>
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
                layout={{ width: 700, height: 500, title: getData.nombre + ' de ' + monthSelect + ' de ' + yearSelect,  yaxis: { title: 'Valor en ' + getData.unidad_medida } }}
            />
        </div>
    )
}
