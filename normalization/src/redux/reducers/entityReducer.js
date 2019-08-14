export default function entityReducer(state = {}, { payload }) {
  if (payload && payload.entities) {
    return {
      ...state,
      ...payload.entities
    };
  }
  return state;
}
