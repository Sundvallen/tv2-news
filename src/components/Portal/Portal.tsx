import React from "react";
import { PortalResponseDoc } from "../../types/api";
import styles from "./Portal.module.scss";
import { useNavigate } from "react-router-dom";
interface PortalProps {
  portal: PortalResponseDoc;
}

export default function Portal({ portal }: PortalProps) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/${portal.slug}`, {
      state: { id: portal.id, category: portal.category },
    });
  };

  return (
    <div onClick={onClick} className={styles.container}>
      <div className={styles.gradientOverlay}></div>
      <img src={portal.cover.url} alt={portal.cover.caption} />
      <div className={styles.portalInfo}>
        <div className={styles.title}>
          <h2 className={styles.h2}>{portal.name}</h2>
          <div className={styles.underline}></div>
        </div>
      </div>
    </div>
  );
}
