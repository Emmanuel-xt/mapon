"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSocket } from "./SocketProvider";

const OnlineShopsContext = createContext([]);

export const OnlineShopsProvider = ({ children }) => {
  const [onlineShops, setOnlineShops] = useState([]);
  const socket = useSocket();

  useEffect(() => {
    const handleOnlineShopsUpdate = (shops) => {
      // Flatten and transform the array of shop objects
      const flattenedShops = shops.flatMap((shopData) => shopData.shops || []);
      setOnlineShops(flattenedShops);
      console.log("online shops =", flattenedShops);
    };

    socket.on("update_online_shops", handleOnlineShopsUpdate);

    return () => {
      socket.off("update_online_shops", handleOnlineShopsUpdate);
    };
  }, [socket]);

  return (
    <OnlineShopsContext.Provider value={onlineShops}>
      {children}
    </OnlineShopsContext.Provider>
  );
};

export const useOnlineShops = () => useContext(OnlineShopsContext);
