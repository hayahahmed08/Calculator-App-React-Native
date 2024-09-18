import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import styles from "./MainScreenStyles";
import { useState } from "react";
const MainScreen = () => {
  const [value,setValue] = useState('0')
  const HandlePress = (val) => {
    console.log("pressed", val);
    if (val == 'AC'){
      setValue('0')
    }
    else if (val == '='){  

    }
    else if (val == '+/-'){

    }
    else {
      if (value == '0'){
        if(isNaN(val)){
          setValue(value+val)
        }
        else{
      setValue(val)
    }
  }
        else {
      setValue(value + val)
    }
    console.log(isNaN(val))
  }
  };  
  return (
    <View style={styles.MainScreen}>
      <ScrollView style={styles.MainScreenDisplay}>
        <Text style={styles.MainScreenText}>{value}</Text>
      </ScrollView>
      <View style={styles.MainScreenKeypad}>
        <View style={styles.MainScreenKeypadRow}>
          <Pressable onPress={() => HandlePress('AC')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>AC</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => HandlePress('+/-')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>+/-</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => HandlePress('%')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>%</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => HandlePress('/')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>/</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.MainScreenKeypadRow}>
          <Pressable onPress={() => HandlePress('7')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>7</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => HandlePress('8')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>8</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => HandlePress('9')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>9</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => HandlePress('x')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>x</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.MainScreenKeypadRow}>
          <Pressable onPress={() => HandlePress('4')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>4</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => HandlePress('5')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>5</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => HandlePress('6')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>6</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => HandlePress('-')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>-</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.MainScreenKeypadRow}>
          <Pressable onPress={() => HandlePress('1')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>1</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => HandlePress('2')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>2</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => HandlePress('3')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>3</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => HandlePress('+')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>+</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.MainScreenKeypadRow}>
          <Pressable onPress={() => HandlePress('0')}>
            <View style={styles.btn3_outer}>
              <Text style={styles.bg3_button}>0</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => HandlePress('.')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>.</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => HandlePress('=')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>=</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
