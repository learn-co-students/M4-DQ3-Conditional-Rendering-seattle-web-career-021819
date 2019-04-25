import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(){
    super()
    this.state={
      currSelection: ''
    }
  }

  onMenuClick=(e)=>{
    if(e.target.id==="Photos"){
      this.setState({currSelection: "Photos"})
    }else if (e.target.id==="Profile"){
      this.setState({currSelection: "Profile"})
    }else if (e.target.id==="Cocktail"){
      this.setState({currSelection: "Cocktails"})
    }else{
      this.setState({currSelection: "Pokemon"})
    }
  }

  pickMethod=()=>{
   if(this.state.currSelection==="Photos"){
     return <Photos/>
   }
   else if(this.state.currSelection==="Profile"){
     return <Profile/>
   }
   else if(this.state.currSelection==="Cocktails"){
     return <Cocktails />
   }else{
     return <Pokemon />
   }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const selection=this.pickMethod()

    return (
      <div>
        <MenuBar onMenuClick={this.onMenuClick} />
        {selection}
      </div>
    )
  }

}

export default MainBox
