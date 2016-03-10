# react-native-webbrowser
A cross-platform (iOS / Android), full-featured in-app web browser component for React Native that is highly customizable. Currently you can hide the address-, status- and toolbar. Additionally the foreground and background colors can be modified.
 
## Install

```sh
npm i react-native-webbrowser --save
```

## Usage

Here is an extensive overview of the component usage.

```jsx

class SampleApp extends Component {
    render() {
        return (
            <View style={{paddingTop:20, flex:1}}>
            
                <Webbrowser
                    url="https://your-url.com"
                    hideHomeButton={false}
                    hideToolbar={false}
                    hideAddressBar={false}
                    hideStatusBar={false}
                    foregroundColor={'#efefef'}
                    backgroundColor={'#333'}
                />
                
            </View>
        );
    }
}
```

## Props

* `url - string` required, web address
* `hideAddressBar - bool` optional, hides the address bar / address input
* `hideStatusBar - bool` optional, hides the status bar / site title
* `hideToolbar - bool` optional, hides the toolbar (nav bar)
* `hideHomeButton - bool` optional, hides just the home button from the toolbar
* `hideActivityIndicator - bool`optional, hides the activity indicator (loading) overlay 
* `foregroundColor - string` optional, sets the forground color of text and icon elements
* `backgroundColor - string` optional, sets the background color
* `onNavigationStateChange - function(navState)` optional, url change callback
* `onShouldStartLoadWithRequest - function(event)` optional, return false if the request should be stopped


## Screenshots

<img src="https://raw.githubusercontent.com/d-a-n/react-native-webbrowser/master/assets/images/screenshot.png" width="400" />
&nbsp;&nbsp;&nbsp;
<img src="https://raw.githubusercontent.com/d-a-n/react-native-webbrowser/master/assets/images/screenshot2.png" width="400" />
