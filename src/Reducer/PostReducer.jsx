export const initialState = [];

export const postReducer = (state, action) => {
  switch (action.type) {
    case "SET-POST":
      return [...action.payload];
    case "LIKE-COUNT":
      return [...action.payload];

    default:
      return [...state];
  }
};
