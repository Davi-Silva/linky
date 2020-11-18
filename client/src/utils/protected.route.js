import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import _ from 'lodash';

const mapStateToProps = (state) => {
  const { user } = state;

  return {
    user
  }
}

const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (
            !_.isEmpty(rest.user.data) &&
            !rest.user.loading &&
            !rest.user.error &&
            rest.user.fetched
          ) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export default connect(mapStateToProps)(ProtectedRoute)