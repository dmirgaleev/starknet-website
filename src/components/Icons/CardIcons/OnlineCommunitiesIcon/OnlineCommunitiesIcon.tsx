import React from 'react';
import { CardIconProps } from "../IconInterface";
// online-communities.svg
const OnlineCommunities: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const gradientIdPrefix = `gradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg filter={filter} border-radius={borderRadius} xmlns="http://www.w3.org/2000/svg" width="105" height="82" viewBox="0 0 105 82" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M96.5 50.4107V42H101C102.105 42 103 41.1046 103 40V4C103 2.89543 102.105 2 101 2H45C43.8954 2 43 2.89543 43 4V10H41V4C41 1.79086 42.7909 0 45 0H101C103.209 0 105 1.79086 105 4V40C105 42.2091 103.209 44 101 44H98.5V54.5L87 45.5556V43.0218L96.5 50.4107ZM36 12H4C1.79086 12 0 13.7909 0 16V52C0 54.2091 1.79086 56 4 56H6.5V66.5L19 56.7778V54.3728C18.7283 54.4991 18.4699 54.6563 18.2305 54.8426L8.5 62.4107V54H4C2.89543 54 2 53.1046 2 52V16C2 14.8954 2.89543 14 4 14H36H41H43H46H60C61.1046 14 62 14.8954 62 16V25H64V16C64 13.7909 62.2091 12 60 12H46H43H41H36ZM41 16H43V21V27V29V36V40C43 41.1046 43.8954 42 45 42H60V44H45C42.7909 44 41 42.2091 41 40V36V29V27V21V16ZM39 27H25C22.7909 27 21 28.7909 21 31V48V54V56V63V67C21 69.2091 22.7909 71 25 71H27.5V81.5L40.4583 71.4213C40.8094 71.1482 41.2415 71 41.6862 71H81C83.2091 71 85 69.2091 85 67V51V44.1214V42.0593V36V31C85 28.7909 83.2091 27 81 27H70H64H62H60H45V29H60H62H64H70H81C82.1046 29 83 29.8954 83 31V36V42V44V51V67C83 68.1046 82.1046 69 81 69H41.6862C40.7967 69 39.9326 69.2965 39.2305 69.8426L29.5 77.4107V69H25C23.8954 69 23 68.1046 23 67V63V56V54V48V31C23 29.8954 23.8954 29 25 29H39V27ZM64 31V36V42V44V51V52C64 54.2091 62.2091 56 60 56H25V54H60C61.1046 54 62 53.1046 62 52V51V44V42V36V31H64ZM81 44V42H66V44H81Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <defs>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="105" y1="-26.1415" x2="-43.5745" y2="20.5805" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
      </defs>
    </svg>
  )
};

export default OnlineCommunities;