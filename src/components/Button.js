import React from "react";

function Button() {
  return (
    <div  className="mt-[6.666vw] md:mt-8 ">
        <button className="group relative inline-flex items-center justify-center h-[8.2666vw] w-[21.33vw] md:w-[12vw] md:h-[4.8vw] text-[2.4vw] md:text-[1.36vw] rounded-[0.8vw] md:rounded-xl shadow-lg outline-none bg-gradient-to-br from-[#F5AD0D] to-[#F5AD0D] text-white font-medium transition-all duration-200 ease-out hover:text-[#F5AD0D] hover:from-transparent hover:to-transparent hover:shadow-none active:top-0.5 focus:outline-none">

        {/* span::before */}
        <span className="absolute h-0 w-0.5 right-0 top-0 bg-gradient-to-br from-[#F5AD0D] to-[#F5AD0D] transition-all duration-500 ease-out group-hover:h-full" aria-hidden="true"/>
        <span className="absolute left-0 bottom-0 bg-gradient-to-br from-[#F5AD0D] to-[#F5AD0D]transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full" aria-hidden="true"/>
        <a href="#contact">
        Join Now
        </a>
        

        {/* span::after */}
        <span className="absolute left-0 bottom-0 bg-gradient-to-br from-[#F5AD0D] to-[#F5AD0D] transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full" aria-hidden="true"/>
        <span className="absolute w-0 h-0.5 right-0 top-0 bg-gradient-to-br from-[#F5AD0D] to-[#F5AD0D] transition-all duration-500 ease-out group-hover:w-full" aria-hidden="true"/>

        </button>
    </div>
  );
}

export default Button;
