// import React, { useState } from "react";
// import "./Main.css";
// import { Input } from "antd";
// import { RadiusUprightOutlined } from "@ant-design/icons";
// import { MoreOutlined } from "@ant-design/icons";
// import "antd/dist/antd.css";
// // import CloudIcon from "@material-ui/icons/Cloud";
// import Storm from "../Images/storm.png";
// import Drop from "../Images/drop.png";
// import Rain from "../Images/rain.png";
// import Wind from "../Images/wind.png";
// import Stormy from "../Images/stormyy.png";
// import Wind1 from "../Images/wind-1.png";
// import axios from "axios";

// const api = {
//   key: "06891275b3d8d3eea70d16e34f5cdf42",
//   base: "https://api.openweathermap.org/data/2.5/",
// };

// function Main() {
//   const [query, setQuery] = useState("");
//   const [weather, setWeather] = useState("");

//   const search = async (evt) => {
//     const weatherURL = await axios.get(
//       `${api.base}weather?q=${query}&units=metric$APPID=${api.key}`
//     );
//     if(weatherURL){
//       const data = await weatherURL.data;
//       return data;
//     }

//   };
//   // const search = (evt) => {
//   //   if (evt.key === "Enter") {
//   //     fetch(`${api.base}weather?q=${query}&units=metric$APPID=${api.key}`)
//   //       .then((res) => res.json())
//   //       .then((result) => {
//   //         setWeather(result);
//   //         setQuery("");
//   //         console.log(result);
//   //       });
//   //   }
//   // };

//   const dateBuilder = (d) => {
//     let months = [
//       "January",
//       "Febuary",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];
//     let days = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();

//     return `${day} ${date} ${month}, ${year}`;
//   };

//   return (
// <>
//         {weather ? (
//           <div>
//             <div>
//       <div>weatherInput</div>
//       <div>weather dateiv>
//       <div>weather country</div>
//       <div>weather temperature</div>
//       <div>weather description</div>
//     </div>
// ):(
//   <div>
//       <div>weatherInput</div>
//       <div>weather dateiv>
//       <div>no country</div>
//       <div>default null</div>
//       <div>no description</div>
//     </div>
//           </div>
// )}
//   </>
//   )
//  }

// export default Main;
