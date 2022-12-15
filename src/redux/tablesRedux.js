//selectors

  export const getAllTables = ({tables}) => {return tables}
  export const getTableById = ({tables}, tableId) => tables.find(table => table.id === tableId )
// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE')
// action creators
export const updateTable = payload => ({type: 'UPDATE_TABLE', payload})
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE :
      return[...action.payload]
    default:
      return statePart;
  };
};
export default tablesReducer;