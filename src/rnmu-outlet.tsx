import React, { Fragment, useContext, useEffect } from 'react';
import { RNMUContext } from './rnmu-context';

export const RNMUOutlet = ({ outletId = 'rnmu-default-outlet' }) => {
  const ctx = useContext(RNMUContext);

  if (!ctx) {
    throw new Error('RNMUProvider not found in components three');
  }

  const { outlets, addOutlet, removeOutlet } = ctx;

  useEffect(() => {
    addOutlet(outletId);
    return () => {
      removeOutlet(outletId);
    };
  }, []);

  const modals = outlets[outletId] ?? {};

  return (
    <>
      {Object.entries(modals).map(([modalId, modalComponent]) => (
        <Fragment key={modalId}>{modalComponent}</Fragment>
      ))}
    </>
  );
};

export default RNMUOutlet;
