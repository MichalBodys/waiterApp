//selectors

  export const getAllTables = ({tables}) => {return tables}

// actions
const createActionName = actionName => `app/tables/${actionName}`;

// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};
export default tablesReducer;