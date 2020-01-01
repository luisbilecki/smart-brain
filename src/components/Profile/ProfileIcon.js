import React, { Component } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


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
    const token = window.sessionStorage.getItem('token');

    fetch('http://localhost:3000/signout', {
      method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
        .then(resp => resp.json())
        .then(res => {
          if (res.success) {
            window.sessionStorage.removeItem('token');
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
