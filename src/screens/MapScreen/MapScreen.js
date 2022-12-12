import * as React from 'react';
import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Button, Provider, TextInput } from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from "expo-constants";
import PropTypes from "prop-types";

function MapScreen() {
  const [ pin, setPin ] = React.useState({
    latitude: 51.51758,
    longitude: -0.11783, 
  })
  const [ region, setRegion ] = React.useState({
    latitude: 51.51758,
    longitude: -0.11783, 
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  const [radius, setRadius] = React.useState(1500)

  return (
    <View style={styles.container}>

      

      <MapView 
        style={styles.map}
        provider={PROVIDER_GOOGLE} 
        //specify our coordinates.
        initialRegion={{
          latitude: 51.51758,
          longitude: -0.11783,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}   
      >
        <Marker coordinate={{latitude: region.latitude, longitude: region.longitude}}/>

        <Marker 
          coordinate = {pin}
          draggable = {true}
          onDragStart = {(e) => {
            console.log("Drag start", e.nativeEvent.coordinate)
          }}
          onDragEnd = {(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            })
          }}
        >
            <Callout>
              <Text>I'm here!</Text>
            </Callout>
        </Marker>

        <Circle 
          center={pin}
          radius = {radius}
        />
      </MapView>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder='Enter radius of the area'
          onChangeText={input => setRadius(input)}
        >
        </TextInput>
      </View>

      {/* <View style={styles.searchContainer}>
        <Text>From</Text>
        <GooglePlacesAutocomplete
          style={{ textInput: styles.input}}
          placeholder='Search'
          fetchDetails= {true}
          GooglePlacesSearchQuery = {{
            rankby: "distance",
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            setRegion({
              latitude: details.geometry.location.lat,
              latitude: details.geometry.location.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            })
          }}
          query={{
            key: 'AIzaSyDbxFPw8cVHVOhLZumDDLZF7oA9H6l5br0',
            language: 'en',
            components: "country:uk",
            types: "establishment",
            radius: 30000,
            location: `${region.latitude}, ${region.longitude}`
          }}
        />
        <Text>To</Text>
        <GooglePlacesAutocomplete
          style={{ textInput: styles.input}}
          placeholder='Search'
          fetchDetails = {true}
          GooglePlacesSearchQuery = {{
            rankby: "distance",
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            setRegion({
              latitude: details.geometry.location.lat,
              latitude: details.geometry.location.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            })
          }}
          query={{
            key: 'AIzaSyDbxFPw8cVHVOhLZumDDLZF7oA9H6l5br0',
            language: 'en',
            components: "country:uk",
            types: "establishment",
            radius: 30000,
            location: `${region.latitude}, ${region.longitude}`
          }}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    textShadowOffset: {width: 2, height:2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: Constants.statusBarHeight,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },
});

export default MapScreen;