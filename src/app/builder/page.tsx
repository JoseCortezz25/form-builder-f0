"use client";

import { PreviewForm } from "@/components/preview-form";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export enum InputType {
  Text = "text",
  Number = "number",
  Password = "password",
  Switch = "switch",
  Email = "email",
  Textarea = "textarea",
  Radio = "radio",
  Checkboxes = "checkboxes",
  Checkbox = "checkbox",
  Date = "date",
  Select = "select"
}

type Validators = {
  required: boolean;
  minLength: number;
  maxLength: number;
  pattern: string;
  min: number;
  max: number;
}

export type Input = {
  type: InputType;
  label: string;
  placeholder: string;
  name: string;
  validators: Validators;
}

const Page = () => {
  const [inputs, setInputs] = useState<Input[]>([]);

  const replaceNameInput = (prefix: string, type: InputType) => {
    const result = type === InputType.Text ? `${prefix}  text` : type === InputType.Number ? `${prefix} number` : type === InputType.Textarea ? `${prefix} textarea` : type === InputType.Radio ? `${prefix} radio` : type === InputType.Select ? `${prefix} select` : `${prefix} text`;
    return result;
  };

  const addInput = (type: InputType) => {
    const newInput: Input = {
      type,
      label: replaceNameInput('Label', type),
      placeholder: replaceNameInput('Placeholder', type),
      name: replaceNameInput('Name', type),
      validators: {
        required: false,
        minLength: 0,
        maxLength: 0,
        pattern: "",
        min: 0,
        max: 0
      }
    };

    setInputs([...inputs, newInput]);
  };

  return (
    <main>
      <div className="mx-auto flex justify-between gap-[25px]">
        <section className="w-[35%] p-6 pb-8">
          <div className="flex flex-col gap-6">
            <div className="inputs-group">
              <h4>Short Text</h4>
              <div className="inputs-group__inputs">
                <Button
                  onClick={() => addInput(InputType.Text)}
                  variant="action"
                  size="action"
                >
                  Single line
                </Button>
                <Button
                  onClick={() => addInput(InputType.Email)}
                  variant="action"
                  size="action"
                >
                  Email
                </Button>
                <Button
                  onClick={() => addInput(InputType.Password)}
                  variant="action"
                  size="action"
                >
                  Password
                </Button>

              </div>
            </div>

            <div className="inputs-group">
              <h4>Long Text</h4>
              <div className="inputs-group__inputs">
                <Button
                  onClick={() => addInput(InputType.Textarea)}
                  variant="action"
                  size="action"
                >
                  Paragraph
                </Button>
              </div>
            </div>

            <div className="inputs-group">
              <h4>Options</h4>
              <div className="inputs-group__inputs">
                <Button
                  onClick={() => addInput(InputType.Radio)}
                  variant="action"
                  size="action"
                >
                  Radio
                </Button>
                <Button
                  onClick={() => addInput(InputType.Select)}
                  variant="action"
                  size="action"
                >
                  Select
                </Button>
                <Button
                  onClick={() => addInput(InputType.Checkboxes)}
                  variant="action"
                  size="action"
                >
                  Checkboxes
                </Button>
              </div>
            </div>

            <div className="inputs-group">
              <h4>Yes/No</h4>
              <div className="inputs-group__inputs">
                <Button
                  onClick={() => addInput(InputType.Radio)}
                  variant="action"
                  size="action"
                >
                  Switch
                </Button>

                <Button
                  onClick={() => addInput(InputType.Checkbox)}
                  variant="action"
                  size="action"
                >
                  Single Checkbox
                </Button>
              </div>
            </div>

            <div className="inputs-group">
              <h4>Numbers</h4>
              <div className="inputs-group__inputs">
                <Button
                  onClick={() => addInput(InputType.Number)}
                  variant="action"
                  size="action"
                >
                  Number
                </Button>
              </div>
            </div>


            <div className="inputs-group">
              <h4>Date and Time</h4>
              <div className="inputs-group__inputs">
                <Button
                  onClick={() => addInput(InputType.Date)}
                  variant="action"
                  size="action"
                >
                  Date
                </Button>
              </div>
            </div>


          </div>
        </section>
        <section className="w-full flex justify-between bg-pattern rounded-l-[20px] py-3">
          <PreviewForm inputs={inputs} />
        </section>
      </div>
    </main>
  );
};

export default Page;