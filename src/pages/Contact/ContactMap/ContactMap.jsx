import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import css from "./ContactMap.module.scss";

const ContactMap = () => {
  return (
    <SectionAnimationWrapper>
      <div>
        {/* <iframe
          title="map"
          //   width="600"
          //   height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA"
        ></iframe> */}

        <div className={css.map_wrapper}>
          <div id="embed-map-display">
            <iframe
              title="map"
              frameBorder="0"
              src="https://www.google.com/maps/embed/v1/place?q=Kyiv,+Україна&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          </div>
        </div>
      </div>
    </SectionAnimationWrapper>
  );
};

export default ContactMap;
