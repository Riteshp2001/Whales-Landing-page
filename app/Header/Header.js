import CustomCarousel from "../Carousel";
import styles from "./Header.module.css";
import testimonials, { notificationData } from "../information";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <section className={styles.header}>
      <div className={styles.left_col}>
        <div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M25.9998 24H5.99984C5.82482 23.9989 5.65314 23.952 5.50195 23.8638C5.35077 23.7756 5.22539 23.6492 5.13833 23.4974C5.05127 23.3456 5.00559 23.1735 5.00586 22.9985C5.00613 22.8235 5.05233 22.6516 5.13984 22.5C5.96359 21.075 6.99984 17.4762 6.99984 13C6.99984 10.6131 7.94806 8.32387 9.63588 6.63604C11.3237 4.94821 13.6129 4 15.9998 4C18.3868 4 20.676 4.94821 22.3638 6.63604C24.0516 8.32387 24.9998 10.6131 24.9998 13C24.9998 17.4775 26.0373 21.075 26.8623 22.5C26.95 22.6518 26.9962 22.8239 26.9963 22.9991C26.9965 23.1744 26.9506 23.3466 26.8632 23.4985C26.7759 23.6504 26.6501 23.7767 26.4986 23.8647C26.3471 23.9527 26.1751 23.9994 25.9998 24Z"
              fill="white"
            />
            <path
              d="M27.7245 21.9925C27.0308 20.7975 25.9995 17.4163 25.9995 13C25.9995 10.3478 24.946 7.8043 23.0706 5.92893C21.1952 4.05357 18.6517 3 15.9995 3C13.3474 3 10.8038 4.05357 8.92846 5.92893C7.0531 7.8043 5.99953 10.3478 5.99953 13C5.99953 17.4175 4.96703 20.7975 4.27328 21.9925C4.09612 22.2963 4.0022 22.6415 4.00099 22.9931C3.99978 23.3448 4.09133 23.6906 4.2664 23.9956C4.44147 24.3006 4.69388 24.5541 4.99816 24.7304C5.30244 24.9068 5.64784 24.9997 5.99953 25H11.1008C11.3315 26.1289 11.9451 27.1436 12.8377 27.8722C13.7303 28.6009 14.8472 28.9989 15.9995 28.9989C17.1518 28.9989 18.2687 28.6009 19.1614 27.8722C20.054 27.1436 20.6676 26.1289 20.8983 25H25.9995C26.3511 24.9995 26.6964 24.9064 27.0005 24.73C27.3046 24.5535 27.5568 24.3 27.7317 23.9951C27.9066 23.6901 27.9981 23.3444 27.9968 22.9928C27.9956 22.6412 27.9016 22.2962 27.7245 21.9925ZM15.9995 27C15.3793 26.9998 14.7744 26.8074 14.268 26.4492C13.7617 26.0911 13.3788 25.5848 13.172 25H18.827C18.6203 25.5848 18.2374 26.0911 17.731 26.4492C17.2247 26.8074 16.6198 26.9998 15.9995 27ZM5.99953 23C6.96203 21.345 7.99953 17.51 7.99953 13C7.99953 10.8783 8.84238 8.84344 10.3427 7.34315C11.843 5.84285 13.8778 5 15.9995 5C18.1213 5 20.1561 5.84285 21.6564 7.34315C23.1567 8.84344 23.9995 10.8783 23.9995 13C23.9995 17.5063 25.0345 21.3412 25.9995 23H5.99953Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={styles.left_col_middle_text}>
          Get notified when a <br />
          highly correlated
          <br />
          whale makes a move
        </div>
        <div className={styles.left_col_bottom_text}>
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </div>
      </div>
      <div className={styles.right_col}>
        <div
          className="whitespace-nowrap"
          style={{
            transform: `translate3d(${-index * 100}%, 0, 0)`,
            transition: "transform 0.3s ease-in-out",
            opacity: 1,
          }}
        >
          {notificationData.map((notification, notificationIndex) => (
            <span key={notificationIndex}>
              <Notifications notification={notification} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Notifications({ notification }) {
  return notification.first ? (
    <div className={`${styles.right_col_container}`}>
        <div className={styles.right_col_container_top}>
          <span>{notification.icon}</span>
          <span>{notification.title}</span>
        </div>
        <div className={styles.right_col_container_middle}>
          <div>
            <span style={{ padding: "10px 0 0 0" }}>
              {notification.middleText}
            </span>
          </div>
          {notification.bottomText && (
            <div
              className={styles.right_col_container_bottom_notification_common}
            >
              {notification.bottomText}

              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.79965 4.59953L6.17719 6.97704C6.24553 7.04538 6.35633 7.04538 6.42467 6.97704L8.80215 4.59953C8.9124 4.48928 8.83435 4.30078 8.67839 4.30078H3.9234C3.76749 4.30078 3.68941 4.48928 3.79965 4.59953Z"
                    fill="#96979A"
                  />
                </svg>
              </span>
            </div>
          )}
      </div>
    </div>
  ) : (
    <div className={`${styles.right_col_container}`}>
        <div className={styles.right_col_container_top}>
          <span>{notification.icon}</span>
          <span>
            <input
              title="checkbox"
              type="checkbox"
              checked
			  className={styles.input_box_checked}
            />
          </span>
        </div>
        <div className={styles.right_col_container_middle}>
          {notification.title}
          <div
            className={styles.right_col_container_bottom_notification_common}
          >
            <span>{notification.middleText}</span>
            <span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.79965 4.59953L6.17719 6.97704C6.24553 7.04538 6.35633 7.04538 6.42467 6.97704L8.80215 4.59953C8.9124 4.48928 8.83435 4.30078 8.67839 4.30078H3.9234C3.76749 4.30078 3.68941 4.48928 3.79965 4.59953Z"
                  fill="#96979A"
                />
              </svg>
            </span>
          </div>
          {notification.bottomText && (
            <div style={{ padding: "10px 0 0 0" }}>
              {notification.bottomText}
            </div>
          )}
        </div>
    </div>
  );
}
