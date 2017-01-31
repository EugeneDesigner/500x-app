import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as action from '../actions/SearchActions'
import PhotoList from '../components/PhotoList'
import * as Transition from 'react-addons-css-transition-group'


export interface IAppProps {
  photos: any;
  actions: any;
  status: string;
  saved: string[];
  error: string
}




class SearchApp extends React.Component<IAppProps, undefined> {

  render() {
    const {photos, actions, status, saved, error} = this.props
    return (
      <Transition
      component="div"
      transitionName="page-animate"
      transitionAppear={true}
      transitionAppearTimeout={600}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={600}
      >
      <PhotoList actions={actions} photos={photos} status={status} saved={saved} error={error}/>
      </Transition>
    )
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos.photos,
    status: state.photos.status,
    saved: state.photos.saved,
    error: state.photos.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(action, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchApp)
