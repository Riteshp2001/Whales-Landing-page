const testimonials = [
  {
    name: "Jack F",
    position: "Ex Blackrock PM",
    comment:
      "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
  },
  {
    name: "Yash P",
    position: "Research, 3poch Crypto Hedge Fund",
    comment:
      "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
  },
  {
    name: "Shiv S",
    position: "Co-Founder Magik Labs",
    comment:
      "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
  },
];

export default testimonials;

const notificationData = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 9.33301C21 7.47649 20.2625 5.69601 18.9497 4.38326C17.637 3.07051 15.8565 2.33301 14 2.33301C12.1435 2.33301 10.363 3.07051 9.05025 4.38326C7.7375 5.69601 7 7.47649 7 9.33301C7 17.4997 3.5 19.833 3.5 19.833H24.5C24.5 19.833 21 17.4997 21 9.33301Z"
          fill="#165DFF"
          fill-opacity="0.1"
          stroke="black"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.0181 24.5C15.813 24.8536 15.5186 25.1471 15.1644 25.3511C14.8102 25.5551 14.4086 25.6625 13.9998 25.6625C13.591 25.6625 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1866 24.8536 11.9814 24.5"
          stroke="black"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Save",
    bottomText: " hello@gmail.com",
    middleText: "We’ll be sending notifications to you here",
    first: "yes",
  },
  {
    icon: (
      <svg
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.0996 25.9004V11.9004"
          stroke="black"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.7002 25.9V3.5"
          stroke="black"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.2998 25.9V17.5"
          stroke="black"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: (
      <div style={{ padding: "10px 0" }}>
        Notify me when any wallets move more than
      </div>
    ),
    middleText: "1000$",
  },
  {
    icon: (
      <svg
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.4001 25.6663C20.8434 25.6663 26.0667 20.443 26.0667 13.9997C26.0667 7.55635 20.8434 2.33301 14.4001 2.33301C7.95674 2.33301 2.7334 7.55635 2.7334 13.9997C2.7334 20.443 7.95674 25.6663 14.4001 25.6663Z"
          stroke="black"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.4004 7V14L19.0671 16.3333"
          stroke="black"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: (
      <div style={{ padding: "10px 0" }}>
        Notify me when any wallet dormant for
      </div>
    ),
    middleText: "> 30 days",
    bottomText: "becomes active",
  },
];

export { notificationData };
