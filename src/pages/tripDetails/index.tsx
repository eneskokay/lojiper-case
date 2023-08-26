import { useEffect } from "react";
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
import GenderSelector from "@/components/genderSelector";
import { UserContext } from "@/context/userContext";
import Toast from "react-native-simple-toast";
import { mainColor } from "@/styles/theme/colors";

function TripDetails({ route, navigation }) {
  const id = route.params.id;
  const tripData = trips.find((item) => item.id === id);
  const [seatsData, setSeatsData] = useState(tripDetailsData[id]);
  const user = useContext(UserContext).user;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [inputGender, setInputGender] = useState<string>("");
  const [inputIdentityNo, setInputIdentityNo] = useState<string>("");
  const totalPrice = selectedSeats.length * tripData.price;

  const selectSeat = (
    type: string,
    section: string,
    itemArray: any,
    id: number
  ) => {
    let error = "";
    if (selectedSeats.length >= 5) {
      error = "En fazla 5 bilet alınabilir!";
    } else if (
      !(inputGender === "man" || inputGender === "woman") ||
      inputIdentityNo.length === 0
    ) {
      error = "Lütfen bilgilerinizi eksiksiz doldurun!";
    }
    if (error.length === 0) {
      let control = itemArray.find(
        (item) => item.type !== "empty" && item.type !== inputGender
      );
      let sameClient = false;
      selectedSeats.forEach((item) => {
        seatsData[item.section][item.index].forEach((arg) => {
          if (arg.id === id) {
            sameClient = true;
            return null;
          }
        });
      });
      if (control && !sameClient) {
        Toast.show("Bu Koltuğu Seçemezsiniz!", Toast.SHORT);
      } else {
        setSeatsData((value) => {
          const newValue = { ...seatsData };
          seatsData[section].forEach((item, index) => {
            item.forEach((arg, indexArg) => {
              if (arg.id === id) {
                newValue[section][index][indexArg].type = inputGender;
                setSelectedSeats([
                  ...selectedSeats,
                  {
                    section: section,
                    index: index,
                    indexArg: indexArg,
                    id: id,
                  },
                ]);
              }
            });
          });
          return newValue;
        });
        setInputGender("");
        setInputIdentityNo("");
      }
    } else {
      Toast.show(error, Toast.SHORT);
    }
  };
  useEffect(() => {
    if (selectedSeats.length === 0) {
      setInputGender(user.gender);
      setInputIdentityNo(user.identityNumber);
    }
  }, []);

  return (
    <View
      style={[
        globalStyle.container,
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingVertical: 10,
          paddingHorizontal: 16,
        },
      ]}
    >
      <View>
        <TicketCard item={tripData} clickable={false} />

        <View style={styles.busContainer}>
          <View style={styles.top}>
            {seatsData.top.map((itemArray, index) => (
              <View style={styles.seatsContainer} key={index}>
                {itemArray.map((item, key) => (
                  <TouchableOpacity
                    key={key}
                    disabled={item.type === "empty" ? false : true}
                    style={[shadow.black, styles.seat]}
                    onPress={() =>
                      selectSeat(item.type, "top", itemArray, item.id)
                    }
                  >
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
            {seatsData.bottom.map((itemArray, index) => (
              <View style={styles.seatsContainer} key={index}>
                {itemArray.map((item, key) => (
                  <TouchableOpacity
                    key={key}
                    disabled={item.type === "empty" ? false : true}
                    style={[shadow.black, styles.seat]}
                    onPress={() =>
                      selectSeat(item.type, "bottom", itemArray, item.id)
                    }
                  >
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
            <>
              <View
                style={[
                  styles.InputsContainer,
                  { justifyContent: "space-between" },
                ]}
              >
                <View style={globalStyle.inputContainer}>
                  <Input
                    placeholder="TC"
                    width={170}
                    height={55}
                    value={
                      selectedSeats.length === 0
                        ? user.identityNumber
                        : inputIdentityNo
                    }
                    onChangeText={
                      selectedSeats.length === 0 ? () => {} : setInputIdentityNo
                    }
                    keyboardType="numeric"
                  />
                </View>
                <GenderSelector
                  disabled={selectedSeats.length === 0}
                  value={selectedSeats.length === 0 ? user.gender : inputGender}
                  setValue={
                    selectedSeats.length === 0 ? () => {} : setInputGender
                  }
                  formik={false}
                />
              </View>
            </>
          </View>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={[texts.text_400, { color: "white" }]}>
          Toplam Tutar: {totalPrice}TL
        </Text>

        <TouchableOpacity
          style={[globalStyle.button, { backgroundColor: "white" }]}
          onPress={() => {
            if (totalPrice > 0) {
              navigation.navigate("payment", { totalPrice });
            }
          }}
        >
          <Text style={[texts.text_400, { color: mainColor }]}>Ödeme Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TripDetails;
