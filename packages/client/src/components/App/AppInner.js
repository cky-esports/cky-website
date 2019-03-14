import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { updateScrollPos as reduxUpdateScrollPos } from 'client-redux/actions';
import { ROUTES } from 'client-misc/constants';

const mapDispatchToProps = dispatch => ({
  updateScrollPos: scrollPos => dispatch(reduxUpdateScrollPos(scrollPos)),
});

const AppInner = ({ updateScrollPos }) => {
  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;

    updateScrollPos(scrollTop === 0);
  }, [updateScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [handleScroll]);

  return (
    <Router>
      <Switch>
        {ROUTES.map(({ label, path, ...others }) => (
          <Route {...others} path={path} key={`AppInner-Route-${path}`} />
        ))}
      </Switch>
    </Router>
  );
};

AppInner.propTypes = {
  /**
   * @ignore
   */
  updateScrollPos: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(AppInner);
