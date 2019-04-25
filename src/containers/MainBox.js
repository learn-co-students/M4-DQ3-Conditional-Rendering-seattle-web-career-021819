import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor() {
    super()
    this.state = {
      selected: null
    }
  }

  handleClick = (ev) => {
    this.setState({
      selected: ev.target.id
    })
  }

  render() {

    let detailsToDisplay;
    if (this.state.selected === 'profile') {
      detailsToDisplay = <Profile />
    } else if (this.state.selected === 'photo') {
      detailsToDisplay = <Photos />
    } else if (this.state.selected === 'cocktail') {
      detailsToDisplay = <Cocktails />
    } else if (this.state.selected === 'pokemon') {
      detailsToDisplay = <Pokemon />
    }

    return (
      <div>
        <MenuBar
          handleClick={this.handleClick}
          selected={this.state.selected}
        />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
