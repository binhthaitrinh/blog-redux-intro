import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const response = await jsonPlaceholder.get('./posts');
        dispatch({
            type: 'FETCH_POSTS', 
            payload: response.data,
        });
        // return {
        //     type: 'FETCH_POSTS',
        //     payload: response
        // };
    };
};

export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`./users/${id}`);
        dispatch({
            type: 'FETCH_USER',
            payload: response.data,
        })
    }
}

