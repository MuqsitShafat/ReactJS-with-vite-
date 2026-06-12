import React from "react";
import Upload from "lucide-react/dist/esm/icons/upload";
import Star from "lucide-react/dist/esm/icons/star";
import Bookmark from "lucide-react/dist/esm/icons/bookmark";
import styles from "./Card.module.css";
const Card = (props) => {
  return (
    console.log(props),
    (
      <div className={styles.card}>
        <div className={styles.parent}>
          <div className={styles.top}>
            <Upload color="black" size={20} />
          </div>
          <div className={styles.hero}>
            <img
              src="https://i.pinimg.com/1200x/c9/26/54/c92654f51926c675ea63f5ba4460941c.jpg"
              alt="Random Image"
            />
            <h1>{props.name}</h1>
            <p>{props.profession}</p>
          </div>
          <div className={styles.skill}>
           {props.skill.map((item,index) => {
              return <h2 key={index}>{item}</h2>;
            }
            )}
          </div>
          <div className={styles.experience}>
            <div className={styles.rating}>
              <div>
                <Star color="black" size = {20}/>
                <p style={{ fontWeight: "bold" }}>4.5</p>
              </div>
              <div>
                <p>Rating</p>
              </div>
            </div>
            <div className={styles.earning}>
              <p style={{ fontWeight: "bold" }}>$5000+</p>
              <p>Earned</p>
            </div>
            <div className={styles.price}>
              <p style={{ fontWeight: "bold" }}>$100/hr</p>
              <p>Rate</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <button>
              <p>Get in touch </p>
            </button>
            <div>
              <Bookmark size={18} color="black" />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Card;
