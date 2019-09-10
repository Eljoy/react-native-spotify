import React, { ProviderProps } from 'react';
import { Api } from './types';

const ApiContext = React.createContext<Api | undefined>(undefined);

export function useApi(): Api {
  const api = React.useContext(ApiContext);
  if (api === undefined) {
    throw new Error('useApi must be used within a ApiProvider');
  }
  return api;
}

export const ApiProvider = ({ value, ...props }: ProviderProps<Api>) => (
  <ApiContext.Provider value={value} {...props} />
);
