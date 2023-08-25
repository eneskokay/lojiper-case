import React, { useEffect, useState, useContext } from "react";
import Input from "@/components/input";
import globalStyle from "@/styles/common/global";
import { mainColor } from "@/styles/theme/colors";
import shadow from "@/styles/theme/shadows";
import texts from "@/styles/theme/texts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "@react-navigation/native";
import { Formik } from "formik";
import { UserContext } from "@/context/userContext";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
function Login({ navigation }) {
  const [loginState, setLoginState] = useState<boolean | string>("empty");
  const context = useContext(UserContext);
  useEffect(() => {
    if (loginState === true) {
      navigation.replace("booking", { screen: "searchTrip" });
    }
  }, [loginState]);
  return (
    <View style={globalStyle.container}>
      <ScrollView contentContainerStyle={globalStyle.scrollContent}>
        <Image
          style={[
            globalStyle.backgroundImage,
            { height: Dimensions.get("window").height },
          ]}
          source={require("../../../assets/background.png")}
        />
        <View style={globalStyle.centeredContent}>
          <View
            style={[
              globalStyle.circle,
              {
                height: 150,
                width: 150,
                marginBottom: 16,
                backgroundColor: mainColor,
              },
              shadow.black,
            ]}
          >
            <Image
              source={require("../../../assets/logo.png")}
              style={{ height: 85, width: 85 }}
            />
          </View>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              let users = JSON.parse(await AsyncStorage.getItem("users")) || [];
              let result = false;
              users.forEach((item) => {
                if (
                  item.email === values.email &&
                  item.password === values.password
                ) {
                  result = true;
                  context.setUser(item);
                }
              });
              setLoginState(result);
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={globalStyle.formContainer}>
                <View style={globalStyle.inputContainer}>
                  <Input
                    error={!loginState}
                    placeholder="Mail Adresi"
                    width={320}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    keyboardType="email-address"
                  />
                </View>
                <View style={globalStyle.inputContainer}>
                  <Input
                    error={!loginState}
                    placeholder="Şifre"
                    width={320}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    type="password"
                  />
                </View>
                {!loginState && (
                  <View style={{ marginTop: 5 }}>
                    <Text style={{ color: "red", fontSize: 13 }}>
                      Mail Adresi Veya Şifre Hatalı!
                    </Text>
                  </View>
                )}
                <TouchableOpacity
                  onPress={() => {
                    handleSubmit();
                  }}
                  style={[globalStyle.button]}
                >
                  <Text style={[texts.text_400, { color: "white" }]}>
                    Giriş Yap
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
          <Link to={"/register"}>
            <Text style={[globalStyle.link, texts.text_100]}>
              Hesabınız Yok Mu?
            </Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}

export default Login;
