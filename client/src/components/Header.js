import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payment from './Payment';

class Header extends Component {
  renderContent() {
    const content = {
      null: null,
      false: (
        <li>
          <a href="/auth/google">Login With Google</a>
        </li>
      ),
      default: [
        <li key="1">
          <Payment />
        </li>,
        <li key="2" style={{ margin: '0 10px' }}>
          Credits: {this.props.auth && this.props.auth.credits}
        </li>,
        <li key="3">
          <a href="/api/logout">Logout</a>
        </li>,
      ],
    };

    return content[this.props.auth] || content['default'];
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to={this.props.auth ? '/user' : ''} className="brand-logo">
              Logo
            </Link>
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(Header);
