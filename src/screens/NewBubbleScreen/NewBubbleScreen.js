
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import { Button } from 'react-native-paper';
import { Input, CheckBox } from 'react-native-elements';
import SelectList from 'react-native-dropdown-select-list';
// import SelectBox from 'react-native-multi-selectbox';
import MultiSelect from 'react-native-multiple-select';
import CalendarPicker from 'react-native-calendar-picker';
// import { xorBy } from 'lodash'

// import { MultiSelect } from "@progress/kendo-react-dropdowns";  



function NewBubbleScreen(){


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
        return item
      }
    return checkbox
  })
  setChecked(newValue)
  }                         

  const example_event = [
    { id: 1, name: 'Group Chat' },
    { id: 2, name: 'Local Event' },
    { id: 3, name: 'Online Event' },

  ];

  const example_tag = [
    { id: 1, name: 'Sports' },
    { id: 2, name: 'Gaming' },
    { id: 3, name: 'Drinking' },
    { id: 4, name: 'Party' },
    { id: 5, name: 'Apex' },
    { id: 6, name: 'Tennis' },
    { id: 7, name: 'Sexy ladies' },
    { id: 8, name: 'Gambling' },
    { id: 9, name: 'Killing' },
    { id: 10, name: 'Shooting' },
  ];
 
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedTags, setselectedTags] = useState([])
 
  const onSelectedItemsChange = (selectedItems) => {
 
    setSelectedItems(selectedItems);
 
    for (let i = 0; i < selectedItems.length; i++) {
      var tempItem = example_tag.find(item => item.id === selectedItems[i]);
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

  return (
    <ScrollView style={styles.scrollView}>
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 6, padding: 5}}>
        
  
        {/* const data = [{key:'1',value:'Jammu & Kashmir'}]; */}
        <Text>Bubble name</Text>
        <Input placeholder='Bubble name'/>
        <Text>No. participant</Text> 
        <Input placeholder='No. participant'/>
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

        <Text>Location</Text> 
        <Input placeholder='No. participant'/>
        
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
        <Button color="#FFFFFF" mode = "text" onPress={() => Alert.alert('Simple Button pressed')  }>
          Post Bubble
        </Button>
        
        </View>

      </View>

      {/* <View style={{ flex: 1,borderWidth: 2, padding: 5, margin: 10}} /> */}
      {/* <View style={{ flex: 1,borderWidth: 2, padding: 5, margin: 10}} /> */}
      {/* <View style={{ flex: 1,borderWidth: 2, padding: 5, margin: 10}} /> */}
      {/* <View style={{ flex: 1,borderWidth: 2, padding: 5, margin: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20,backgroundColor: "beige"}} /> */}
    </View>
    </ScrollView>
  );


};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30
  },
  checkbox: {
    // flex: 2, // the number of columns you want to devide the screen into
    // marginHorizontal: "auto",
    // height: 100,
  }
});


export default NewBubbleScreen;