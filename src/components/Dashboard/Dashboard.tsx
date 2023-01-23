import React, { useEffect } from "react";
import { PortalResponse } from "../../types/api";
import Portal from "../Portal/Portal";
import styles from "./Dashboard.module.scss";
import { useQuery } from "react-query";
const portalsURL = "https://breaking-api.alpha.tv2.no/v1/public/portals?page=1";

export default function Dashboard() {
  const getPortals = async () => {
    const res = await fetch(portalsURL);
    return res.json();
  };

  const { data, error } = useQuery<PortalResponse, Error>(
    "portals",
    getPortals
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      {error && <h2>{error.message}</h2>}
      {data?.docs.map((portal) => (
        <Portal key={portal._id} portal={portal} />
      ))}
      {/* For testing without API */}
      {/* {portalsArray.map((portal) => (
        <Portal key={portal.id} portal={portal} />
      ))} */}
    </div>
  );
}
