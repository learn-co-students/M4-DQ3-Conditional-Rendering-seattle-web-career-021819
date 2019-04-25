import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor () {
    super()
    this.state = {
      currentSelection: ""
    }
  }

  onClickHandler = (e) => {
    this.setState({currentSelection: e.target.id})

  }

  setComponent = () => {
    if (this.state.currentSelection === "pokemon"){
      return <Pokemon />
    }
    if (this.state.currentSelection === "cocktail"){
      return <Cocktails />
    }
    if (this.state.currentSelection === "photo"){
      return <Photos />
    }
    if (this.state.currentSelection === "profile"){
      return <Profile />
    }
  }

  render() {

    const detailsToDisplay = <div>This isnt working yet</div>
    
    console.log(this.state.currentSelection)

    return (

      <div>
        <MenuBar onClickHandler={this.onClickHandler}/>
        {this.setComponent()}
      </div>
    )
  }

}

export default MainBox
