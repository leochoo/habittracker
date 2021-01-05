export const addClip = ({ clip }) => {
    return {
        type: 'ADD_CLIP',
        clip, // payload,
    };
};

export const deleteClip = ({ clip }) => {
    return {
        type: 'DELETE_CLIP',
        clip, // payload,
    };
};
