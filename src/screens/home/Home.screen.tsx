import React, { useState, useEffect } from 'react';
import appApiClient from '../../api/appApiClient';
import { TelemetryItemProps, ResponseTelemetryDataProps } from '../../types';
import '../../App.css';

const Home = () => {
    const [telemetryData, setTelemetryData] = useState<TelemetryItemProps[]>([]);
    const fetchData = async () => {
      try {
        const response = await appApiClient.get<ResponseTelemetryDataProps>('/');
        setTelemetryData(response.data.telemetryData);
      } catch (e) {
        console.error(e);
      }
    };
    
    useEffect(() => {
      fetchData();
    }, []);

    return (
        <div className='App'>
        {telemetryData &&
          telemetryData.map((telemetryItem: TelemetryItemProps) => (
            <>
              <div>date: {telemetryItem.eventTimestamp}</div>
              <div>sitting time: {telemetryItem.sittingTime}</div>
              <div>temperature: {telemetryItem.temperature}</div>
              <div>humidity: {telemetryItem.humidity}</div>
              <div>dust concentration: {telemetryItem.dustConcentration}</div>
              <br />
            </>
          ))}
      </div>
    )
}

export default Home;