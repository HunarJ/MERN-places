import React, {use, useCallback} from "react";

import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../util/validators";

const NewPlace = () => {
const titleInputHandler = useCallback((id, value, isValid) => {

}, [])

  return (
    <form className="place-form">
      <Input
        type="text"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please exter a valid title."
        onInput={titleInputHandler}
      />
    </form>
  );
};

export default NewPlace;
