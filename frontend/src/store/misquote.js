import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config"

const slice = createSlice({
  name: "misquote",
  initialState: [],
  reducers:  {
    getAllMisquotes : (posts, action) => {
      return action.payload
    },
    getMisquoteByMisquoteId : (posts, action) => {
      posts.push(action.payload)
    }
  }
})

export const {getMisquoteByMisquoteId, getAllMisquotes} = slice.actions

export const fetchAllMisquotes = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/misquote`)
  dispatch(getAllMisquotes(data))
}

export default slice.reducer


