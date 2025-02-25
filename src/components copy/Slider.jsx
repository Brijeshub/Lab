import React from "react";
function Slider() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner md:h-[35rem] ">
          <div className="carousel-item active ">
            <div className="">
              <img
                src="https://images.pexels.com/photos/8770727/pexels-photo-8770727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="d-block "
                alt="..."
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Microbiology</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="">
              <img
                src="https://images.pexels.com/photos/11516492/pexels-photo-11516492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                class="d-block"
                alt="..."
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Molecular pathology</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="">
              <img
                src="https://images.pexels.com/photos/18069421/pexels-photo-18069421/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-assist-in-genomic-studies-and-its-applications-it-was-created-by-artist-nidia-dias-as-part-of-the.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                class="d-block "
                alt="..."
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Genetic testing</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
