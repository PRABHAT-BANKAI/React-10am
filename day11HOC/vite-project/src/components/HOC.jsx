import React from "react";

const HOC = ( WrappedComponent ) => {
  return function enhanceComponent({isLoading, ...props}) {
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default HOC;
