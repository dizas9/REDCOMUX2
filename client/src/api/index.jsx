// import { User } from "../store/actions/user";

import http from "../services/httpService";

const postUser = (user) => http.post("/auth/register", user);

export { postUser };
