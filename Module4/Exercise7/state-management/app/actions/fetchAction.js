export const FETCH_INITIATE = "FETCH_INITIATE";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetch_initiate = () => ({ type: FETCH_INITIATE });
export const fetch_success = (quotes) => ({ type: FETCH_SUCCESS, payload: quotes });
export const fetch_failure = (error) => ({ type: FETCH_FAILURE, payload: error });

export const fetchQuotes = () => {
  return async (dispatch) => {
    dispatch(fetch_initiate());
    try {
      const res = await fetch("https://dummyjson.com/quotes9990");
      const data = await res.json();
      dispatch(fetch_success(data.quotes));
    } catch (error) {
      dispatch(fetch_failure(error.message));
    }
  };
};
