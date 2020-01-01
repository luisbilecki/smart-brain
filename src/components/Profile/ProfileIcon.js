import React, { Component } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { signOut } from '../../api/signout';

import { getToken, removeToken } from '../../helpers/token';

class ProfileIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  handleSignOut = () => {
    const token = getToken();

    signOut(token)
        .then(res => {
          if (res.success) {
            removeToken();
            this.props.onRouteChange('signout');
          }
        });
  }

  render() {
    const { toggleModal } = this.props;
    const { dropdownOpen } = this.state;

    return (
      <div className='pa4 tc'>
        <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={dropdownOpen}
          >
            <img
                src="http://tachyons.io/img/logo.jpg"
                className="br-100 ba h3 w3 dib" alt="avatar" />
          </DropdownToggle>
          <DropdownMenu
            right
            className="b--transparent shadow-5"
            style={{ marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            <DropdownItem onClick={() => toggleModal()}>View Profile</DropdownItem>
            <DropdownItem onClick={this.handleSignOut}>Sign Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}

export default ProfileIcon;
