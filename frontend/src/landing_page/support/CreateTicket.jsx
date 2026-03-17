// import React from "react";
// import { FaPlusCircle, FaUser, FaChartBar } from "react-icons/fa";

// function CreateTicket() {
//   const ticketData = [
//     {
//       icon: FaPlusCircle,
//       title: "Account Opening",
//       link: [
//         "Online Account Opening",
//         "Offline Account Opening",
//         "Company, Partnership and HUF Account Opening",
//         "NRI Account Opening",
//         "Charges at Zerodha",
//         "Zerodha IDFC FIRST Bank 3-in-1 Account",
//         "Getting Started",
//       ],
//     },
//     {
//       title: "Account Opening",
//       link: [
//         "Online Account Opening",
//         "Offline Account Opening",
//         "Company, Partnership and HUF Account Opening",
//         "NRI Account Opening",
//         "Charges at Zerodha",
//         "Zerodha IDFC FIRST Bank 3-in-1 Account",
//         "Getting Started",
//       ],
//     },
//     {
//       title: "Account Opening",
//       link: [
//         "Online Account Opening",
//         "Offline Account Opening",
//         "Company, Partnership and HUF Account Opening",
//         "NRI Account Opening",
//         "Charges at Zerodha",
//         "Zerodha IDFC FIRST Bank 3-in-1 Account",
//         "Getting Started",
//       ],
//     },
//     {
//       title: "Account Opening",
//       link: [
//         "Online Account Opening",
//         "Offline Account Opening",
//         "Company, Partnership and HUF Account Opening",
//         "NRI Account Opening",
//         "Charges at Zerodha",
//         "Zerodha IDFC FIRST Bank 3-in-1 Account",
//         "Getting Started",
//       ],
//     },
//     {
//       title: "Account Opening",
//       link: [
//         "Online Account Opening",
//         "Offline Account Opening",
//         "Company, Partnership and HUF Account Opening",
//         "NRI Account Opening",
//         "Charges at Zerodha",
//         "Zerodha IDFC FIRST Bank 3-in-1 Account",
//         "Getting Started",
//       ],
//     },
//     {
//       title: "Account Opening",
//       link: [
//         "Online Account Opening",
//         "Offline Account Opening",
//         "Company, Partnership and HUF Account Opening",
//         "NRI Account Opening",
//         "Charges at Zerodha",
//         "Zerodha IDFC FIRST Bank 3-in-1 Account",
//         "Getting Started",
//       ],
//     },
//   ];
//   return (
//     <div className="container p-5">
//       <div className="row justify-content-center ps-3 g-4 bg-danger">
//         {ticketData.map((item, index) => (
//           <div className="col-md-4 mb-4 ">
//             <h5 className="mb-4" key={index}>
//                 <icon/>
//               {item.title}
//             </h5>

//             <ul className="list-unstyled">
//               {item.link.map((link, i) => (
//                 <li kery={i}>
//                   <a href="#" className="text-decoration-none d-block mb-2">
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CreateTicket;

import React from "react";
import { FaPlusCircle, FaUser, FaChartBar, FaWallet, FaFileAlt, FaCreditCard } from "react-icons/fa";

function CreateTicket() {
  const ticketData = [
    { icon: FaPlusCircle, title: "Account Opening", link: ["Online Account Opening", "Offline Account Opening", "Company, Partnership and HUF Account Opening", "NRI Account Opening", "Charges at Zerodha", "Zerodha IDFC FIRST Bank 3-in-1 Account", "Getting Started"] },
    { icon: FaUser, title: "Profile & Settings", link: ["Online Account Opening", "Offline Account Opening", "Company, Partnership and HUF Account Opening", "NRI Account Opening", "Charges at Zerodha", "Zerodha IDFC FIRST Bank 3-in-1 Account", "Getting Started"] },
    { icon: FaChartBar, title: "Trading & Portfolio", link: ["Online Account Opening", "Offline Account Opening", "Company, Partnership and HUF Account Opening", "NRI Account Opening", "Charges at Zerodha", "Zerodha IDFC FIRST Bank 3-in-1 Account", "Getting Started"] },
    { icon: FaWallet, title: "Funds & Payments", link: ["Online Account Opening", "Offline Account Opening", "Company, Partnership and HUF Account Opening", "NRI Account Opening", "Charges at Zerodha", "Zerodha IDFC FIRST Bank 3-in-1 Account", "Getting Started"] },
    { icon: FaFileAlt, title: "Reports & Statements", link: ["Online Account Opening", "Offline Account Opening", "Company, Partnership and HUF Account Opening", "NRI Account Opening", "Charges at Zerodha", "Zerodha IDFC FIRST Bank 3-in-1 Account", "Getting Started"] },
    { icon: FaCreditCard, title: "Cards & Banking", link: ["Online Account Opening", "Offline Account Opening", "Company, Partnership and HUF Account Opening", "NRI Account Opening", "Charges at Zerodha", "Zerodha IDFC FIRST Bank 3-in-1 Account", "Getting Started"] },
   
  ];

  return (
    <div className="container p-5">
      <div className="row justify-content-center ps-4 g-4">
        {ticketData.map((item, index) => {
          const Icon = item.icon; // icon component ko variable me store
          return (
            <div className="col-md-4 mb-4" key={index}>
              <h5 className="mb-4 d-flex align-items-center">
                <Icon style={{ marginRight: "10px" }} />
                {item.title}
              </h5>

              <ul className="list-unstyled">
                {item.link.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-decoration-none d-block mb-2">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CreateTicket;