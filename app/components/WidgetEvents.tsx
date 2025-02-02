'use client';
import type { Route } from '@lifi/sdk';
import type {
  RouteExecutionUpdate,
  RouteHighValueLossUpdate,
} from '@lifi/widget';
import { WidgetEvent, useWidgetEvents } from '@lifi/widget';
import { useEffect } from 'react';

export const WidgetEvents = () => {
  const widgetEvents = useWidgetEvents();

  useEffect(() => {
    const onRouteExecutionStarted = (route: Route) => {
      console.log('onRouteExecutionStarted fired with route:', route);
    };
    const onRouteExecutionUpdated = (update: RouteExecutionUpdate) => {
      console.log('onRouteExecutionUpdated fired with update:', update);
    };
    const onRouteExecutionCompleted = (route: Route) => {
      console.log('onRouteExecutionCompleted fired with route:', route);
    };
    const onRouteExecutionFailed = (update: RouteExecutionUpdate) => {
      console.log('onRouteExecutionFailed fired with update:', update);
    };
    const onRouteHighValueLoss = (update: RouteHighValueLossUpdate) => {
      console.log('onRouteHighValueLoss fired with update:', update);
    };

    widgetEvents.on(WidgetEvent.RouteExecutionStarted, onRouteExecutionStarted);
    widgetEvents.on(WidgetEvent.RouteExecutionUpdated, onRouteExecutionUpdated);
    widgetEvents.on(
      WidgetEvent.RouteExecutionCompleted,
      onRouteExecutionCompleted,
    );
    widgetEvents.on(WidgetEvent.RouteHighValueLoss, onRouteHighValueLoss);
    widgetEvents.on(WidgetEvent.RouteExecutionFailed, onRouteExecutionFailed);

    return () => {
      widgetEvents.all.clear();
    };
  }, [widgetEvents]);

  return null;
};
