export const initialState = [];

export const bookmarkReducer = (state, action) => {
  switch (action.type) {
    case "ADD-TO-BOOKMARK":
      return [...action.payload];

    default:
      return [...state];
  }
};
