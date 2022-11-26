import React, { ReactElement } from "react";
import { BaseAction } from "../../utils/models.base";
import { Announcement, AnnouncementsState as AnnouncementsState } from "./announcement.models";

const initialState: AnnouncementsState = {
  announcements: [],
  add: (_: Announcement) => { },
  reset: () => { },
};

export const AnnouncementsContext = React.createContext(initialState);

const actions = {
  ADD_ANNOUNCEMENTS: "ADD_ANNOUNCEMENTS"
};

function reducer(state: AnnouncementsState, action: BaseAction): AnnouncementsState {
  switch (action.type) {
    case actions.ADD_ANNOUNCEMENTS:
      return { ...state, announcements: [...state.announcements, action.value] }
    default:
      return state;
  }
}

export function ServicesProvider({ children }: { children: any }): ReactElement {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    ...state,
    add: (value: Announcement) => {
      dispatch({ type: actions.ADD_ANNOUNCEMENTS, value });
    },
  };

  return (
    <AnnouncementsContext.Provider value={value}>
      {children}
    </AnnouncementsContext.Provider>
  );
}
