import * as React from 'react'
import { browserHistory } from 'react-router'


export default class PhotoList extends React.Component<any, any>{
  constructor(props: any) {
    super(props)
    this.state = {
      selected: this.props.saved,
      clicked: false,
      loaded: false,
      error: this.props.error
      }
    this.loadNextPhotos = this.loadNextPhotos.bind(this)
    this.addImage       = this.addImage.bind(this)
    this.hoverImage    = this.hoverImage.bind(this)
    this.savePhotos    = this.savePhotos.bind(this)
    this.retryConnection = this.retryConnection.bind(this)
  }


  componentDidMount() {
      window.addEventListener('scroll', this.loadNextPhotos)
      this.props.actions.searchPhotoAction('popular')


  }
  componentWillUnmount() {
      window.removeEventListener('scroll', this.loadNextPhotos)
  }
  loadNextPhotos() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.state.loaded) {
        this.props.actions.searchNextPageAction()
        this.setState({loaded: true})
    }
  }

  componentWillReceiveProps() {
    this.setState({loaded: false})
  }

  addImage(e) {
      if (!this.state.clicked) {
        this.setState({
          clicked: true
        })
      }
      let photo = e.target.src || e.target.parentElement.children[3].src
      if (this.state.selected.length >=1 && this.state.selected.includes(photo)) {
        let newList = this.state.selected.filter((i) => {
          return i != photo
        })
        e.target.parentElement.classList.remove('chosen')
        e.target.parentElement.classList.add('choose')
        this.setState({
          selected: newList
        })
      } else {
        e.target.parentElement.classList.add('chosen')
        this.setState({
          selected: this.state.selected.concat([photo])
      })

    }
  }

  hoverImage(e) {
    if (!this.state.selected.includes(e.target.src || e.target.parentElement.children[3].src)) {
      if (e.type == "mouseover") {
        e.target.parentElement.classList.add('choose')
      } else {
        e.target.parentElement.classList.remove('choose')
      }
    } else {
      e.target.parentElement.classList.remove('choose')
    }
  }

  savePhotos(e) {
    this.props.actions.savePhotoAction(this.state.selected)
    browserHistory.push('/favourites')
  }

  retryConnection(e) {
    setTimeout(()=>{this.props.actions.searchNextPageAction()}, 1000)
  }



  render() {
    return (
      <div>
        <div className="header">{this.state.selected.length >= 1 && this.state.clicked ?
          <div className="header__selected">
            <p>X {this.state.selected.length} Selected</p>
            <p onClick={this.savePhotos}>Save</p>
          </div>
          : <div className="header__initial"> <p className="header__selected--title">Top photos</p></div>}</div>
        <div className="row photos">
          {
              this.props.photos.map((item, index) => {
                return (
                  <div onClick={this.addImage}
                      className={this.state.selected.includes(item.image_url) && this.state.clicked ? "image-item chosen" : "image-item"}
                      id={`PhotoItem_${item.id}_${index}`} key={`PhotoItem_${item.id}_${index}`}
                      onMouseOver={this.hoverImage}
                      onMouseLeave={this.hoverImage} >
                    <div className="icon__minus"></div>
                    <div className="icon__choose"></div>
                    <div className="icon__background"></div>
                    <img src={item.image_url}/>
                  </div>
                );
              })
          }
          <div className="clearfix" />
        </div>
          {this.props.status === 'PENDING' ?  <div className="loading" /> : null}
          {this.props.status=== 'FAILED' && !window.navigator.online ?
          <div className="error">Ooops, it seems your Internet connection is down. Check your connection and try to download photos one more time <span onClick={this.retryConnection}>Try again</span></div> : null}
          {this.props.status === 'PENDING' && this.props.error ?
          <div className="error">Trying to reconnect .... </div> : null}

      </div>
    )
  }
}
