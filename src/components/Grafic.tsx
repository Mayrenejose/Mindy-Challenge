import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import { grafic_ } from '../helpers/types';
import moment from 'moment';
moment.locale('es');

export const Grafic: FC<grafic_> = ({ indicador, yearSelect, monthSelect }) => {

    const [getData, setgetData] = useState([] as any);
    const [getSerie, setgetSerie] = useState([] as any);
    const [date, setDate] = useState('');
    //console.log(date);
    //console.log(getSerie);


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

    const transformDate = () => {
        getSerie.map((item: any, index: any) => {
            let fecha = moment(item.fecha).format("DD-MM-YYYY");
            setDate(fecha)
        })
    }

    const filterDate = (yearSelect: string, monthSelect: string) => {
        console.log(yearSelect, monthSelect);

    }


    useEffect(() => {
        transformDate();
        filterDate(yearSelect, monthSelect);
    }, [getSerie])

    return (
        <div>
            <Plot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'red' },
                    },
                    //{ type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                ]}
                layout={{ width: 320, height: 240, title: getData.nombre, yaxis: { title: 'Valor en ' + getData.unidad_medida } }}
            />
        </div>
    )
}
