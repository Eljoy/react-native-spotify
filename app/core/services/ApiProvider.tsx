import React, { ReactNode } from 'react';
import { Api } from '../types/Api';
import { ApiService } from '../index';

const ApiContext = React.createContext(ApiService);

export interface WithApiProps {
  api: Api;
}

function withApi<P>(Component: React.ComponentType<P & WithApiProps>) {
  return (props: P) => (
    <ApiContext.Consumer>
      {(api: Api) => <Component {...props} api={api} />}
    </ApiContext.Consumer>
  );
}

interface ApiProviderProps {
  api: Api;
  children: ReactNode;
}

const ApiProvider = ({ api, ...props }: ApiProviderProps) => (
  <ApiContext.Provider value={api} {...props} />
);

export { ApiProvider, withApi };
