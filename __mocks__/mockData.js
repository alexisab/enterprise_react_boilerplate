export const adminList = {
  admins: [
    {
      id: 1,
      name: "admin1",
      email: "admin1@eg.com",
      designation: null,
      status: "active",
      admin: true,
      super_admin: false,
      errors: []
    },
    {
      id: 2,
      name: "admin2",
      email: "admin2@eg.com",
      designation: null,
      status: "invited",
      admin: true,
      super_admin: false,
      errors: []
    }
  ]
};

export const userList = {
  users: [
    {
      id: 1,
      name: "user1",
      email: "user1@eg.com",
      designation: null,
      status: "active",
      admin: false,
      super_admin: false,
      errors: []
    },
    {
      id: 2,
      name: "user2",
      email: "user2@eg.com",
      designation: null,
      status: "active",
      admin: false,
      super_admin: false,
      errors: []
    }
  ]
};

export const admin = adminList.admins[0];
export const user = userList.users[0];

export const sendInviteMutate = {
  sendInviteMutate: jest
    .fn()
    .mockReturnValueOnce(Promise.resolve({ data: { sendInvite: admin } }))
};

export const addAdminMutate = {
  mutate: jest
    .fn()
    .mockReturnValueOnce(Promise.resolve({ data: { addAdmin: admin } }))
};

export const createUserMutate = {
  mutate: jest
    .fn()
    .mockReturnValueOnce(Promise.resolve({ data: { create_user: user } }))
};

export const forgetPasswordMutate = {
  mutate: jest.fn().mockReturnValueOnce()
};

export const resetForgotPasswordMutate = {
  mutate: jest
    .fn()
    .mockReturnValueOnce(
      Promise.resolve({ data: { resetForgotPassword: user } })
    )
};

export const authenticateUserMutate = {
  mutate: jest
    .fn()
    .mockReturnValueOnce(Promise.resolve({ data: { authenticate: user } }))
};

const mockData = {
  admins: adminList,
  sendInvite: sendInviteMutate,
  authenticateUser: authenticateUserMutate,
  addAdmin: addAdminMutate,
  createUser: createUserMutate,
  forgetPassword: forgetPasswordMutate,
  resetForgotPassword: resetForgotPasswordMutate
};

export default mockData;
