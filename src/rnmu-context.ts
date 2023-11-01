import { createContext } from 'react';
import { RNMUContextState } from './types';

export const RNMUContext = createContext<RNMUContextState | null>(null);
