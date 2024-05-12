import React from "react";
import Input from "../Input";
import Textarea from "../Textarea";

const Form = () => {
  let clickSound = new Audio("/click.mp3");
  let toggleSound = new Audio("/toggle.mp3");

  const playClickSound = () => {
    clickSound.play();
  };

  const playToggleSound = () => {
    toggleSound.play();
  };

  return (
    <form className="flex flex-col gap-[20px] w-[35rem]" action="">
      <div className="grid grid-cols-2 gap-6">
        <Input
          onfocus={playToggleSound}
          id="firstName"
          type="text"
          placeholder="Jonathan"
          label={"First name"}
        />
        <Input
          onfocus={playToggleSound}
          id="lastName"
          type="text"
          placeholder="James"
          label={"Last name"}
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Input
          onfocus={playToggleSound}
          id="email"
          type="email"
          placeholder="Jonathan@gmail.com"
          label={"Email"}
        />
        <Input
          onfocus={playToggleSound}
          id="phoneNumber"
          type="text"
          placeholder="+192924234"
          label={"Phone number"}
        />
      </div>
      <Textarea
        onfocus={playToggleSound}
        id={"message"}
        label={"Message"}
        placeholder={"Hey i have some issues activating my account..."}
      />
      <div onClick={playClickSound} class="btn w-full h-[2.75rem]">
        <a href="#">Send Message</a>
      </div>
    </form>
  );
};

export default Form;
