import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  ImFacebook2,
  ImLinkedin,
  ImMail,
  ImTelegram,
  ImTwitter,
  ImWhatsapp,
} from "react-icons/im";

function Footer() {
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
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted shadow-inner shadow-slate-600"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div className="flex">
            <a href="https://www.facebook.com/share/1AzfihJCxW/?mibextid=wwXIfr" className="me-2 text-reset">
              <ImFacebook2 className="size-8 m-2 cursor-pointer hover:bg-gray-400 rounded-lg" />
            </a>
            <a href="" className="me-2 text-reset">
              <ImLinkedin className="size-8 m-2 cursor-pointer hover:bg-gray-400 rounded-lg" />
            </a>
            <a href="" className="me-2 text-reset">
              <ImMail className="size-8 m-2 cursor-pointer hover:bg-gray-400 rounded-lg" />
            </a>
            {/* <a href="" className="me-2 text-reset">
              <ImTwitter className="size-8 m-2 cursor-pointer hover:bg-gray-400 rounded-lg" />
            </a> */}
            <a href="" className="me-2 text-reset">
              <ImWhatsapp 
              onClick={handleWhatsAppClick}
              className="size-8 m-2 cursor-pointer hover:bg-gray-400 rounded-full" 
              />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase font-bold mb-3">
                  <MDBIcon icon="gem" className="me-3" />
                  About Us
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Test</h6>
                <p>
                  <a href="https://en.wikipedia.org/wiki/Hematology" className="text-reset ">
                    Himtology
                  </a>
                </p>
                <p>
                  <a href="https://en.wikipedia.org/wiki/Biochemistry" className="text-reset">
                    Biochamestry
                  </a>
                </p>
                <p>
                  <a href="https://en.wikipedia.org/wiki/Serology" className="text-reset">
                    Serology
                  </a>
                </p>
                <p>
                  <a href="https://en.wikipedia.org/wiki/Urine_test" className="text-reset">
                    Urine Test
                  </a>
                </p>
                <p>
                  <a href="https://en.wikipedia.org/wiki/Stool_test" className="text-reset">
                    Stool Test
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    All Type Test Available
                  </a>
                </p>
              </MDBCol>
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  sjitu0067@gmail.com
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> +91 8808508885
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2025 Copyright:
        </div>
      </MDBFooter>
    </>
  );
}

export default Footer;
