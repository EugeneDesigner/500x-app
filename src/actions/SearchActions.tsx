import * as types from '../constants/SearchActionTypes'
import * as photoSearch from '../api/PhotoSearch'

function searchWithPhotoAPI(keyword: string, page: number, dispatch) {
  if (page >= 2) {
    dispatch({
      type: types.SEARCH_PENDING_FOR_NEXT,
    })
  } else {
    dispatch({
      type: types.SEARCH_PENDING,
    })
  }

  photoSearch(keyword, page, (data) => {
    if (typeof data === 'string') {
      dispatch({
        type: types.ERROR_OCCURED,
        error: data,
        page
      })
    } else {
    dispatch({
      type: types.SEARCH_DONE,
      photos: data.photos,
      page,
      keyword,
      error: ''
    });
  }
  });
}

export function searchNextPageAction() {
  return (dispatch, getState) =>{
    const page = getState().photos.page + 1;
    const keyword = getState().photos.keyword;
    searchWithPhotoAPI(keyword, page, dispatch);
  };
}

export function searchPhotoAction(keyword, page = 1) {
  return (dispatch) => {
    searchWithPhotoAPI(keyword, page, dispatch);
  };
}

export function savePhotoAction(saved) {
  return ({
    type: types.SAVE_PHOTOS,
    saved
  })
}

export function deletePhotoAction(deleted) {
  return ({
    type: types.DELETE_PHOTOS,
    saved: deleted
  })
}
