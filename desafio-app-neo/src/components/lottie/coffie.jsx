import Lottie from "react-lottie";
import React from "react";
import coffieJson from "../../assets/lottie/coffee.json"



function Coffie  ()  {
     const defaltOptions = {
    loop: true,
    autoplay: true,
    animationData: coffieJson,
}



return <Lottie options={defaltOptions} width={180} height={180}  />
}

export default Coffie;