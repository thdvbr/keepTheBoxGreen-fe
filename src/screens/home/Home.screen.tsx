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
          <div key={telemetryItem.id}>
            <div>
              date: {telemetryItem.EventEnqueuedUtcTime.substring(0, 10)}
            </div>
            <div>
              time: {telemetryItem.EventEnqueuedUtcTime.substring(11, 19)}
            </div>
            <div>sitting time: {telemetryItem.sittingTime}</div>
            <div>temperature: {telemetryItem.temperature}</div>
            <div>humidity: {telemetryItem.humidity}</div>
            <div>dust concentration: {telemetryItem.dustConcentration}</div>
            <br />
          <div/>
        ))}
    </div>
  );
};

export default Home;
