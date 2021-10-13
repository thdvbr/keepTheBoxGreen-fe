export interface TelemetryItemProps {
  find: any;
  id: string;
  connectionDeviceId: string;
  connectionDeviceGenerationId: string;
  enqueuedTimeUTC: string;
  temperature: number;
  humidity: number;
  eventTimestamp: Date;
  sittingTime: number;
  dustConcentration: number;
}

export interface ResponseTelemetryDataProps {
  telemetryData: Array<TelemetryItemProps>;
}
