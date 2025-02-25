import React from "react";
import img from "../img/jitr.jpg";
import { motion } from "framer-motion";

// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ImFacebook2,
  ImLinkedin,
  ImMail,
  ImTelegram,
  ImTwitter,
  ImWhatsapp,
} from "react-icons/im";
// import Slider from "./Slider";
import Navbar from "./Navbar";
// import Contact from "./Contact";

function Home() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+918808508885"; // Replace with the desired phone number
    const message = "Thank You for Visit me"; // Replace with your custom message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank"); // Opens WhatsApp in a new tab
  };
  return (
    <>
      <div
        className="img md:h-screen
     "
      >
        <div className="bg-stone-100 fixed md:relative">
          <Navbar />
        </div>
        <div className="md:flex md:items-center md:mt-12 py-1">
          <div className="flex flex-col items-center md:w-1/2 ">
            {/* <div className="mt-24">
          <p className="text-2xl font-serif my-3 px-0 text-center" >sample collection service at your door step</p>
        </div> */}

            <div className="mt-36 px-4">
              {/* <h3 className=" text-4xl text-center font-serif "> */}
              <motion.p
                className="text-4xl text-center font-serif"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Jitendra Pratap
              </motion.p>

              <motion.p
                className="text-4xl text-center font-serif"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                Singh
              </motion.p>
              {/* </h3> */}
              <p className="text-xl font-serif my-3 px-0 text-justify">
                I providing critical diagnostic insights that guide medical
                decision-making and patient care. These services encompass the
                analysis of bodily fluids, tissues, and cells to detect
                diseases, monitor health conditions, and evaluate treatment
                effectiveness. By combining advanced technology with expert
                clinical interpretation, pathology laboratories play a pivotal
                role in early disease detection, accurate diagnosis, and
                personalized therapeutic strategies.
              </p>
            </div>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: -10 }}
              transition={{ duration: 1 }}
            >
              <a href="https://www.facebook.com/share/1AzfihJCxW/?mibextid=wwXIfr">
                <ImFacebook2 className="size-10 m-2 cursor-pointer hover:bg-white rounded-lg" />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                <ImMail className="size-10 m-2 cursor-pointer hover:bg-white rounded-lg" />
              </a>
              <ImTwitter className="size-10 m-2 cursor-pointer hover:bg-white rounded-lg" />
              <ImWhatsapp
                onClick={handleWhatsAppClick}
                className="size-10 m-2 cursor-pointer hover:bg-gray-500 rounded-full"
              />
            </motion.div>
          </div>
          <div className="mx-auto rounded-lg bg-transparent">
            <img
              className="mx-auto rounded-full my-5 size-96  md:rounded-3xl bg-center"
              alt="photo"
              src={img}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
