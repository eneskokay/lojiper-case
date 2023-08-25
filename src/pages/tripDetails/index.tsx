import { View, Text, TouchableOpacity } from "react-native";
import globalStyle from "@/styles/common/global";
import { trips } from "@/constants/trips";
import styles from "@/styles/pages/tripDetails";
import TicketCard from "@/components/ticketCard";
import tripDetailsData from "@/constants/tripDetails";
import shadow from "@/styles/theme/shadows";
import Icon from "@/components/icon";
import texts from "@/styles/theme/texts";
import { useContext, useState } from "react";
import Input from "@/components/input";
import validationSchema from "@/constants/yupSchema";
import { Formik } from "formik";
import GenderSelector from "@/components/genderSelector";
import { UserContext } from "@/context/userContext";

function TripDetails({ route, navigation }) {
  const id = route.params.id;
  const tripData = trips.find((item) => item.id === id);
  const seatsData = tripDetailsData[id];
  const user = useContext(UserContext).user;
  const [clients, setClients] = useState([
    { identityNumber: user.identityNumber, gender: user.gender },
  ]);
  const [selectedSeats, setSelectedSeats] = useState([{ naber: "iyidir" }]);

  return (
    <View
      style={[
        globalStyle.container,
        {
          display: "flex",
          alignItems: "center",
          width: "100%",
          paddingVertical: 10,
          paddingHorizontal: 16,
        },
      ]}
    >
      <TicketCard item={tripData} clickable={false} />

      <View style={styles.busContainer}>
        <View style={styles.top}>
          {seatsData.top.map((itemArray) => (
            <View style={styles.seatsContainer}>
              {itemArray.map((item) => (
                <TouchableOpacity style={[shadow.black, styles.seat]}>
                  <Text>
                    {item.type === "empty" ? (
                      <Text style={[texts.text_100, { color: "gray" }]}>
                        BOŞ
                      </Text>
                    ) : (
                      <Icon
                        name={item.type}
                        fill={"gray"}
                        width={24}
                        height={24}
                      />
                    )}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
        <View style={styles.bottom}>
          {seatsData.bottom.map((itemArray) => (
            <View style={styles.seatsContainer}>
              {itemArray.map((item) => (
                <TouchableOpacity style={[shadow.black, styles.seat]}>
                  <Text>
                    {item.type === "empty" ? (
                      <Text style={[texts.text_100, { color: "gray" }]}>
                        BOŞ
                      </Text>
                    ) : (
                      <Icon
                        name={item.type}
                        fill={"gray"}
                        width={24}
                        height={24}
                      />
                    )}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.clientsContainer}>
        <View style={styles.InputsContainer}>
          <Formik
            initialValues={{
              identityNumber: "",
              gender: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({
              handleChange,
              handleBlur,
              setFieldValue,
              values,
              errors,
              touched,
            }) => (
              <>
                <View
                  style={[
                    styles.InputsContainer,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <View style={globalStyle.inputContainer}>
                    <Input
                      error={errors.identityNumber && touched.identityNumber}
                      placeholder="TC"
                      width={170}
                      height={55}
                      value={
                        selectedSeats.length === 0
                          ? user.identityNumber
                          : values.identityNumber
                      }
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
                  <GenderSelector
                    value={
                      selectedSeats.length === 0 ? user.gender : values.gender
                    }
                    setValue={selectedSeats.length === 0 ? null : setFieldValue}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
}

export default TripDetails;
