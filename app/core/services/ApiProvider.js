import React from "react";
import Api from "../types/Api";
import { Children } from "../index";

const ApiContext = React.createContext();

function withApi(Component) {
  return (props) => (
    <ApiContext.Consumer>
      {api => (
        <Component
          {...props}
          api={api}
        />
      )}
    </ApiContext.Consumer>
  );
}

const ApiProvider = ({ api, children }) => (
  <ApiContext.Provider value={api}>
    {children}
  </ApiContext.Provider>
);

ApiProvider.propTypes = {
  api: Api.isRequired,
  children: Children
};

ApiProvider.defaultProps = {
  children: null
};

export { ApiProvider, withApi };
