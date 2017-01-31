import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as action from '../actions/SearchActions'
import FavouriteList from '../components/FavouriteList'
import * as Transition from 'react-addons-css-transition-group'

export interface IAppProps {
  saved: string[];
  actions: any;
}

class FavouriteApp extends React.Component<IAppProps, any> {

  render() {
    const {actions, saved} = this.props
    return (
      <Transition
      component="div"
      transitionName="page-animate"
      transitionAppear={true}
      transitionAppearTimeout={600}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={600}
      >
          <FavouriteList actions={actions} saved={saved}/>
      </Transition>
    );
  }
}


function mapStateToProps(state) {
  return {
    saved: state.photos.saved
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
)(FavouriteApp)
