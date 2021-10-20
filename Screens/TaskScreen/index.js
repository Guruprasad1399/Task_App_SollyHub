import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import moment from "moment";
import styles from "./styles";

const TaskScreen = () => {
  const [headeractive, setHeaderactive] = useState(false);
  const [headerUpcoming, setHeaderUpcoming] = useState(false);
  const [headercomplete, setHeadercomplete] = useState(true);

  const temp =
    "https://images.generated.photos/p--89RW6N4zNeT6g00uFWikOyV5ju72bm2x7Klbq_2g/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODEyNzg1LmpwZw.jpg";

  const onHeaderActivePressed = () => {
    setHeaderactive(true);
    setHeaderUpcoming(false);
    setHeadercomplete(false);
  };

  const onHeaderUpcomingPressed = () => {
    setHeaderUpcoming(true);
    setHeaderactive(false);
    setHeadercomplete(false);
  };

  const onHeaderCompletePressed = () => {
    setHeadercomplete(true);
    setHeaderactive(false);
    setHeaderUpcoming(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskdetail}>
        <Pressable
          style={styles.headercontainer}
          onPress={onHeaderActivePressed}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: headeractive ? "#FFC100" : "#556969",
              borderBottomWidth: 2,
              borderBottomColor: headeractive ? "#FFC100" : "#141515",
            }}
          >
            Active
          </Text>
        </Pressable>
        <Pressable
          style={styles.headercontainer}
          onPress={onHeaderUpcomingPressed}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: headerUpcoming ? "#FFC100" : "#556969",
              borderBottomWidth: 2,
              borderBottomColor: headerUpcoming ? "#FFC100" : "#141515",
            }}
          >
            Upcoming
          </Text>
        </Pressable>
        <Pressable
          style={styles.headercontainer}
          onPress={onHeaderCompletePressed}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: headercomplete ? "#FFC100" : "#556969",
              borderBottomWidth: 2,
              borderBottomColor: headercomplete ? "#FFC100" : "#141515",
            }}
          >
            Completed
          </Text>
        </Pressable>
      </View>
      <View style={styles.taskcontainer}>
        <View style={styles.textContainer}>
          <Text style={styles.txt}>Task name</Text>
        </View>
        <View style={styles.taskstatus}>
          <View style={styles.circlecontainer}>
            <Text style={styles.txt1}>Completed</Text>
            <View style={styles.tickicon}>
              <AntDesign name="check" size={24} color="#FAFAFA" />
            </View>
          </View>
        </View>
        <View style={styles.calendaricon}>
          <AntDesign name="calendar" size={18} color="#556969" />
          <Text style={styles.datecontainer}>
            {moment().format("HH:mm,Do MMMM, YYYY")}
          </Text>
          <Octicons
            name="location"
            size={15.5}
            color="#556969"
            style={styles.location}
          />
          <Text style={styles.pickuplocation}>Pick up location</Text>
          <Text style={styles.dashedlines}>----------</Text>
          <View style={styles.cont}>
            <View style={styles.circlesContainer}>
              <TouchableOpacity style={styles.circle_1} />
              <TouchableOpacity style={styles.circle_2} />
            </View>
          </View>
          <Text style={styles.dropofflocation}>Drop off location</Text>
          <Text style={styles.pickupad}>402 Stallion Rd....</Text>
          <Text style={styles.dropoffaddress}>51 Lakeview Rd....</Text>
        </View>
        <View style={styles.driverInfo}>
          <Image
            source={{
              uri: temp,
            }}
            style={styles.img}
            resizeMode="contain"
          />
          <Text style={styles.drivername}>John Vijay</Text>
          <Entypo
            name="star"
            size={20}
            color="#EB7F01"
            style={styles.staricon}
          />
          <Text style={styles.rating}>4.5</Text>
          <TouchableOpacity style={styles.btn1}>
            <FontAwesome5
              name="phone-alt"
              size={13}
              color="#2DAF95"
              style={styles.phoneicon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Feather
              name="mail"
              size={16}
              color="#2DAF95"
              style={styles.mailicon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.taskcontainer}>
        <View style={styles.textContainer}>
          <Text style={styles.txt}>Task name</Text>
        </View>
        <View style={styles.taskstatus}>
          <View style={styles.circlecontainer}>
            <Text style={styles.txt1}>Completed</Text>
            <View style={styles.tickicon}>
              <AntDesign name="check" size={24} color="#FAFAFA" />
            </View>
          </View>
        </View>
        <View style={styles.calendaricon}>
          <AntDesign name="calendar" size={18} color="#556969" />
          <Text style={styles.datecontainer}>
            {moment().format("HH:mm,Do MMMM, YYYY")}
          </Text>
          <Octicons
            name="location"
            size={15.5}
            color="#556969"
            style={styles.location}
          />
          <Text style={styles.pickuplocation}>Pick up location</Text>
          <Text style={styles.dashedlines}>----------</Text>
          <View style={styles.cont}>
            <View style={styles.circlesContainer}>
              <TouchableOpacity style={styles.circle_1} />
              <TouchableOpacity style={styles.circle_2} />
            </View>
          </View>
          <Text style={styles.dropofflocation}>Drop off location</Text>
          <Text style={styles.pickupad}>402 Stallion Rd....</Text>
          <Text style={styles.dropoffaddress}>51 Lakeview Rd....</Text>
        </View>
        <View style={styles.driverInfo}>
          <Image
            source={{
              uri: temp,
            }}
            style={styles.img}
            resizeMode="contain"
          />
          <Text style={styles.drivername}>John Vijay</Text>
          <Entypo
            name="star"
            size={20}
            color="#EB7F01"
            style={styles.staricon}
          />
          <Text style={styles.rating}>4.5</Text>
          <TouchableOpacity style={styles.btn1}>
            <FontAwesome5
              name="phone-alt"
              size={13}
              color="#2DAF95"
              style={styles.phoneicon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Feather
              name="mail"
              size={16}
              color="#2DAF95"
              style={styles.mailicon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.taskcontainer}>
        <View style={styles.textContainer}>
          <Text style={styles.txt}>Task name</Text>
        </View>
        <View style={styles.taskstatus}>
          <View style={styles.circlecontainer}>
            <Text style={styles.txt1}>Completed</Text>
            <View style={styles.tickicon}>
              <AntDesign name="check" size={24} color="#FAFAFA" />
            </View>
          </View>
        </View>
        <View style={styles.calendaricon}>
          <AntDesign name="calendar" size={18} color="#556969" />
          <Text style={styles.datecontainer}>
            {moment().format("HH:mm,Do MMMM, YYYY")}
          </Text>
          <Octicons
            name="location"
            size={15.5}
            color="#556969"
            style={styles.location}
          />
          <Text style={styles.pickuplocation}>Pick up location</Text>
          <Text style={styles.dashedlines}>----------</Text>
          <View style={styles.cont}>
            <View style={styles.circlesContainer}>
              <TouchableOpacity style={styles.circle_1} />
              <TouchableOpacity style={styles.circle_2} />
            </View>
          </View>
          <Text style={styles.dropofflocation}>Drop off location</Text>
          <Text style={styles.pickupad}>402 Stallion Rd....</Text>
          <Text style={styles.dropoffaddress}>51 Lakeview Rd....</Text>
        </View>
        <View style={styles.driverInfo}>
          <Image
            source={{
              uri: temp,
            }}
            style={styles.img}
            resizeMode="contain"
          />
          <Text style={styles.drivername}>John Vijay</Text>
          <Entypo
            name="star"
            size={20}
            color="#EB7F01"
            style={styles.staricon}
          />
          <Text style={styles.rating}>4.5</Text>
          <TouchableOpacity style={styles.btn1}>
            <FontAwesome5
              name="phone-alt"
              size={13}
              color="#2DAF95"
              style={styles.phoneicon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Feather
              name="mail"
              size={16}
              color="#2DAF95"
              style={styles.mailicon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.taskcontainer}>
        <View style={styles.textContainer}>
          <Text style={styles.txt}>Task name</Text>
        </View>
        <View style={styles.taskstatus}>
          <View style={styles.circlecontainer}>
            <Text style={styles.txt1}>Completed</Text>
            <View style={styles.tickicon}>
              <AntDesign name="check" size={24} color="#FAFAFA" />
            </View>
          </View>
        </View>
        <View style={styles.calendaricon}>
          <AntDesign name="calendar" size={18} color="#556969" />
          <Text style={styles.datecontainer}>
            {moment().format("HH:mm,Do MMMM, YYYY")}
          </Text>
          <Octicons
            name="location"
            size={15.5}
            color="#556969"
            style={styles.location}
          />
          <Text style={styles.pickuplocation}>Pick up location</Text>
          <Text style={styles.dashedlines}>----------</Text>
          <View style={styles.cont}>
            <View style={styles.circlesContainer}>
              <TouchableOpacity style={styles.circle_1} />
              <TouchableOpacity style={styles.circle_2} />
            </View>
          </View>
          <Text style={styles.dropofflocation}>Drop off location</Text>
          <Text style={styles.pickupad}>402 Stallion Rd....</Text>
          <Text style={styles.dropoffaddress}>51 Lakeview Rd....</Text>
        </View>
        <View style={styles.driverInfo}>
          <Image
            source={{
              uri: temp,
            }}
            style={styles.img}
            resizeMode="contain"
          />
          <Text style={styles.drivername}>John Vijay</Text>
          <Entypo
            name="star"
            size={20}
            color="#EB7F01"
            style={styles.staricon}
          />
          <Text style={styles.rating}>4.5</Text>
          <TouchableOpacity style={styles.btn1}>
            <FontAwesome5
              name="phone-alt"
              size={13}
              color="#2DAF95"
              style={styles.phoneicon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Feather
              name="mail"
              size={16}
              color="#2DAF95"
              style={styles.mailicon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaskScreen;
