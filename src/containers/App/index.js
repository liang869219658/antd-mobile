import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
//import { MyComponent } from '../../components';
import { Button, Flex, WingBlank, WhiteSpace } from 'antd-mobile';

console.log(document.documentElement.clientWidth);

import './index.less';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button className="btn" type="primary">primary 按钮</Button>
    );
  }
}



App.contextTypes = {
	router: PropTypes.object.isRequired
};


const mapStateToProps = (state) => ({
  user: state.user,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
