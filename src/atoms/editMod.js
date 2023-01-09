import { atom } from "recoil";

export const editModalState = atom({
  key: "createModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const editInfoStateId = atom({
  key: "editInfoStateId", // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const newDataReload = atom({
  key: "newDataReload", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

