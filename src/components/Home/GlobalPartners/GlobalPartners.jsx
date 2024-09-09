// // import { useState } from "react";
// // import Carousel from "react-multi-carousel";
// // import "react-multi-carousel/lib/styles.css";

// // const logos = [
// //   {
// //     name: "Microsoft",
// //     src: "https://i.postimg.cc/65BK5VzD/Rectangle-61.png",
// //     logo: "https://i.postimg.cc/ZRGjwLsj/pngegg-4.png",
// //   },
// //   {
// //     name: "Kaspersky",
// //     src: "https://i.postimg.cc/cHR8NM4F/pngwing-com-8.png",
// //     logo: "https://i.postimg.cc/cHR8NM4F/pngwing-com-8.png",
// //   },
// //   {
// //     name: "Oracle",
// //     src: "https://i.postimg.cc/GtbT384d/pngegg-12.png",
// //     logo: "https://i.postimg.cc/GtbT384d/pngegg-12.png",
// //   },
// // {
// //   name: "Oracle",
// //   src: "https://i.postimg.cc/mDH43wrS/Frame-42.png",
// //   logo: "https://i.postimg.cc/5N7Q1tbW/pngegg-6.png",
// // },
// // {
// //   name: "Sophos",
// //   src: "https://i.postimg.cc/mDH43wrS/Frame-42.png",
// //   logo: "https://i.postimg.cc/76Zyxqqj/pngegg-3.png",
// // },
// // {
// //   name: "Sophos",
// //   src: "https://i.postimg.cc/mDH43wrS/Frame-42.png",
// //   logo: "https://i.postimg.cc/288LPWpx/pngegg-5.png",
// // },
// // {
// //   name: "Microsoft",
// //   src: "https://i.postimg.cc/mDH43wrS/Frame-42.png",
// //   logo: "https://i.postimg.cc/qBGCbLFR/pngegg-7.png",
// // },
// // {
// //   name: "Kaspersky",
// //   src: "https://i.postimg.cc/HxrtR1Wy/Kaspersky-logo-svg-removebg-preview.png",
// //   logo: "https://i.postimg.cc/KjQk1GTL/pngegg-2.png",
// // },
// // ];

// // const GlobalPartners = () => {
// //   const [selectedLogo, setSelectedLogo] = useState(logos[0]);

// //   const handleLogoClick = (logo) => {
// //     setSelectedLogo(logo);
// //   };

// //   const responsive = {
// //     superLargeDesktop: {
// //       breakpoint: { max: 4000, min: 1024 },
// //       items: 8,
// //     },
// //     desktop: {
// //       breakpoint: { max: 1024, min: 768 },
// //       items: 8,
// //     },
// //     tablet: {
// //       breakpoint: { max: 768, min: 464 },
// //       items: 2,
// //     },
// //     mobile: {
// //       breakpoint: { max: 464, min: 0 },
// //       items: 1,
// //     },
// //   };

// //   return (
// //     <div className="mt-20">
// //       <div className="text-5xl uppercase mb-8 text-center font-bold bg-gradient-to-r from-[#013762] via-[#0080E5] bg-clip-text text-transparent">
// //         Global Partners
// //       </div>
// //       <div>
// //         <div className="logo-list container mx-auto mb-3">
// //           <Carousel
// //             responsive={responsive}
// //             infinite={true}
// //             autoPlay={true}
// //             keyBoardControl={true}
// //             transitionDuration={1000}
// //             removeArrowOnDeviceType={[
// //               "tablet",
// //               "mobile",
// //               "desktop",
// //               "superLargeDesktop",
// //             ]}
// //             customTransition="all 0.5s"
// //             containerClass="carousel-container"
// //             itemClass="carousel-item-padding-40-px"
// //           >
// //             {logos.map((logo, index) => (
// //               <div
// //                 key={index}
// //                 onClick={() => handleLogoClick(logo)}
// //                 className={`cursor-pointer pb-4 ${
// //                   selectedLogo.name === logo.name
// //                     ? "border-b-[6px] border-gray-300"
// //                     : ""
// //                 }`}
// //               >
// //                 <img className="h-8" src={logo.logo} alt={logo.name} />
// //               </div>
// //             ))}
// //           </Carousel>
// //         </div>

// //         {selectedLogo && (
          // <div className="grid grid-cols-3 bg-black h-[600px]">
          //   <div className="col-span-1 text-white font-[Inter] flex items-center pl-40">
          //     <div>
          //       <h1 className="font-bold text-5xl mb-2">
          //         Meet {selectedLogo.name.toUpperCase()}
          //       </h1>
          //       <p>
          //         Explore {selectedLogo.name} products and services for your
          //         home or business. Shop Surface, Microsoft 365, Xbox, Windows,
          //         Azure
          //       </p>
          //       <button className="mt-4 bg-gray-500 py-2 px-4 rounded-md">
          //         Read {selectedLogo.name} Stories
          //       </button>
          //     </div>
          //   </div>
          //   <div className="col-span-2">
          //     <img
          //       className="h-[600px]"
          //       src={selectedLogo.src}
          //       alt={selectedLogo.name}
          //       style={{ width: "100%" }}
          //     />
          //   </div>
          // </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default GlobalPartners;
// import { useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const logos = [
//   {
//     name: "Microsoft",
//     src: "https://i.postimg.cc/65BK5VzD/Rectangle-61.png",
//     logo: "https://i.postimg.cc/ZRGjwLsj/pngegg-4.png",
//   },
//   {
//     name: "Kaspersky",
//     src: "https://i.postimg.cc/cHR8NM4F/pngwing-com-8.png",
//     logo: "https://i.postimg.cc/cHR8NM4F/pngwing-com-8.png",
//   },
//   {
//     name: "Oracle",
//     src: "https://i.postimg.cc/GtbT384d/pngegg-12.png",
//     logo: "https://i.postimg.cc/GtbT384d/pngegg-12.png",
//   },
//   {
//     name: "Oracle",
//     src: "https://i.postimg.cc/mDH43wrS/Frame-42.png",
//     logo: "https://i.postimg.cc/5N7Q1tbW/pngegg-6.png",
//   },
//   {
//     name: "Sophos",
//     src: "https://i.postimg.cc/mDH43wrS/Frame-42.png",
//     logo: "https://i.postimg.cc/76Zyxqqj/pngegg-3.png",
//   },
//   {
//     name: "Sophos",
//     src: "https://i.postimg.cc/mDH43wrS/Frame-42.png",
//     logo: "https://i.postimg.cc/288LPWpx/pngegg-5.png",
//   },
//   {
//     name: "Microsoft",
//     src: "https://i.postimg.cc/mDH43wrS/Frame-42.png",
//     logo: "https://i.postimg.cc/qBGCbLFR/pngegg-7.png",
//   },
//   {
//     name: "Kaspersky",
//     src: "https://i.postimg.cc/HxrtR1Wy/Kaspersky-logo-svg-removebg-preview.png",
//     logo: "https://i.postimg.cc/KjQk1GTL/pngegg-2.png",
//   },
// ];

// const GlobalPartners = () => {
//   const [selectedLogo, setSelectedLogo] = useState(logos[0]);

//   const handleLogoClick = (logo) => {
//     setSelectedLogo(logo);
//   };

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 1024 },
//       items: 8,
//     },
//     desktop: {
//       breakpoint: { max: 1024, min: 768 },
//       items: 6,
//     },
//     tablet: {
//       breakpoint: { max: 768, min: 464 },
//       items: 3,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 2,
//     },
//   };

//   return (
//     <div className="mt-20">
//       <div className="text-5xl uppercase mb-8 text-center font-bold bg-gradient-to-r from-[#013762] via-[#0080E5] bg-clip-text text-transparent">
//         Global Partners
//       </div>
//       <div className="container mx-auto mb-3">
//         <Carousel
//           responsive={responsive}
//           infinite={true}
//           autoPlay={true}
//           keyBoardControl={true}
//           transitionDuration={1000}
//           removeArrowOnDeviceType={[
//             "tablet",
//             "mobile",
//             "desktop",
//             "superLargeDesktop",
//           ]}
//           customTransition="all 0.5s"
//           containerClass="carousel-container"
//           itemClass="px-4" // Added padding between items
//         >
//           {logos.map((logo, index) => (
//             <div
//               key={index}
//               onClick={() => handleLogoClick(logo)}
//               className={`cursor-pointer pb-4 ${
//                 selectedLogo.name === logo.name
//                   ? "border-b-[6px] border-gray-300"
//                   : ""
//               }`}
//             >
//               <img className="h-8" src={logo.logo} alt={logo.name} />
//             </div>
//           ))}
//         </Carousel>
//       </div>

//       {selectedLogo && (
//         <div className="grid grid-cols-3 bg-black h-[600px]">
//           <div className="col-span-1 text-white font-[Inter] flex items-center pl-40">
//             <div>
//               <h1 className="font-bold text-5xl mb-2">
//                 Meet {selectedLogo.name.toUpperCase()}
//               </h1>
//               <p>
//                 Explore {selectedLogo.name} products and services for your home
//                 or business. Shop Surface, Microsoft 365, Xbox, Windows, Azure
//               </p>
//               <button className="mt-4 bg-gray-500 py-2 px-4 rounded-md">
//                 Read {selectedLogo.name} Stories
//               </button>
//             </div>
//           </div>
//           <div className="col-span-2">
//             <img
//               className="h-[600px]"
//               src={selectedLogo.src}
//               alt={selectedLogo.name}
//               style={{ width: "100%" }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GlobalPartners;

import React from 'react'
import TabsMain from './TabsMain'

const GlobalPartners = () => {
  return (
    <div>
      <TabsMain></TabsMain>
    </div>
  )
}

export default GlobalPartners