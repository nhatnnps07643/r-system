/** When your routing table is too long, you can split it into small modules**/
const userRouter = {
  path: "/users",
  component: () => import("@/views/user/index"),
  children: [
    {
      path: "",
      name: "user-show-all",
      component: () => import("@/views/user/user-list")
    },
    {
      path: ":id",
      name: "user-info",
      component: () => import("@/views/user/user-info")
    },
    {
      path: ":id/edit-profile",
      name: "user-edit-profile",
      component: () => import("@/views/user/user-edit-profile")
    }
  ]
};

export default userRouter;
