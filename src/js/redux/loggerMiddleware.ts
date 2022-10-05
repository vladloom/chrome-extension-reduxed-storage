import { Middleware } from 'redux';

const loggerMiddleware: Middleware = ({ getState }) => {
  return next => action => {
    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    console.log('redux-action: ', action, 'state after dispatch: ', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
};

export default loggerMiddleware;
