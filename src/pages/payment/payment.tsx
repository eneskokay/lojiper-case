import Input from "@/components/input";
import { paymentSchema } from "@/constants/yupSchemas";
import globalStyle from "@/styles/common/global";
import { Formik } from "formik";
import React, { useState, useEffect } from "react";
import { Masks } from "react-native-mask-input";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import texts from "@/styles/theme/texts";

function Payment({ route, navigation }) {
  const [spinnerState, setSpinnerState] = useState<boolean>(false);
  useEffect(() => {
    if (spinnerState) {
      const timeout = setTimeout(() => {
        navigation.replace("success");
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [spinnerState]);
  return (
    <Formik
      initialValues={{
        cardNumber: "",
        cardName: "",
        cvc: "",
        expireDate: "",
      }}
      validationSchema={paymentSchema}
      onSubmit={async (values, { setFieldError }) => {
        setSpinnerState(true);
        console.log("naber");
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
        setFieldError,
      }) => (
        <View style={globalStyle.container}>
          {spinnerState && (
            <View
              style={[
                globalStyle.backgroundImage,
                {
                  top: 0,
                  zIndex: 999,
                  backgroundColor: "rgba(0,0,0,0.5)",
                  height: "100%",
                  justifyContent: "center",
                },
              ]}
            >
              <ActivityIndicator size="large" />
            </View>
          )}

          <ScrollView
            contentContainerStyle={[
              globalStyle.formContainer,
              { paddingVertical: 16 },
            ]}
          >
            <View style={globalStyle.inputContainer}>
              <Input
                placeholder="Kart Üzerindeki İsim"
                error={errors.cardName && touched.cardName}
                width={320}
                height={60}
                maxLength={20}
                value={values.cardName}
                onChangeText={handleChange("cardName")}
                onBlur={handleBlur("cardName")}
              />
              {errors.cardName && touched.cardName && (
                <View style={globalStyle.errorContainer}>
                  <Text style={globalStyle.errorText}>{errors.cardName}</Text>
                </View>
              )}
            </View>
            <View style={globalStyle.inputContainer}>
              <Input
                mask={Masks.CREDIT_CARD}
                placeholder="Kart Numarası"
                error={errors.cardNumber && touched.cardNumber}
                width={320}
                height={60}
                value={values.cardNumber}
                onChangeText={handleChange("cardNumber")}
                onBlur={handleBlur("cardNumber")}
                type={"mask"}
                keyboardType="numeric"
              />
              {errors.cardNumber && touched.cardNumber && (
                <View style={globalStyle.errorContainer}>
                  <Text style={globalStyle.errorText}>{errors.cardNumber}</Text>
                </View>
              )}
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 320,
              }}
            >
              <View style={[globalStyle.inputContainer, { marginRight: 8 }]}>
                <Input
                  placeholder="AA/YY"
                  error={errors.expireDate && touched.expireDate}
                  width={140}
                  maxLength={5}
                  height={60}
                  value={values.expireDate}
                  onChangeText={handleChange("expireDate")}
                  onBlur={handleBlur("expireDate")}
                  type={"mask"}
                  mask={[[/\d/], [/\d/], "/", /\d/, /\d/]}
                />
                {errors.expireDate && touched.expireDate && (
                  <View style={globalStyle.errorContainer}>
                    <Text style={globalStyle.errorText}>
                      {errors.expireDate}
                    </Text>
                  </View>
                )}
              </View>
              <View style={globalStyle.inputContainer}>
                <Input
                  placeholder="CVC/CVV"
                  error={errors.cvc && touched.cvc}
                  width={160}
                  height={60}
                  value={values.cvc}
                  maxLength={3}
                  onChangeText={handleChange("cvc")}
                  onBlur={handleBlur("cvc")}
                />
                {errors.cvc && touched.cvc && (
                  <View style={globalStyle.errorContainer}>
                    <Text style={globalStyle.errorText}>{errors.cvc}</Text>
                  </View>
                )}
              </View>
            </View>
            <TouchableOpacity
              style={[globalStyle.button, { marginTop: 20 }]}
              onPress={() => {
                console.log("errors:", errors);
                handleSubmit();
              }}
            >
              <Text style={[texts.text_300, { color: "white" }]}>
                Ödeme Yap
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
}

export default Payment;
