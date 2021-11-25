// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import appApiClient from '../../api/appApiClient';
import { TelemetryItemProps, ResponseTelemetryDataProps } from '../../types';
import '../../App.css';
import { Rnd } from "react-rnd";
import Container from '../../components/container';
import {
  Box, Button, Tabs, TabList, TabPanels, Tab, TabPanel, Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react"

const Home = () => {
  const [telemetryData, setTelemetryData] = useState<TelemetryItemProps>([
    {
      find: "find",
      id: "okja",
      connectionDeviceId: "deviceId",
      connectionDeviceGenerationId: "generation Id",
      EventEnqueuedUtcTime: "11:15",
      EventProcessedUtcTime: "12:20",
      temperature: 23,
      humidity: 48,
      sittingTime: 61,
      dustConcentration: 120,
    }
  ]
  );
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


  const style = {
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    border: "solid 2px #ddd",
    background: "#f0f0f0",
    zIndex: 2,
    borderRadius: "10px",
    minWidth: 300,
    minHeight: 300,
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='App'>
      <Box align="right">
        <Button size="sm" onClick={toggle} sx={{ zIndex: 2 }} borderRadius="25px">
          ⚙️
        </Button>
      </Box>

      {isOpen &&
        <Rnd
          style={style}
          default={{
            x: Math.floor(Math.random() * window.innerWidth) / 2,
            y: Math.floor(Math.random() * window.innerHeight) / 2,
            width: window.innerWidth / 2,
            height: window.innerHeight / 2,
            minWidth: 300,
            minHeight: 300,
          }}
        >
          <Box w="100%">
            <Tabs>
              <TabList>
                <Tab>Current Data</Tab>
                <Tab>Mockup Data</Tab>
              </TabList>

              <TabPanels>
                {/* current data */}
                <TabPanel>
                  {telemetryData.map(
                    (telemetryItem: TelemetryItemProps, index, array) =>
                      array.length - 1 === index && (
                        <div key={index}>
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
                        </div>
                      ))}
                </TabPanel>
                <TabPanel>
                  <p>some mock up data</p>
                  <Slider aria-label="slider-ex-1" defaultValue={30}>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Rnd>
      }

      <Container />
    </div >
  );
};

export default Home;
