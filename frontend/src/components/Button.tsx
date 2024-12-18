// import React from "react"
// export const Button =(props: React.PropsWithChildren) => {
//     return (
//         <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_112px_#8c45ff]">
//         <div className="absolute inset-0">
//           <div className="rounded-lg border border-white/20 absolute inset-0 mask-image-linear-gradient(to_bottom, black, transparent)">
//             <div className="rounded-lg border absolute inset-0 border-white/40 mask-image-linear-gradient(to-top, black, transparent)"></div>
//             <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_] rounded-lg "></div>
//           </div>
//         </div>
//         <span className="text-white">{props.children}</span>
//       </button>
//     )
// }

import React from 'react';

type ButtonProps = React.PropsWithChildren<{
  className?: string;
  onClick?: () => void;
}>;

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_112px_#8c45ff] ${className || ''}`}
      onClick={onClick}
    >
      <div className="absolute inset-0">
        <div className="rounded-lg border border-white/20 absolute inset-0 mask-image-linear-gradient(to_bottom, black, transparent)">
          <div className="rounded-lg border absolute inset-0 border-white/40 mask-image-linear-gradient(to-top, black, transparent)"></div>
          <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_] rounded-lg "></div>
        </div>
      </div>
      <span className="text-white">{children}</span>
    </button>
  )
}



