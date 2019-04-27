import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(props){
    super(props)
    this.state = ({selection: ""})
    this.onSelection = this.onSelection.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  onSelection(event){
    console.log(event.target.id)
    if(event.target.id === 'profile'){
      this.setState({selection: "Profile"})
      return <Profile/>
    } else if (event.target.id === 'photo') {
      this.setState({selection: "Photo"})
      return <Photos/>
    } else if (event.target.id === 'cocktail') {
      this.setState({selection: "Cocktail"})
      return <Cocktails/>
    } else {
      this.setState({selection: "Pokemon"})
      return <Pokemon/>
    }
  }

  updateState(){
    if(this.state.selection === 'Profile'){

      return <Profile/>
    } else if (this.state.selection === 'Photo') {

      return <Photos/>
    } else if (this.state.selection === 'Cocktail') {

      return <Cocktails/>
    } else {

      return <Pokemon/>
    }
  }


  render() {

  const detailsToDisplay = this.updateState()

    //const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar onSelection={this.onSelection}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
