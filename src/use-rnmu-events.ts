import { useEffect } from 'react';
import { RNMUContextState } from './types';
import { RNMU_EVENTS, modalsEventEmitter } from './events';

export const useRNMUEvents = (ctx: RNMUContextState) => {
  const events = {
    open: (event: any) => ctx.openModal(event.detail),
    close: (event: any) => ctx.closeModal(event.detail),
  };

  useEffect(() => {
    const listeners = (Object.keys(events) as (keyof typeof events)[]).map(
      event => {
        return modalsEventEmitter.addListener(
          RNMU_EVENTS[event],
          events[event]
        );
      }
    );
    return () => {
      listeners.forEach(listener => listener.remove());
    };
  }, []);
};
