import { bindActionCreators } from "redux";

import * as authentication from "./containers/Store Front/withAuthentication/actions";
import * as signup from "./containers/Store Front/User Registration/actions";

export default function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...authentication,
      ...signup,
    },
    dispatch
  );
}
