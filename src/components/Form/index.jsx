import React from "react";
import Input from "../Input";
import Textarea from "../Textarea";

const Form = () => {
  return (
    <form className="flex flex-col gap-[20px] w-[35rem]" action="">
      <div className="grid grid-cols-2 gap-6">
        <Input
          id="firstName"
          type="text"
          placeholder="Jonathan"
          label={"First name"}
        />
        <Input
          id="lastName"
          type="text"
          placeholder="James"
          label={"Last name"}
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Input
          id="email"
          type="email"
          placeholder="Jonathan@gmail.com"
          label={"Email"}
        />
        <Input
          id="phoneNumber"
          type="text"
          placeholder="+192924234"
          label={"Phone number"}
        />
      </div>
      <Textarea
        id={"message"}
        label={"Message"}
        placeholder={"Hey i have some issues activating my account..."}
      />
      <div class="btn w-full h-[2.75rem]">
        <a href="#">Send Message</a>
      </div>
    </form>
  );
};

export default Form;
