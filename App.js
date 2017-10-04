import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions
} from "react-native";

const BOTTOM_VIEW_HEIGHT = 250;
const BOTTOM_VIEW_WIDTH = Dimensions.get("window").width;
export default class BottomSwipeInView extends Component {
  state = { anim: new Animated.Value(0) };
  swipeIn = () => {
    Animated.timing(this.state.anim, {
      toValue: 1,
      easing: Easing.linear
    }).start();
  };
  swipeOut = () => {
    Animated.timing(this.state.anim, {
      toValue: 0,
      easing: Easing.linear
    }).start();
  };
  render() {
    let {
      container,
      button,
      buttonText,
      bottomView,
      bottomViewText,
      dummyViewText
    } = styles;
    return (
      <View style={container}>
        <TouchableOpacity style={button} onPress={() => this.swipeIn()}>
          <Text>Swipe In </Text>
        </TouchableOpacity>
        <TouchableOpacity style={button} onPress={() => this.swipeOut()}>
          <Text>Swipe Out </Text>
        </TouchableOpacity>
        <View>
          <Text style={dummyViewText}>Dummy View 1</Text>
          <Text style={dummyViewText}>Dummy View 2</Text>
          <Text style={dummyViewText}>Dummy View 3</Text>
          <Text style={dummyViewText}>Dummy View 4</Text>
          <Text style={dummyViewText}>Dummy View 5</Text>
        </View>
        <Animated.View
          style={[
            bottomView,
            {
              transform: [
                {
                  translateY: this.state.anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [BOTTOM_VIEW_HEIGHT, 1]
                  })
                }
              ]
            }
          ]}
        >
          <Text style={bottomViewText}>Bottom View</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00b3ff"
  },
  button: {
    backgroundColor: "white",
    margin: 10,
    padding: 10
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  bottomView: {
    position: "absolute",
    width: BOTTOM_VIEW_WIDTH,
    height: 250,
    bottom: 0,
    backgroundColor: "#00d46e",
    alignItems: "center",
    justifyContent: "center"
  },
  bottomViewText: {
    fontSize: 20,
    color: "white"
  },
  dummyViewText: {
    fontSize: 20,
    color: "white",
    margin: 10,
    padding: 10
  }
});
