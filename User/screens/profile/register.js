import * as React from "react";
import { useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { Text, View } from "../../components/Themed";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// register user

import { gql, useMutation } from "@apollo/client";

const Register = (props) => {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       firstName: "",
  //       lastName: "",
  //       phone: "",
  //       email: "",
  //       isDriver: true,
  //       userName: "",
  //     };
  //   }

  const [email, setEmail] = useState();
  const [firstName, setFirstname] = useState();
  const [lastName, setLastname] = useState();
  const [password, setPassword] = useState();
  const [profilePhoto, setProfilePhoto] = useState();
  const [age, setAge] = useState();
  const [isDriver, setIsDriver] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();

  
  const userDetails = {
    firstname: firstName,
    lastname: lastName,
    password: password,
    number: phoneNumber,
    email: email,
  };

  const userData = async () => {
    try {
      const jsonValue = JSON.stringify(userDetails)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
      alert('Data successfully saved')
    } catch (e) {
      // saving error
    }
  }


  const Verify_USER=gql`
  
  mutation VERIFY_NUMBER(
    $phoneNumber:String!
  ){
    StartPhoneVerification(phoneNumber: $phoneNumber){
      phoneNumber
    }
  }
  `

  // const REGISTER_USER = gql`
  //   mutation SIGNUP_USER(
  //     $firstName: String!
  //     $lastName: String!
  //     $email: String!
  //     $password: String
  //     $profilePhoto: String
  //     $age: Int
  //     $phoneNumber: String!
  //   ) {
  //     EmailSignUp(
  //       firstName: $firstName
  //       lastName: $lastName
  //       email: $email
  //       password: $email
  //       profilePhoto: $profilePhoto
  //       age: $age
  //       phoneNumber: $phoneNumber
  //     ) {
  //       firstName
  //       lastName
  //       email
  //       password
  //       profilePhoto
  //       age
  //       phoneNumber
  //     },

      

  //     # : EmailSignUpResponse!
  //   }
  // `;
  {
    //   props: ({ mutate }) => ({
    //     signup: (
    //       firstName,
    //       lastName,
    //       email,
    //       password,
    //       profilePhoto,
    //       age,
    //       phoneNumber
    //     ) =>
    //       mutate({
    //         variables: {
    //           firstName,
    //           lastName,
    //           email,
    //           password,
    //           profilePhoto,
    //           age,
    //           phoneNumber,
    //         },
    //       }),
    //   });
  }

  // const [EmailSignUp, { data, loading, error }] = useMutation(REGISTER_USER, {
  //   variables: {
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email,
  //     password: password,
  //     profilePhoto: profilePhoto,
  //     age: age,
  //     phoneNumber: phoneNumber,
  //   },
  // });

 


  const [StartPhoneVerification, { data, loading, error }] = useMutation(Verify_USER, {
    variables: {
    phoneNumber: phoneNumber,
    },
  });


  if (loading) {
    console.log("submitting");
  }
  if (error) {
    console.log("error!");
  }
  useEffect(() => {
    
   // console.log(data);
    
  }, []);


  //   sendOtp = () => {
  //     console.log(this.state);

  // this.setState({
  //   userName:
  //     firstName +
  //     lastName +
  //     Math.floor(Math.random() * (999 - 100 + 1) + 100),
  // });
  // props.navigation.navigate("Otp", this.state);

  // AppService.requestOtp(this.state.phone).then(
  //     response => {
  //         console.log(response)
  //         if(response.status === "success"){
  //             showMessage({
  //                 message: response.message,
  //                 type: "danger",
  //                 autoHide: true,
  //                 duration:1000
  //             });
  //             navigation.navigate('Otp', this.state);
  //         }
  //         else{
  //             showMessage({
  //                 message: response.message,
  //                 type: "danger",
  //                 autoHide: true,
  //                 duration:1850
  //             });
  //         }
  //     }
  // )
  //};

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
      <Text style={style.title}>Register</Text>
      <View
        style={style.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TextInput
        label="First name"
        value={firstName}
        autoCapitalize={"none"}
        style={styles.textInput}
        onChangeText={(firstName) => setFirstname(firstName)}
      />
      <TextInput
        label="Last name"
        value={lastName}
        autoCapitalize={"none"}
        style={styles.textInput}
        onChangeText={(lastName) => setLastname(lastName)}
      />
      <TextInput
        label="Email"
        value={email}
        autoCapitalize={"none"}
        style={styles.textInput}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        label="Phone number"
        value={phoneNumber}
        autoCapitalize={"none"}
        style={styles.textInput}
        keyboardType={"numeric"}
        onChangeText={(phone) => setPhoneNumber(phone)}
      />
      <Text style={style.subCaption}>
        {" "}
        By continuing, I confirm that i have read & agreed to the Terms of usage
      </Text>
      <TouchableOpacity
        onPress={() => {
          StartPhoneVerification().then(({ data }) => {
            console.log(phoneNumber);
            props.navigation.navigate("Otp")
           
           // console.log(data)
          }
           
          ).catch(e =>{
            console.log(phoneNumber);
console.log(e.message)}
          )
         
          //  EmailSignUp() .then(({ data }) => {
          //   console.log(data)
          //   })
          //   .catch(e => {
          //    console.log(e.message)
          //   })
        }}
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
    </View>
  );
};

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

export default Register;
