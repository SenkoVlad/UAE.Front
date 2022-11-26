import { TreeSelectSelectionKeys } from "primereact/treeselect";
import { createContext, ReactElement, useReducer } from "react";
import { BaseAction } from "../../utils/models.base";
import { Category, FiltersState } from "./filters.models";

const initialState: FiltersState = {
  categories: [],
  addCategories: (_: Category[]) => { },
  selectCategory: (_: TreeSelectSelectionKeys) => { },
  setSearchText: (_: string) => { },
};

export const FiltersContext = createContext(initialState);

const actions = {
  ADD_CATEGORIES: "ADD_CATEGORIES",
  SELECT_CATEGORY: "SELECT_CATEGORY",
  SET_SEARCH: "SET_SEARCH"
};

function reducer(state: FiltersState, action: BaseAction): FiltersState {
  switch (action.type) {
    case actions.ADD_CATEGORIES:
      return { ...state, categories: action.value }
    case actions.SELECT_CATEGORY:
      return { ...state, selectedCategory: action.value }
    case actions.SET_SEARCH:
      return { ...state, searchText: action.value }
    default:
      return state;
  }
}

export function FiltersProvider({ children }: { children: any }): ReactElement {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value: FiltersState = {
    ...state,
    addCategories: (value: Category[]) => {
      dispatch({ type: actions.ADD_CATEGORIES, value });
    },
    selectCategory: (value: TreeSelectSelectionKeys) => {
      dispatch({ type: actions.SELECT_CATEGORY, value });
    },
    setSearchText: (value: string) => {
      dispatch({ type: actions.SET_SEARCH, value });
    },
  };

  return (
    <FiltersContext.Provider value={value}>
      {children}
    </FiltersContext.Provider>
  );
}
