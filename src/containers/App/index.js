import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import PropTypes from 'prop-types'; // ES6
import { MyComponent } from '../../components';

import './index.less';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyComponent />
        <p>
          欢迎在github上一起维护这个脚手架项目测试<br />
          https://github.com/GuoYongfeng
        </p>
      </div>
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
