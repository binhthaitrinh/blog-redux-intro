import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

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

// export const fetchUser = (id) => {
//     return (dispatch) => {
//         _fetchUser(id, dispatch);
//     }
// };

// const _fetchUser = _.memoize(async(id, dispatch) => {
//     const response = await jsonPlaceholder.get(`./users/${id}`);
//         dispatch({
//             type: 'FETCH_USER',
//             payload: response.data,
//         })
// });

export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`./users/${id}`);
        dispatch ({
            type: 'FETCH_USER',
            payload: response.data,
        })
    }
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // console.log(userIds);
    // no other function after this, thus no await needed!
    userIds.forEach(id => dispatch(fetchUser(id)));


    //Refactor above code

    // _.chain(getState().posts)
    //     .map('userId')
    //     .uniq()
    //     .forEach(id => dispatch(fetchUser(id)))
    //     .value(); // value === execute

};

