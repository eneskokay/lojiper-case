import Input from "@/components/input";
import validationSchema from "@/constants/yupSchema";
import globalStyle from "@/styles/common/global";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import Toast from "react-native-simple-toast";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GenderSelector from "@/components/genderSelector";
import texts from "@/styles/theme/texts";

function Register({ navigation }) {
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
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              identityNumber: "",
              bornDate: "",
              email: "",
              password: "",
              passwordConfirm: "",
              gender: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setFieldError }) => {
              if (values.gender.length === 0) {
                setFieldError("gender", "*Bu alan boş Bırakılamaz!");
              } else {
                let users =
                  JSON.parse(await AsyncStorage.getItem("users")) || [];
                let userExist = false;
                users.length > 0 &&
                  users.find((item) => item.email === values.email) &&
                  (userExist = true);
                !userExist ? (
                  <>
                    {await AsyncStorage.setItem(
                      "users",
                      JSON.stringify([...users, values])
                    )}
                    {navigation.navigate("login")}
                  </>
                ) : (
                  Toast.show(
                    "Bu Email Adresine Sahip Bir Kullanıcı Zaten Var!",
                    Toast.LONG
                  )
                );
              }
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
              <View style={globalStyle.formContainer}>
                <View style={globalStyle.inputContainer}>
                  <Input
                    error={errors.firstName && touched.firstName}
                    placeholder="Ad"
                    width={320}
                    value={values.firstName}
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                  />
                  {errors.firstName && touched.firstName && (
                    <View style={globalStyle.errorContainer}>
                      <Text style={globalStyle.errorText}>
                        {errors.firstName}
                      </Text>
                    </View>
                  )}
                </View>
                <View style={globalStyle.inputContainer}>
                  <Input
                    error={errors.lastName && touched.lastName}
                    placeholder="Soyad"
                    width={320}
                    value={values.lastName}
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                  />
                  {errors.lastName && touched.lastName && (
                    <View style={globalStyle.errorContainer}>
                      <Text style={globalStyle.errorText}>
                        {errors.lastName}
                      </Text>
                    </View>
                  )}
                </View>
                <View style={globalStyle.inputContainer}>
                  <Input
                    error={errors.identityNumber && touched.identityNumber}
                    placeholder="Kimlik No"
                    width={320}
                    value={values.identityNumber}
                    onChangeText={handleChange("identityNumber")}
                    onBlur={handleBlur("identityNumber")}
                    keyboardType="numeric"
                  />
                  {errors.identityNumber && touched.identityNumber && (
                    <View style={globalStyle.errorContainer}>
                      <Text style={globalStyle.errorText}>
                        {errors.identityNumber}
                      </Text>
                    </View>
                  )}
                </View>

                <View style={globalStyle.inputContainer}>
                  <Input
                    error={errors.bornDate && touched.bornDate}
                    placeholder="Doğum Tarihi"
                    width={320}
                    value={values.bornDate}
                    onChangeText={handleChange("bornDate")}
                    onBlur={handleBlur("bornDate")}
                    type="date"
                  />
                  {errors.bornDate && touched.bornDate && (
                    <View style={globalStyle.errorContainer}>
                      <Text style={globalStyle.errorText}>
                        {errors.bornDate}
                      </Text>
                    </View>
                  )}
                </View>
                <View style={globalStyle.inputContainer}>
                  <Input
                    error={errors.email && touched.email}
                    placeholder="Mail Adresi"
                    width={320}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    keyboardType="email-address"
                  />
                  {errors.email && touched.email && (
                    <View style={globalStyle.errorContainer}>
                      <Text style={globalStyle.errorText}>{errors.email}</Text>
                    </View>
                  )}
                </View>
                <View style={globalStyle.inputContainer}>
                  <Input
                    error={errors.password && touched.password}
                    placeholder="Şifre"
                    width={320}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    type="password"
                  />
                  {errors.password && touched.password && (
                    <View style={globalStyle.errorContainer}>
                      <Text style={globalStyle.errorText}>
                        {errors.password}
                      </Text>
                    </View>
                  )}
                </View>
                <View style={globalStyle.inputContainer}>
                  <Input
                    error={errors.passwordConfirm && touched.passwordConfirm}
                    placeholder="Şifre Tekrarı"
                    width={320}
                    value={values.passwordConfirm}
                    onChangeText={handleChange("passwordConfirm")}
                    onBlur={handleBlur("passwordConfirm")}
                    type="password"
                  />
                  {errors.passwordConfirm && touched.passwordConfirm && (
                    <View style={globalStyle.errorContainer}>
                      <Text style={globalStyle.errorText}>
                        {errors.passwordConfirm}
                      </Text>
                    </View>
                  )}
                </View>
                <GenderSelector
                  value={values.gender}
                  setValue={setFieldValue}
                  title={"Cinsiyetinizi Seçin"}
                  formik={true}
                />
                {errors.gender && (
                  <View style={{ marginTop: 5 }}>
                    <Text style={{ color: "red", fontSize: 13 }}>
                      {errors.gender}
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
                    Kayıt Ol
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
}

export default Register;
