const METHOD = {
  get: "get",
  post: "post",
  delete: "delete",
  put: "put",
};

const HOST = {
  address: "https://dev-api.nomini.io",
 // port: 443,
};

const FE_PATH = {
  main: "/",
  auth: {
    signin: "/auth/login",
    signup: "/auth/signup",
  },

//   mypage: {
//     mypage: "/mypage",
//     certificate: "/certificate",
//   },
//   course: {
//     upload: "/course/upload",
//     list: "/course/list",
//     view: "/course/view",
//   },
};

const BE_PATH = {};

export { BE_PATH, FE_PATH, HOST, METHOD };
