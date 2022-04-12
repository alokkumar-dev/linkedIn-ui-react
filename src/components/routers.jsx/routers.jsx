import { Route, Routes } from "react-router-dom";
import { Home } from "../scripts/Home";
import { Jobs } from "../scripts/Jobs";
import { Messaging } from "../scripts/Messaging";
import { MyNetwork } from "../scripts/MyNetwork";
import { Navbar } from "../scripts/Navbar";
import { Notification } from "../scripts/Notification";

export const AllRouters = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mynetwork" element={<MyNetwork />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </>
  );
};
