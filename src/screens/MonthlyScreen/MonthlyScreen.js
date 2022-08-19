import { View, Text } from 'react-native'
import React from 'react'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


const MonthlyScreen = () => {
  return (
    <View>
        <CalendarList
            // initialDate={'2022-08-19'}
            // // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            // minDate={'2024-08-19'}
            // // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            // maxDate={'2012-08-19'}
            // Handler which gets executed on day press. Default = undefined
            // Callback which gets executed when visible months change in scroll view. Default = undefined
            onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={20}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={20}
            // Enable or disable scrolling of calendar list
            scrollEnabled={true}
            // Enable or disable vertical scroll indicator. Default = false
            showScrollIndicator={true}
            // enable paging
            pagingEnabled={true}
        />
    </View>
  )
}

export default MonthlyScreen