import React, { Component } from 'react'
import FullName from './component/profile/FullName'
import ProfilePhoto from './component/profile/ProfilePhoto'
import Address from './component/profile/Address';

 class App extends Component {
  render() {
    return (
      <div className='App'>
        <FullName/>
        <ProfilePhoto/>
        <Address/>
      </div>
    );
  }
}

export default App;


