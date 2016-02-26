'use strict';

import React from 'react-native';
var {
    TextInput,
    View,
    } = React;

import BaseComponent from './BaseComponent'
import styles from './styles'

class StatusBar extends BaseComponent {

    constructor(props) {
        super(props);

        this.inputText = '';
        this.state = {
            status: this.props.status
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            status: nextProps.status
        });
    }

    render() {
        return (
            <View style={styles.statusBar}>
                <TextInput
                    value={this.state.status}
                    style={[styles.statusBarText, this.props.foregroundColor && {color:this.props.foregroundColor}]}
                    editable={false}
                    numberOfLines={1}
                />

            </View>
        );
    }
}

StatusBar.propTypes = {
    status: React.PropTypes.string,
    foregroundColor: React.PropTypes.string
};

StatusBar.defaultProps = {
    status: '',
};

module.exports = StatusBar;

