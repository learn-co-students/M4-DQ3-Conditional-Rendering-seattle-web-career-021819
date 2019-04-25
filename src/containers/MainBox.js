import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor() {
    super()
    this.state = {
      currentTab: null
    }
    this.selectTab = this.selectTab.bind(this)
  }

  selectTab(tabId) {
    console.log("selectTab called for tabId: ", tabId)
    this.setState({currentTab: tabId})
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is
    selected in the menu, I should render either a Profile,
    Photos, Cocktails, or Pokemon component.Think of a way
    to track which menu item was selected. Which component
    should have state? Which component should have methods
    to control state? Where should these methods be called?

    */

    let detailsToDisplay = null;
    if (this.state.currentTab === "profile") {
      detailsToDisplay = <Profile />
    }
    else if (this.state.currentTab === "photo") {
      detailsToDisplay = <Photos />
    }
    else if (this.state.currentTab === "cocktail") {
      detailsToDisplay = <Cocktails />
    }
    else if (this.state.currentTab === "pokemon") {
      detailsToDisplay = <Pokemon />
    }

    return (
      <div>
        <MenuBar selectTab={this.selectTab}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
