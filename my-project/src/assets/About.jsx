import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center text-center">
        <section className="col-md-8 col-lg-6 col-xl-5 mx-auto">
          <h2 className="p-3">Cos'è la vinificazione?</h2>
          <iframe
            src="https://www.youtube.com/embed/Qx0jK6IGPls?si=XnMO2dZ1Gs7wZkIi"
            title="YouTube video player"
            width="100%"
            height="285rem"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </section>
      </div>
    </>
  );
}
