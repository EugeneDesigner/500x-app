import * as types from '../constants/SearchActionTypes'

const initialState = {
  status: 'IDLE',
  photos: [],
  saved: [],
  error: '',
  page: 0,
  keyword: 'popular'
}

function searchPhotos(state = initialState, action) {
  switch (action.type) {
  case types.SEARCH_DONE:
    return {
      ...state,
      photos: [...state.photos, ...action.photos],
      status: 'DONE',
      page: action.page,
      keyword: action.keyword,
      error: ''
    }
  case types.SEARCH_PENDING_FOR_NEXT:
    return {
      ...state,
      status: 'PENDING_FOR_NEXT',
    }
  case types.SEARCH_PENDING:
    return {
      ...state,
      photos: [],
      status: 'PENDING',
    }
  case types.SAVE_PHOTOS:

    return {
      ...state,
      saved: action.saved
    }
  case types.DELETE_PHOTOS:
    return {
      ...state,
      saved: action.saved
    }
  case types.ERROR_OCCURED:
    return {
      ...state,
      error: action.error,
      status: 'FAILED',
      page: action.page
    }
  default:
    return state;
  }
}

export default searchPhotos
