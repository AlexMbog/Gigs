import { View, Text } from 'react-native'
import React from 'react'
import CustomInput from "@/components/CustomInput";
import SubmitButton from "@/components/SubmitButton";
const create = () => {
  return (
    <View>
     <CustomInput
        placeholder="Enter your Name "
        value="name"
        onChangeText={() => ({})}
        keyboardType="default"
        label="Name"
      />
      <SubmitButton
        title="Press"
        onPress={() => alert("Button Pressed!")}
        className="mt-4 "
      />
    </View>
  )
}

export default create