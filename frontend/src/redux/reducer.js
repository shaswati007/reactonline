import PLPMenu from "../components/PLPMenu";
import PDP from "../components/PDP";
import Navigation from "../components/topNavigation";

export const initialState = {
    topnavigation: Navigation,
    plpmenu: PLPMenu,
    pdpmenu : PDP
};

export const Reducer = ( state = initialState , action) => {
      return state;
};
