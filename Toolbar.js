'use strict';

import React from 'react-native';
var {
    View,
    Image
    } = React;

import BaseComponent from './BaseComponent'
import Button from './Button'
import styles from './styles'

class Toolbar extends BaseComponent {

    constructor(props) {
        super(props);

        this.inputText = '';
        this.state = Toolbar.updateState(this.props);
    }

    static updateState(props) {
        return {
            backButtonEnabled: props.backButtonEnabled,
            forwardButtonEnabled: props.forwardButtonEnabled,
            homeButtonEnabled: props.homeButtonEnabled,
            onBack: props.onBack,
            onHome: props.onHome,
            onForward: props.onForward
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState(Toolbar.updateState(nextProps));
    }

    renderHomeButton() {

        if (this.props.hideHomeButton) {
            return <View/>
        }

        return (
            <Button
                disabled={!this.state.homeButtonEnabled}
                onPress={this.state.onHome}>
                <Image
                    style={this.buttonStyle()}
                    source={require('./assets/images/home-outline.png')}
                />
            </Button>
        );
    }

    buttonStyle() {
        return [styles.toolBarIcons, this.props.foregroundColor && {tintColor:this.props.foregroundColor}];
    }

    render() {
        return (
            <View style={styles.toolBar}>

                <Button
                    disabled={!this.state.backButtonEnabled}
                    onPress={this.state.onBack}>
                    <Image
                        style={this.buttonStyle()}
                        source={require('./assets/images/arrow-left.png')}
                    />
                </Button>

                {this.renderHomeButton()}

                <Button
                    disabled={!this.state.forwardButtonEnabled}
                    onPress={this.state.onForward}>
                    <Image
                        style={this.buttonStyle()}
                        source={require('./assets/images/arrow-right.png')}
                    />
                </Button>
            </View>
        );
    }
}

Toolbar.propTypes = {
    backButtonEnabled: React.PropTypes.bool,
    forwardButtonEnabled: React.PropTypes.bool,
    homeButtonEnabled: React.PropTypes.bool,
    hideHomeButton: React.PropTypes.bool,
    onBack: React.PropTypes.func,
    onHome: React.PropTypes.func,
    onForward: React.PropTypes.func,
    foregroundColor: React.PropTypes.string
};

Toolbar.defaultProps = {
    backButtonEnabled: false,
    forwardButtonEnabled: false,
    homeButtonEnabled: true,
    hideHomeButton: false,
    onBack: ()=> {},
    onHome: ()=> {},
    onForward: ()=> {}
};

module.exports = Toolbar;