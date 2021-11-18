export interface TelemetryItemProps {
  find: any;
  id: string;
  connectionDeviceId: string;
  connectionDeviceGenerationId: string;
  EventEnqueuedUtcTime: string;
  EventProcessedUtcTime: string;
  temperature: number;
  humidity: number;
  sittingTime: number;
  dustConcentration: number;
}

export interface ResponseTelemetryDataProps {
  telemetryData: Array<TelemetryItemProps>;
}
