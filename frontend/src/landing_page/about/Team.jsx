import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import nikhilImg from "../../assets/images/Nikhil.jpg";
import kailashImg from "../../assets/images/Kailash.jpg";
import venuImg from "../../assets/images/Venu.jpg";


function Team() {
  const team = [
    {
      id: 1,
      name: "Nikhil Kamath",
      role: "Co-founder & CFO",
      img:nikhilImg,
      bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.",
    },
    {
      id: 2,
      name: "Dr. Kailash Nadh",
      role: "CTO",
      img: kailashImg,
      bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.",
    },
    {
      id: 3,
      name: "Venu Madhav",
      role: "COO",
      img: venuImg,
      bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis.",
    },
    {
      id: 4,
      name: "Venu Madhav",
      role: "COO",
      img: venuImg,
      bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis.",
    },
    {
      id: 5,
      name: "Venu Madhav",
      role: "COO",
      img: venuImg,
      bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis.",
    },
    {
      id: 6,
      name: "Venu Madhav",
      role: "COO",
      img: venuImg,
      bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis.",
    },

  ];

  const [openId, setOpenId] = useState(null);

  const toggleBio = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center g-5">
        {team.map((member) => (
          <div key={member.id} className="col-12 col-md-6 col-lg-4 text-center">
            {/* Image */}
            <img
              src={member.img}
              alt={member.name}
              className="rounded-circle mb-4"
              style={{
                width: "220px",
                height: "220px",
                objectFit: "cover",
              }}
            />

            {/* Name */}
            <h4 className="mb-1 fw-normal">{member.name}</h4>

            {/* Role */}
            <p className="text-muted mb-2">{member.role}</p>

            {/* Bio Button */}
            <button
              className="btn btn-link text-decoration-none text-muted d-inline-flex align-items-center gap-2 p-0"
              onClick={() => toggleBio(member.id)}
              style={{ fontSize: "15px" }}
            >
              Bio{" "}
              {openId === member.id ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {/* Bio Text */}
            {openId === member.id && (
              <p className="mt-4 text-muted px-4" style={{ lineHeight: "28px" }}>
                {member.bio}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
