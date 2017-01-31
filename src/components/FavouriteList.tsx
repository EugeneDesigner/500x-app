import * as React from 'react'

export default class FavouriteList extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      deleted: this.props.saved,
      count: 0,
      clicked: false
    }

    this.deleteImage = this.deleteImage.bind(this)
    this.hoverImage = this.hoverImage.bind(this)
    this.deletePhotos = this.deletePhotos.bind(this)
  }

  deleteImage(e) {
      if (!this.state.clicked) {
        this.setState({clicked: true})
      }
      let photo = e.target.src || e.target.parentElement.children[3].src
      if (this.state.deleted.length >=1 && this.state.deleted.includes(photo)) {
        let newList = this.state.deleted.filter((i) => {
          return i != photo
        })
        e.target.parentElement.classList.add('chosen')
        e.target.parentElement.classList.remove('choose')
        this.setState({
          deleted: newList,
          count: this.state.count + 1
        })
      } else {
        e.target.parentElement.classList.remove('chosen')
        this.setState({
          deleted: this.state.deleted.concat([photo]),
          count: this.state.count - 1
      })

    }
  }
  hoverImage(e) {
    if (!e.target.parentElement.classList.contains('chosen')) {
      if (e.type == "mouseover") {
        e.target.parentElement.classList.add('choose')
      } else {
        e.target.parentElement.classList.remove('choose')
      }
    } else {
      e.target.parentElement.classList.remove('choose')
    }
  }

  deletePhotos(e) {
    this.props.actions.deletePhotoAction(this.state.deleted)
  }
  render() {
    console.log(this.state.deleted)
  return (
    <div>
      <div className="header">{this.state.clicked && this.state.deleted.length != this.props.saved.length ?
        <div className="header__selected">
          <p>X {this.state.count}</p>

          <p className="header__selected--delete" onClick={this.deletePhotos}></p>
        </div>
        : <div className="header__initial"><p className="header__selected--title">Favourites</p></div>}</div>
    <div className="row photos">
      {this.props.saved.length>=1 ? this.props.saved.map((item, index) => {
        return (
          <div onClick={this.deleteImage}
              className={"image-item"}
              key={index}
              onMouseOver={this.hoverImage}
              onMouseLeave={this.hoverImage} >
              <div className="icon__delete"></div>
              <div className="icon__trash"></div>
              <div className="icon__background"></div>
              <img src={item}/>
          </div>
        )
      })
    : <p className="description">Here your favourite photos will be displayed. If you deleted some - don't worry, there are plenty still to choose from</p>}
    </div>

    </div>
  )
}

}
