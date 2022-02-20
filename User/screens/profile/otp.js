import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { gql, useMutation } from "@apollo/client";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
let STORAGE_KEY = "USER_DATA";
const baseUrl = "http://192.168.43.187:5000";

const Verify_OTP = gql`
  mutation VERIFY_OTP($phoneNumber: String!, $OTP: String!) {
    CompletePhoneVerification(phoneNumber: $phoneNumber, key: $OTP) {
      ok
      error
      token
    }
  }
`;

// @ts-ignore
function InputOtp({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [otpInput, setOtpInput] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { phoneNumber } = route.params;

  const [CompletePhoneVerification, { data, loading, error }] =
    useMutation(Verify_OTP);

  if (loading) {
    console.log("submitting");
  }
  if (error) {
    console.log(error);
  }

  const verifyOtp = () => {
    CompletePhoneVerification({ variables: { phoneNumber, OTP: otpInput } })
      .then(({ data }) => {
        console.log(OTP);
        console.log(otpInput);

        console.log(data);
        //   navigation.navigate("Home");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const ResendOtp = () => {
    verifyOtp;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={[styles.column, { width: "20%" }]}>
            <TouchableOpacity
              style={[styles.backButton, { height: 50 }]}
              onPress={() => navigation.navigate("Home")}
            >
              <FontAwesomeIcon name="chevron-left" size={16} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
        {/*<Image style={styles.logo} source={logoWhite} />*/}
        <Text style={styles.caption}>Verify {"\n"}Phone Number </Text>
        <Text style={styles.text}>
          Check your SMS message, We have sent you {"\n"} OTP at {phoneNumber}
        </Text>
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <SmoothPinCodeInput
            cellSize={50}
            codeLength={6}
            cellStyle={{
              borderWidth: 1,
              borderBottomColor: "#CCC",
              backgroundColor: "#F9F9F9",
              borderRadius: 10,
              borderColor: "#CCC",
            }}
            cellStyleFocused={{
              borderBottomWidth: 1,
              borderBottomColor: "#34A853",
              borderRadius: 10,
              borderColor: "#34A853",
            }}
            textStyle={{
              fontSize: 20,
              fontFamily: "FilsonPro-Regular",
            }}
            value={otpInput}
            onTextChange={(otpInput) => setOtpInput(otpInput)}
            onFulfill={verifyOtp}
          />
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => props.navigation.navigate("Home")}
          >
            <Text style={styles.submitButtonText}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default InputOtp;
