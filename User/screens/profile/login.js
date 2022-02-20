import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { Text, View } from "../../components/Themed";
import styles from "./styles";
import { gql, useMutation } from "@apollo/client";

const baseUrl = "http://192.168.43.187:5000";

const Verify_USER = gql`
  mutation VERIFY_NUMBER($phoneNumber: String!) {
    StartPhoneVerification(phoneNumber: $phoneNumber) {
      ok
      error
    }
  }
`;

const Login = (props) => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onPhoneNumberChange = (phoneNumber) => {
    setPhoneNumber(phoneNumber);
  };

  const [StartPhoneVerification, { data, loading, error }] =
    useMutation(Verify_USER);

  if (loading) {
    console.log("submitting");
  }
  if (error) {
    console.log(error);
  }
  console.log(data);
  // useEffect(() => {
  // }, []);

  const sendOtp = (event) => {
    StartPhoneVerification({ variables: { phoneNumber } })
      .then(({ data }) => {
        props.navigation.navigate("Otp", { phoneNumber });
        console.log(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <View style={style.container}>
      <Image
        source={require("../../assets/images/logo_taxi.jpg")}
        style={styles.logo}
      />
      <Text
        style={{
          textAlign: "center",
          fontFamily: "FilsonPro",
          fontSize: 20,
          marginBottom: 50,
          marginTop: 5,
        }}
      >
        Driver App
      </Text>
      <Text style={style.title}>Login</Text>
      <View
        style={style.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TextInput
        label="Phone number"
        value={phoneNumber}
        // onChangeText={phone => this.setState({phone})}
        onChangeText={onPhoneNumberChange}
      />
      <Text style={style.subCaption}>
        {" "}
        By continuing, I confirm that i have read & agreed to the Terms of usage
      </Text>

      <TouchableOpacity
        onPress={sendOtp}
        style={[
          styles.submitButton,
          {
            backgroundColor: "#009473",
            borderColor: "#009473",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.submitButtonText, { color: "#FFF" }]}>
          {" "}
          Continue{" "}
        </Text>
      </TouchableOpacity>

      <View>
        <Pressable
          onPress={() => {
            props.navigation.navigate("Register");
          }}
        >
          <Text style={styles.subCaption}>Dont have an account? Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: 'center',
    justifyContent: "center",
  },
  subCaption: {
    textAlign: "center",
    marginTop: 20,
    fontFamily: "FilsonPro",
  },
  title: {
    fontSize: 20,
    fontFamily: "FilsonPro",
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
