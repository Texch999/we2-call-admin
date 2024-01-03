import { AgentRoutes } from "../routes/AgentRoutes";

export function isLoggedIn() {
  return localStorage.getItem("token") === null || undefined ? false : true;
}

export const setLocalStorageItems = (data) => {
  Object?.entries(data)?.map(([key, value]) =>
    localStorage?.setItem(key, value)
  );
};

export const validation = (value, method, condition) => {
  let validRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  switch (method) {
    case "empty":
      return value === "" && "This field is required";
    case "minLen":
      if (value === "") return "This field is required";
      else if (value?.length < condition)
        return `minimum ${condition} characters required`;
      break;
    case "maxLen":
      if (value === "") return "This field is required";
      else if (value?.length > condition)
        return `must not contain more ${condition} characters`;
      break;
    case "minMaxLen":
      if (value === "") return "This field is required";
      else if (value?.length < condition)
        return `minimum ${condition} characters required`;
      else if (value?.length > condition)
        return `must not contain ${condition} characters`;
      break;
    case "pattern":
      return !validRegex.test(value) && "Enter valid email";

    default:
      return false;
  }
};

export const getAllowedRoutes = (appRole) => {
  return AgentRoutes;
  // if (appRole === "User") return AgentRoutes;
  // else if (appRole === "Admin") return AdminRoutes;
};

// export const getUrlEndpoint = (appRole) => {
//   if (appRole === "User")
//     return {
//       login: USER_LOGIN,
//       upadtePassword: USER_CHANGE_PASSWORD,
//     };
//   else if (appRole === "Admin")
//     return {
//       login: ADMIN_LOGIN,
//       upadtePassword: CRM_ADMIN_UPDATE_PASSWORD,
//     };
// };

// export const getSidebar = (appRole) => {
//   if (appRole === "User") return "";
//   else if (appRole === "Admin") return AdminSidebar;
// };

// export const getAddedUser = (role) => {
//   if (role === "1") return "Super Admin";
//   else if (role === "2") return "Sub admin";
// };

export const numberColor = (value) => (+value < 0 ? "clr-red" : "clr-green");
