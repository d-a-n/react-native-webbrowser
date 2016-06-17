'use strict';

import React, {
  PropTypes,
} from 'react';

import ReactNative, {
  Image,
} from 'react-native';

import BaseComponent from './BaseComponent'
import styles from './styles'
import Button from './Button';

class BackButton extends BaseComponent {

    constructor(props) {
      super(props);

      this.state = {
        visible: props.visible,
      };

      this._bind(
        'onBackPress'
      );
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        visible: nextProps.visible
      });
    }

    buttonStyle() {
      return [styles.backButton, this.props.foregroundColor && {tintColor:this.props.foregroundColor}];
    }

    onBackPress() {
      const { onPress } = this.props;

      onPress && onPress();
    }

    render() {
      const { visible } = this.props;

      if (!visible) {
        return false;
      }

      return (
        <Button
          onPress={ this.onBackPress.bind(this) }>
          <Image
              style={this.buttonStyle()}
              source={require('./assets/images/arrow-left.png')}
          />
        </Button>
      );
    }
}

BackButton.propTypes = {
  visible: PropTypes.bool,
  onPress: PropTypes.func,
  foregroundColor: PropTypes.string
};

BackButton.defaultProps = {
  visible: true,
};

module.exports = BackButton;
