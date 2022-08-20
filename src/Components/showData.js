import React, { memo, useCallback, useReducer } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './redux/getSlice';

const ShowData = () => {
    // const { users, loading } = useSelector((state) => state.get)
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getData())

    // })
    // console.log(loading, "============")
    // const { users, loading } = useSelector((state) => state.get)
    // const dispatch = useDispatch();
    // useCallback(dispatch(getData()))
    // console.log(loading, "============")
    return (
        <div>

        </div>
    )
}

export default ShowData