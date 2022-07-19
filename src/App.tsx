import React, { useState } from 'react';
import { Indicator } from '../src/components/Indicator';
import { SelectorYears } from '../src/components/SelectorYears';
import { SelectorMonth } from '../src/components/SelectorMonth';
import { Grafic } from './components/Grafic';

export const App = () => {

  const [indicatorSelect, setIndicatorSelect] = useState('');
  const handleIndicator = (val: any) => { setIndicatorSelect(val) };

  const [yearSelect, setYearSelect] = useState('');
  const handleYears = (val: any) => { setYearSelect(val) };

  const [monthSelect, setMontSelect] = useState('');
  const handleMonth = (val: any) => { setMontSelect(val) };


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="d-flex justify-content-evenly">

            <div>
              <Indicator
                handleIndicator={handleIndicator}
              />
            </div>&nbsp;&nbsp;

            <div>
              <SelectorYears
                indicador={indicatorSelect}
                handleYears={handleYears}
              />
            </div>&nbsp;&nbsp;

            <div>
              <SelectorMonth
                handleMonth={handleMonth}
                indicador={indicatorSelect}
              />
            </div>

          </div>
        </div>
      </nav>

      <div>
        <Grafic
          indicador={indicatorSelect}
          yearSelect={yearSelect}
          monthSelect={monthSelect}
        />
      </div>
    </>
  )
}
