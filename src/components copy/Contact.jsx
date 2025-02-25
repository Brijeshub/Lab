import React from "react";

const Contact = () => {
  const phoneNumber = "+918808508885"; // Phone number yahan add karein

  const addToContacts = () => {
    // Ye function ek message ya guide provide kar sakta hai
    alert(
      "Apka device is link ko contacts me add karne ke liye support kar sakta hai ya nahi."
    );
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Contact Us</h1>
        <p>
          Call us:{" "}
          <a
            href={`tel:${phoneNumber}} style={{ color: "blue", textDecoration: "underline" }`}
          >
            {phoneNumber}
          </a>
        </p>
        <button
          onClick={addToContacts}
          style={{ padding: "10px 20px", marginTop: "20px" }}
        >
          Add to Contacts
        </button>
      </div>

      {/* style={{ textAlign: "center", marginTop: "50px" }} */}
    </>
  );
};
export default Contact;
