import type { Input as InputForm } from "@/app/builder/page";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";

interface FormProps {
  inputs: InputForm[];
}

export const Form = ({ inputs }: FormProps) => {

  const parserInputToElement = (input: InputForm) => {
    switch (input.type) {
      case "text":
        return <Input type="text" />;
      case "number":
        return <Input type="number" />;
      case "textarea":
        return <Textarea />;
      case "radio":
        return <Input type="radio" />;
      case "select":
        return <Select />;
      default:
        return <Input type="text" />;
    }
  };
  console.log(inputs);

  return (
    <div>
      {inputs.length > 0 && inputs.map((input, index) => (
        <div key={index}>
          <label>{input.label}</label>
          {parserInputToElement(input)}
        </div>
      ))}
    </div>
  );
};