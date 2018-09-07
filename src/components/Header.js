import React, { Component } from 'react'
import {
  PageHeader
} from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
        <div>
          <PageHeader>
            <h1>Cat Tinder</h1>
          </PageHeader>
        </div>
    );
  }
}

export default Header;
