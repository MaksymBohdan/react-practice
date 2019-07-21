const getItems = state => state.notes.items;
const getFilter = state => state.notes.filter;

const getVibleNotes = state => {
  const filter = getFilter(state).toLowerCase();
  const items = getItems(state);

  return items.filter(el => el.text.toLowerCase().includes(filter));
};

export default { getItems, getFilter, getVibleNotes };
