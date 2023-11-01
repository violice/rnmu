import { ReactNode } from 'react';
import { RNMUContextState } from './types';
import { NativeEventEmitter } from 'react-native';

export const RNMU_EVENTS = {
  open: 'rnmu:open-modal',
  close: 'rnmu:close-modal',
} as const;

export const modalsEventEmitter = new NativeEventEmitter();

export const openModal = (
  modalComponent: ReactNode,
  config: { outletId?: string } = {}
) => {
  const modalId = `rnmu-modal-${new Date().getTime().toString()}`;
  const { outletId = 'rnmu-default-outlet' } = config;
  modalsEventEmitter.emit(RNMU_EVENTS.open, {
    modalId,
    modalComponent,
    outletId,
  });
  return { modalId, outletId };
};

export const closeModal: RNMUContextState['closeModal'] = ({
  modalId,
  outletId,
}) => {
  modalsEventEmitter.emit(RNMU_EVENTS.close, {
    modalId,
    outletId,
  });
};
