import React from 'react'

import { facebookpage,youtubeChannel } from '../../public/links'
import Image from 'next/image'

export const redirect=(to)=>{
  if(to==="facebook"){
        

  }
  switch (to) {
    case "facebook":
      window.location.href = facebookpage;
      break;
    case "youtube":
      window.location.href = youtubeChannel;
      break;
    case "whats":
      window.location.href = "https://api.whatsapp.com/send?phone=201005648558";
      break;
      
    case "googleplay":
      window.location.href = "https://play.google.com/store/apps/dev?id=9078600099442670934"
      break;

    default:
      break;
  }


}
export default function LeftSide() {
  return (
    <div className="bg-white  min-h-full  place-items-center items-center flex	justify-center lg:justify-center sm:items-center ">
      
    </div>
  );
}
