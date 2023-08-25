import { useState, useEffect, useContext } from "react";
import RadioButton from "@/components/radioButton";
import { citiesData } from "@/constants/cities";
import { Formik } from "formik";
import { SelectList } from "react-native-dropdown-select-list";
import { Text, TouchableOpacity, View } from "react-native";
import globalStyle from "@/styles/common/global";
import texts from "@/styles/theme/texts";
import CalendarPicker from "react-native-calendar-picker";
import Toast from "react-native-simple-toast";
import { trips } from "@/constants/trips";
import { DateRangeTypes } from "./types";
import { BookingContext } from "@/context/bookingContext";

function SearchTrip({ navigation }) {
  const [radioButtons, setRadioButtons] = useState([
    { selected: true, title: "Tek Yön", key: "single" },
    { selected: false, title: "Gidiş Dönüş", key: "return" },
  ]);
  const [calenderState, setCalenderState] = useState(false);
  const [dateRange, setDateRange] = useState<DateRangeTypes>({});
  const [availableTrips, setAvailableTrips] = useState<object[]>([]);
  const [errorState, setErrorState] = useState(false);
  const [navigateState, setNavigateState] = useState(false);
  const context = useContext(BookingContext);
  useEffect(() => {
    setDateRange({});
    setCalenderState(false);
  }, [radioButtons]);

  useEffect(() => {
    if (navigateState !== false) {
      if (availableTrips.length > 0) {
        context.setAvailableTrips(availableTrips);
        navigation.navigate("listTrip");
      } else {
        setErrorState(true);
      }
    }
  }, [navigateState]);

  return (
    <View
      style={[
        globalStyle.container,
        { display: "flex", alignItems: "center", width: "100%" },
      ]}
    >
      <Formik
        initialValues={{
          tripType: "single",
          from: "",
          to: "",
        }}
        onSubmit={async (values) => {
          if (
            ((Object.keys(dateRange).length === 1 &&
              radioButtons[0].selected) ||
              (Object.keys(dateRange).length === 2 &&
                radioButtons[1].selected)) &&
            values.from.length > 0 &&
            values.to.length > 0
          ) {
            await trips.forEach((item) => {
              if (
                item.from === values.from &&
                item.to === values.to &&
                item.tripType === values.tripType &&
                item.startDate.getTime() ===
                  new Date(dateRange.selectedStartDate).getTime() &&
                (item.hasOwnProperty("endDate")
                  ? item.endDate.getTime() ===
                    new Date(dateRange.selectedEndDate).getTime()
                  : true)
              ) {
                setAvailableTrips([...availableTrips, item]);
              }
            });
            setNavigateState(true);
          } else {
            Toast.show("Lütfen Tüm Bilgileri Doldurun!", Toast.LONG);
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, setValues }) => (
          <>
            <View style={{ width: 340, paddingVertical: 6 }}>
              <View style={globalStyle.inputContainer}>
                <RadioButton
                  buttons={radioButtons}
                  setButtons={setRadioButtons}
                  handleChange={handleChange("tripType")}
                />
              </View>
              <View style={globalStyle.inputContainer}>
                <SelectList
                  setSelected={handleChange("from")}
                  data={citiesData}
                  placeholder="Nereden"
                  searchPlaceholder="Şehir Ara"
                />
              </View>
              <View style={globalStyle.inputContainer}>
                <SelectList
                  setSelected={handleChange("to")}
                  data={citiesData}
                  placeholder="Nereye"
                  searchPlaceholder="Şehir Ara"
                />
              </View>
              <TouchableOpacity
                onPress={() => setCalenderState(!calenderState)}
                style={[
                  globalStyle.button,
                  {
                    backgroundColor: "rgba(0,0,0,0)",
                    borderWidth: 1,
                    width: "100%",
                    marginVertical: 6,
                  },
                ]}
              >
                <Text style={[texts.text_200, { color: "gray" }]}>
                  Tarih Seçin
                </Text>
              </TouchableOpacity>
            </View>
            {calenderState && (
              <View>
                <CalendarPicker
                  startFromMonday={true}
                  allowRangeSelection={
                    values.tripType === "single" ? false : true
                  }
                  // minDate={"08-25-23"}
                  // maxDate={maxDate}
                  weekdays={["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"]}
                  months={[
                    "Ocak",
                    "Şubat",
                    "Mart",
                    "Nisan",
                    "Mayıs",
                    "Haziran",
                    "Temmuz",
                    "Ağustos",
                    "Eylüs",
                    "Ekim",
                    "Kasım",
                    "Aralık",
                  ]}
                  previousTitle="Önceki"
                  nextTitle="İleri"
                  todayBackgroundColor="#e6ffe6"
                  selectedDayColor="#66ff33"
                  selectedDayTextColor="#000000"
                  scaleFactor={375}
                  textStyle={{
                    color: "#000000",
                  }}
                  onDateChange={(date, type) => {
                    if (type === "END_DATE") {
                      setDateRange({
                        selectedStartDate: dateRange["selectedStartDate"],
                        selectedEndDate: date,
                      });
                    } else {
                      setDateRange({
                        selectedStartDate: date,
                      });
                    }
                  }}
                />
              </View>
            )}
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={globalStyle.button}
            >
              <Text style={[texts.text_200, { color: "white" }]}>Ara</Text>
            </TouchableOpacity>
            {errorState && (
              <View style={globalStyle.errorContainer}>
                <Text style={[texts.text_200, { color: "red" }]}>
                  Aradığınız Kriterlerde Bir Seyahat Bulunamadı
                </Text>
              </View>
            )}
          </>
        )}
      </Formik>
    </View>
  );
}

export default SearchTrip;
