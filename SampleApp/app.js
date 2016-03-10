'use strict';

import React, {
    Component,
    View
} from 'react-native';

import Webbrowser from 'react-native-webbrowser'

class SampleApp extends Component {
    render() {
        return (
            <View style={{paddingTop:20, flex:1}}>
                <Webbrowser
                    url="https://facebook.github.io/react-native/docs/"
                    hideHomeButton={false}
                    hideToolbar={false}
                    hideAddressBar={false}
                    hideStatusBar={false}
                    foregroundColor="#fff"
                    backgroundColor="#D61B5D"
                />
            </View>
        );
    }
}

export default SampleApp;