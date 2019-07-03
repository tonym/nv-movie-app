import React from 'react';
import { connect } from 'react-redux';

const LoginView: React.FC = props => {

  return (
    <div>
      Login view
    </div>
  );

}

function mapStateToProps(state: object) {

  return state;

}

export default connect(mapStateToProps)(LoginView);