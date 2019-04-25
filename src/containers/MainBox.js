import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      tabId: 'profile'
    }

    this.pages = {
      profile: <Profile />,
      photo: <Photos />,
      cocktail: <Cocktails />,
      pokemon: <Pokemon />
    }
  }

  handleTabSelect = (id) => {
    this.setState({tabId: id})

  Array.from(document.querySelectorAll('.item')).forEach(tab => {
    tab.classList.remove('active')
  })

  const activeTab = document.querySelector(`a#${id}`)
    activeTab.classList.add("active")
  }


  render() {

    return (
      <div>
        <MenuBar handleTabSelect={this.handleTabSelect} />
        {this.pages[this.state.tabId]}
      </div>
    )
  }

}

export default MainBox
