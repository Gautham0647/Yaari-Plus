export const initialState = [];

export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET-USER":
      return [...action.payload];
    case "FOLLOW-USER":
      return [...action.payload];
      case "UNFOLLOW-USER":
        return [...action.payload];

    default:
      return [...state];
  }
};
