import React from 'react';
import { RNMUContext } from './rnmu-context';
import { useRNMUEvents } from './use-rnmu-events';
import { useRNMUState } from './use-rnmu-state';

export const RNMUProvider = ({ children }: { children: React.ReactNode }) => {
  const state = useRNMUState();

  useRNMUEvents(state);

  return <RNMUContext.Provider value={state}>{children}</RNMUContext.Provider>;
};
