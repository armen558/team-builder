import * as actionTypes from '../actions/actionTypes';

const initialState = {
    teams: [
        {
           id: 1,
           name: "Editor",
           topic: "Hooks",
           project: "Canvas",
           members: [
              {
                  firstName: "Name",
                  lastName: "Lname",
                  avatarUrl: "test.jpg"
              }
           ]
        },
        {
            id:2,
            name: "Editor",
            topic: "Hooks",
            project: "Canvas",
            members: [
               {
                   firstName: "Name",
                   lastName: "Lname",
                   avatarUrl: "test.jpg"
               }
            ]
         },
         {
            id: 3,
            name: "Editor",
            topic: "Hooks",
            project: "Canvas",
            members: [
               {
                   firstName: "Name",
                   lastName: "Lname",
                   avatarUrl: "test.jpg"
               }
            ]
         },
      ],
    isLoading: false,
    error: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TEAMS_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case actionTypes.FETCH_TEAMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                teams: action.payload,
                error: ''
            }
        case actionTypes.FETCH_TEAMS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload.message
            }
        default:
            return state
    };
};

export default reducer;