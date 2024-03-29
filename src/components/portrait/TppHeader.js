import { Button } from "react-bootstrap";

export default function TppHeader({ handleGoToDateForm }) {

  return (
    <>
      <div id="tppHeader">
        <h1> ⁕ Tarot ⁕ </h1>
        <h3>Psychological Portrait</h3>
        <p>
          Tarot Psychological Portrait used to examine and analyze the innate
          potentials of a given individual, their talents and predispositions,
          the influences they were subjected to in childhood and to which they
          are susceptible in adult life. The best ways to realize emerging
          opportunities, significant and turning moments in life, as well as
          those hidden in the subconscious fears, complexes or, as it is called
          in esoteric language - things to work through. Using the archetypes
          written in the Major Arcana of the Tarot, substituting the appropriate
          cards for the numbers resulting from the date of birth allows one to
          see something like a genetic code with which a person comes into the
          world.
          <br />
          This method, created by Alla Alicja Chrzanowska is taught in
          workshops, and the meaning of each item is explained thoroughly during
          the course.
        </p>
        <Button variant="secondary" onClick={handleGoToDateForm}>
          ⁕ Create ⁕
        </Button>
      </div>
    </>
  );
}
