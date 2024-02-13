import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
export const requireAuth = (ComposedComponent) => {
  // ComposedComponent : passed components (i.e <DashBoard/>)

  const RequireAuth = (props) => {
    const authenticated = useSelector(
      (state) => state.authentication.authenticated
    );

    // authentication : from root actions.jsx (like == import * as authentication from here )

    if (!authenticated) {
      navigate("/"); //"/login"
    } else {
      return <ComposedComponent {...props} />;
    }
  };

  return RequireAuth;
};

// useSelector : A function that takes a selector function as its first argument. The selector function is responsible for selecting a part of the Redux store's state or computing derived data.
