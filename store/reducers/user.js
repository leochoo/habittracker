const initialState = {
    clips: [],
};

const reducer = (state = initialState, action) => {
    // gets previous state and action
    switch (action.type) {
        case 'ADD_CLIP':
            return {
                ...state,
                clips: [...state.clips, action.clip], // [old state, clip to add this time] 즉, 이전에 있던 리스트 마지막에 이번에 들어온 클립을 추가해서 리턴해줌
            };
        case 'DELETE_CLIP':
            return {
                ...state,
                clips: state.clips.filter(
                    (clip) => clip.url !== action.clip.url
                ), // only return the values of clips that are not matching what is sent this time
            };
        default:
            return state;
    }
};

export default reducer;
