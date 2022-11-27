
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput,Alert, Dimensions } from "react-native";
import { Button } from 'react-native-paper';
import { Input, CheckBox } from 'react-native-elements';
import SelectList from 'react-native-dropdown-select-list';
// import SelectBox from 'react-native-multi-selectbox';
import MultiSelect from 'react-native-multiple-select';
import CalendarPicker from 'react-native-calendar-picker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from "expo-constants";
// import { ComboBox } from "@progress/kendo-react-dropdowns";
// import { xorBy } from 'lodash'

// import { MultiSelect } from "@progress/kendo-react-dropdowns";  



function NewBubbleScreen({bubbles, setBubble}){

  const [ region, setRegion ] = React.useState({
    latitude: 51.51758,
    longitude: -0.11783, 
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  const [isChecked, setChecked] = React.useState([
    { label: 'Male', value: 'male', checked: false },
    { label: 'Female', value: 'female', checked: false },
    { label: 'Anything', value: 'anything', checked: false },
  ]);
  const checkboxHandler = (value, index) => {
    const newValue = isChecked.map((checkbox, i) => {
      if (i !== index)
        return {
          ...checkbox,
          checked: false,
        }
      if (i === index) {
        const item = {
          ...checkbox,
          checked: !checkbox.checked,
        }
        onChangedCheckboxText(checkbox.label)
        console.log(checkboxtext)
        return item
      }
    return checkbox
  })
  setChecked(newValue)
  }                         

  const example_event = [
    { id: 0, name: 'Group Chat' },
    { id: 1, name: 'Local Event' },
    { id: 2, name: 'Online Event' },

  ];

  const example_tag = [
    { id: 0, name: 'Sports' },
    { id: 1, name: 'Gaming' },
    { id: 2, name: 'Drinking' },
    { id: 3, name: 'Party' },
    { id: 4, name: 'Apex' },
    { id: 5, name: 'Tennis' },
    { id: 6, name: 'Sexy ladies' },
    { id: 7, name: 'Gambling' },
    { id: 8, name: 'Killing' },
    { id: 9, name: 'Shooting' },
  ];
 
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedTags, setselectedTags] = useState([])

  const [nametext, onChangeNameText] = useState("Enter bubble name");
  const [numbertext, onChangeNumberText] = useState("Enter number of participants");
  const [addresstext, onChangeAddressText] = useState("Enter event address");
  const [descriptiontext, onChangeDescriptionText] = useState("Bubble description");
  const [checkboxtext, onChangedCheckboxText] = useState()

 
  const onSelectedItemsChange = (selectedItems) => {
 
    setSelectedItems(selectedItems);
 
    for (let i = 0; i < selectedItems.length; i++) {
      var tempItem = example_event.find(item => item.id === selectedItems[i]);
      console.log(tempItem);
    }
 
  };
  const onSelectedTagsChange = (selectedTags) => {
 
    setselectedTags(selectedTags);
 
    for (let i = 0; i < selectedTags.length; i++) {
      var tempItem = example_tag.find(item => item.id === selectedTags[i]);
      console.log(tempItem);
    }
 
  };

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);


    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
    console.log(selectedStartDate)
    console.log(selectedEndDate)
  };

  // const PlacesAutocomplete = ({setSelected}) =>{
  //   const {
  //     ready,
  //     value,
  //     setValue,
  //     suggestions: {status, data},
  //     clearSuggestions,
  //   } = usePlacesAutocomplete();
  // }

  return (

    // <ScrollView style={styles.scrollView}>
    
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 6, padding: 5}}>

        {/* const data = [{key:'1',value:'Jammu & Kashmir'}]; */}
        <Text>Bubble name</Text>
        <Input onChangeText={onChangeNameText} value = {nametext}/>
        <Text>No. participant</Text> 
        <Input onChangeText={onChangeNumberText} value = {numbertext}/>
        <Text>Date</Text> 
        {/* <Input placeholder='No. participant'/> */}
        <View >
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date(2018, 1, 1)}
          maxDate={new Date(2050, 6, 3)}
          weekdays={
            [
              'Mon', 
              'Tue', 
              'Wed', 
              'Thur', 
              'Fri', 
              'Sat', 
              'Sun'
            ]}
          months={[
            'January',
            'Febraury',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          previousTitle="Previous"
          nextTitle="Next"
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#66ff33"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            fontFamily: 'Cochin',
            color: '#000000',
          }}
          onDateChange={onDateChange}
        />
        </View>


        <View style={styles.searchContainer}>
        <Text>Address</Text> 
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
        </View>
        {/* <Input onChangeText={onChangeAddressText} value = {addresstext}/> */}
        <View>
        <Text>Description</Text> 
        <Input onChangeText={onChangeDescriptionText} value = {descriptiontext}/>
        </View>
        
        <Text>Participants</Text>
        <View style = {styles.checkbox}>
        {isChecked.map((checkbox, i) => (
        <View   key={i}>
          {/* <Text>{checkbox.label}</Text> */}
          <CheckBox
            title={checkbox.label}
            checked={checkbox.checked}
            onPress={(value) => checkboxHandler(value, i)}
          />
        </View>
        ))}
        </View>
        
        {/* <ComboBox>
          <ComboboxInput value = {value} 
          onChange = {e => setValue(e.target.value)} 
          disabled = {!ready} 
          className = "combobox-input" 
          placeholder = "Search an address"
          />
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" && data.map(({place_id, description})=> <ComboboxOption key = {place_id} value = {description}/>)}
            </ComboboxList>
          </ComboboxPopover>

        </ComboBox> */}

        <Text>Event Type</Text>
        {/* <SelectList setSelected={setSelected} data={example_data} onSelect={() => alert(selected)} /> */}
        <MultiSelect
          hideTags
          items={example_event}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Select Items"
          searchInputPlaceholderText="Search Items Here..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#00BFA5"
          submitButtonText="Submit"
        />
        <Text>Tag</Text>
        {/* <SelectList setSelected={setSelected} data={example_tags} onSelect={() => alert(selected)} /> */}
        
        <MultiSelect
          hideTags
          items={example_tag}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedTagsChange}
          selectedItems={selectedTags}
          selectText="Select Items"
          searchInputPlaceholderText="Search Items Here..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#00BFA5"
          submitButtonText="Submit"
        />
 
        <View style = {{borderTopLeftRadius: 20, borderTopRightRadius: 20, 
        borderBottomLeftRadius: 20, borderBottomRightRadius: 20,backgroundColor: "#00008B", padding: 5, margin: 10}}>
        {/* <Button color="#FFFFFF" mode = "text" onPress={() => console.log(nametext,numbertext,selectedStartDate._i,
                                                          selectedEndDate._i,addresstext,checkboxtext,(selectedItems.map(x=>example_event[x].name)),selectedTags.map(x=>example_tag[x].name))  }>
          Post Bubble
        </Button> */}
        <Button color="#FFFFFF" mode = "text" onPress={() => setBubble([...bubbles, {key: 0, 
                        name: nametext, 
                        img: 'https://picsum.photos/700', 
                        imgs: ['https://picsum.photos/700', 'https://picsum.photos/700'], 
                        description: "lorem piscum", 
                        space: " ", 
                        bubble_type: selectedItems.map(x=>example_event[x].name),
                        tags: selectedTags.map(x=>example_tag[x].name), 
                        start_date: selectedStartDate._i,
                        end_date: selectedEndDate._i,
                        creator_name: "Charles Yu", 
                        creator_location: addresstext, 
                        members: ["Guangzhong Chen", "Bowen Zhu", "Robert Tan"], 
                        members_no: numbertext, 
                        participant_type:checkboxtext}])  }>
          Post Bubble
        </Button>
        {/* <Button color="#FFFFFF" mode = "text" onPress={() => console.log(bubbles)  }>
          Post Bubble
        </Button> */}
        
        </View>

      </View>

      {/* <View style={{ flex: 1,borderWidth: 2, padding: 5, margin: 10}} /> */}
      {/* <View style={{ flex: 1,borderWidth: 2, padding: 5, margin: 10}} /> */}
      {/* <View style={{ flex: 1,borderWidth: 2, padding: 5, margin: 10}} /> */}
      {/* <View style={{ flex: 1,borderWidth: 2, padding: 5, margin: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20,backgroundColor: "beige"}} /> */}
    </View>
    // </ScrollView>
  );


};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30
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
  checkbox: {
    // flex: 2, // the number of columns you want to devide the screen into
    // marginHorizontal: "auto",
    // height: 100,
  }
});
const styles_sub = StyleSheet.create({
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

export default NewBubbleScreen;