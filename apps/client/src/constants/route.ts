const route = {
  home: {
    index: "/",
  },
  auth: {
    login: {
      label: "로그인",
      index: "/auth/login",
    },
    register: {
      label: "회원가입",
      index: "/auth/register",
    },
  },
  pick: {
    create: {
      label: "Pick 생성",
      index: "/pick/create",
    },
    edit: {
      label: "Pick 수정",
      index: "/pick/edit/:id",
    },
  },
};

export default route;
