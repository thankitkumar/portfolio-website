
'use client';

import Link from 'next/link';

// SVG for WhatsApp Icon
const WhatsAppIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.61 15.33 3.48 16.79L2 22L7.32 20.56C8.73 21.33 10.34 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.13C10.56 20.13 9.14 19.72 7.96 19L7.53 18.75L4.3 19.7L5.29 16.57L5.02 16.12C4.16 14.81 3.82 13.29 3.82 11.91C3.82 7.39 7.51 3.7 12.04 3.7C16.57 3.7 20.26 7.39 20.26 11.91C20.26 16.43 16.57 20.13 12.04 20.13ZM16.54 14.53C16.32 14.42 15.05 13.8 14.83 13.71C14.61 13.62 14.45 13.58 14.28 13.85C14.11 14.12 13.62 14.69 13.45 14.87C13.28 15.04 13.12 15.06 12.89 14.95C12.67 14.84 11.79 14.54 10.78 13.64C10.02 12.96 9.49 12.11 9.35 11.84C9.22 11.57 9.32 11.43 9.43 11.32C9.53 11.21 9.67 11.03 9.8 10.88C9.92 10.75 9.97 10.63 10.06 10.45C10.14 10.28 10.1 10.13 10.03 10.02C9.95 9.91 9.41 8.57 9.19 8.07C8.98 7.56 8.75 7.62 8.59 7.61C8.45 7.61 8.28 7.61 8.11 7.61C7.94 7.61 7.66 7.67 7.44 7.94C7.22 8.21 6.64 8.75 6.64 9.95C6.64 11.15 7.47 12.29 7.6 12.47C7.72 12.64 9.23 15.05 11.57 15.99C12.07 16.19 12.43 16.33 12.73 16.43C13.25 16.58 13.71 16.54 14.01 16.31C14.36 16.04 14.93 15.41 15.11 15.06C15.29 14.72 15.29 14.42 15.22 14.31C15.15 14.2 14.98 14.12 14.75 14.01C14.53 13.9 16.76 14.64 16.54 14.53Z"
    />
  </svg>
);

// SVG for Slack Icon
const SlackIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M5.042 15.164a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.164a2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.164A2.528 2.528 0 0 1 8.839 17.687a2.528 2.528 0 0 1 2.521 2.521v5.042a2.528 2.528 0 0 1-2.521 2.521A2.528 2.528 0 0 1 6.313 25.25v-10.086zM8.839 5.042a2.528 2.528 0 0 1 2.521-2.52A2.528 2.528 0 0 1 13.88 5.042a2.528 2.528 0 0 1-2.52 2.522H8.84v-2.522zM8.839 6.313a2.528 2.528 0 0 1-2.521-2.521A2.528 2.528 0 0 1 3.797 1.271V6.313a2.528 2.528 0 0 1-2.521 2.521A2.528 2.528 0 0 1 0 6.313h8.839zM17.688 8.839a2.528 2.528 0 0 1-2.522-2.521A2.528 2.528 0 0 1 17.688 3.797a2.528 2.528 0 0 1 2.52 2.521v2.521h-2.52zM16.416 8.839a2.528 2.528 0 0 1-2.521 2.521A2.528 2.528 0 0 1 11.375 13.88V8.839a2.528 2.528 0 0 1 2.521-2.522A2.528 2.528 0 0 1 16.416 8.839zM18.958 17.688a2.528 2.528 0 0 1 2.522-2.522A2.528 2.528 0 0 1 24 17.688a2.528 2.528 0 0 1-2.52 2.52h-2.522v-2.52zM17.688 16.416a2.528 2.528 0 0 1 2.521 2.521A2.528 2.528 0 0 1 17.688 21.458v-5.042a2.528 2.528 0 0 1 2.521-2.521A2.528 2.528 0 0 1 22.73 16.416h-5.042z"></path>
  </svg>
);

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      <Link
        href="https://wa.me/yourphonenumber" // Replace with your WhatsApp number link
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center"
      >
        <WhatsAppIcon />
      </Link>
      <Link
        href="https://yourworkspace.slack.com" // Replace with your Slack link
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on Slack"
        className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center"
      >
        <SlackIcon />
      </Link>
    </div>
  );
}
