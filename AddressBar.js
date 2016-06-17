'use strict';

import React, {
  PropTypes,
} from 'react';

import ReactNative, {
  TextInput,
  View,
} from 'react-native';

import BaseComponent from './BaseComponent'
import Utils from './Utils'
import styles from './styles'

const TEXT_INPUT_REF = 'urlInput';

class AddressBar extends BaseComponent {

    constructor(props) {
        super(props);

        this.inputText = '';

        this.state = {
            url: this.props.url
        };

        this._bind(
            'handleTextInputChange',
            'onSubmitEditing'
        );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            url: nextProps.url
        });
    }

    handleTextInputChange(event) {
        const url = Utils.sanitizeUrl(event.nativeEvent.text);
        this.inputText = url;
    }

    onSubmitEditing(event) {
        this.load();
    }

    load() {
        const url = this.inputText;
        if (url === this.props.url) {
            this.props.onReload();
        } else {
            this.props.onLoad(url)
        }
        // dismiss keyboard
        this.refs[TEXT_INPUT_REF].blur();
    }

    render() {
        return (
            <View style={[styles.addressBarRow]}>
                <TextInput
                    ref={TEXT_INPUT_REF}
                    autoCapitalize="none"
                    defaultValue={this.state.url}
                    onSubmitEditing={this.onSubmitEditing}
                    onChange={this.handleTextInputChange}
                    clearButtonMode="while-editing"
                    autoCorrect={false}
                    style={[styles.addressBarTextInput, this.props.foregroundColor && {color:this.props.foregroundColor}]}
                />
            </View>
        );
    }
}

AddressBar.propTypes = {
    url: PropTypes.string,
    onLoad: PropTypes.func,
    onReload: PropTypes.func,
    foregroundColor: PropTypes.string
};

AddressBar.defaultProps = {
    url: '',
    onLoad: (url)=>{},
    onReload: ()=>{}
};

module.exports = AddressBar;
