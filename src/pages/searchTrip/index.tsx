import { useState } from "react";
import RadioButton from "@/components/radioButton";
import { citiesData } from "@/constants/cities";
import { Formik } from "formik";
import { SelectList } from "react-native-dropdown-select-list";
import { Text, TouchableOpacity, View } from "react-native";
import globalStyle from "@/styles/common/global";
import texts from "@/styles/theme/texts";
import CalendarPicker from "react-native-calendar-picker";

function SearchTrip({ navigation }) {
  const [radioButtons, setRadioButtons] = useState([
    { selected: true, title: "Tek Yön", key: "single" },
    { selected: false, title: "Gidiş Dönüş", key: "return" },
  ]);
  const [calenderState, setCalenderState] = useState(false);
  const [dateRange, setDateRange] = useState<object>();
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
        onSubmit={(values) => {
          console.log(values);
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
                onPress={() => setCalenderState(true)}
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
                  Tarih Seç
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={globalStyle.button}
            >
              <Text style={[texts.text_200, { color: "white" }]}>Ara</Text>
            </TouchableOpacity>

            {calenderState && (
              <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={true}
                // minDate={minDate}
                // maxDate={maxDate}
                weekdays={[
                  "Pazartesi",
                  "Salı",
                  "Çarşamba",
                  "Perşembe",
                  "Cuma",
                  "Cumartesi",
                  "Pazar",
                ]}
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
                  fontFamily: "Cochin",
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
                      selectedEndDate: null,
                    });
                  }
                }}
              />
            )}
          </>
        )}
      </Formik>
    </View>
  );
}

export default SearchTrip;
