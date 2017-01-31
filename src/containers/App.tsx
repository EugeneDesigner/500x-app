import * as React from 'react'
import { Link } from 'react-router'

export interface IAppProps {
  children: any;
}

export default class App extends React.Component<IAppProps, undefined> {
  render() {
    return (
      <div>  
        {this.props.children}
        <footer>
          <Link to='/search' activeClassName="active"> <div className="main"></div></Link>
          <Link to='/favourites' activeClassName="active"> <div className="favourites"></div></Link>
        </footer>
      </div>
    )
  }
}
