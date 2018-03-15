import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './styles.scss';

import Footer from './../Footer';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Fragment>
        <Component {...matchProps} />
        <Footer />
      </Fragment>
    )}
  />
);

export default DefaultLayout;
