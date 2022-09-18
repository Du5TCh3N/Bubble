
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-paper';
import { Input, CheckBox } from 'react-native-elements';
import SelectList from 'react-native-dropdown-select-list'
function NewBubbleScreen(){
  const [selected, setSelected] = React.useState("");
  const data = [{key:'1',value:'Jammu & Kashmir'}];

  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 6,borderWidth: 2, padding: 5, margin: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20, 
        borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
        
  
        {/* const data = [{key:'1',value:'Jammu & Kashmir'}]; */}
        <Text>Bubble name</Text>
        <Input placeholder='Bubble name'/>
        <Text>No. participant</Text> 
        <Input placeholder='No. participant'/>
        <Text>Participants?</Text>
          <CheckBox title='Male only' checked={false}/>
          <CheckBox title='Female only' checked={false}/>
          <CheckBox title='Whatever' checked={false}/>
        <Text>Event Type</Text>
        <SelectList setSelected={setSelected} data={data} onSelect={() => alert(selected)} />
        <Text>Tag</Text>
        <SelectList setSelected={setSelected} data={data} onSelect={() => alert(selected)} />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default NewBubbleScreen;