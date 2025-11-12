import React from 'react';

const User = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx="30" cy="30" r="30" fill="#B1EAEA" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.9682 34.21L36.6667 34.5161L36.3652 34.2099C35.8166 33.6493 35.0653 33.3333 34.2809 33.3333C33.4966 33.3333 32.7453 33.6493 32.1967 34.2099V34.2099C31.0456 35.386 31.0456 37.2665 32.1967 38.4426L35.0168 41.3061C35.4511 41.7499 36.0458 42 36.6667 42C37.2876 42 37.8823 41.7499 38.3166 41.3061L41.1367 38.4427C42.2878 37.2666 42.2878 35.3861 41.1367 34.21V34.21C40.5881 33.6494 39.8368 33.3334 39.0524 33.3334C38.268 33.3334 37.5167 33.6494 36.9682 34.21Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M27.3333 34H23.3333C20.3878 34 18 36.3878 18 39.3333V40.6667"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <circle
            cx="28.6667"
            cy="23.3333"
            r="5.33333"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default User;

