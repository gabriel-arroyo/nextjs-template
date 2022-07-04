import styles from "./card-template.module.css";
import React from "react";

export interface ICardTemplate {
  sampleTextProp: string;
}

const CardTemplate: React.FC<ICardTemplate> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default CardTemplate;
