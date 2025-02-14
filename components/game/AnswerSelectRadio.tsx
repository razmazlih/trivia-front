"use client"
import {RadioGroup, useRadio, VisuallyHidden, cn} from "@heroui/react";

interface CustomRadioProps {
    value: string;
    description?: string;
    children?: React.ReactNode;
  }

export const CustomRadio = (props: CustomRadioProps) => {
  const {
    Component,
    children,
    getBaseProps,
    getInputProps,
    getLabelProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "w-full group inline-flex items-center justify-between flex-row-reverse",
        " cursor-pointer border-1 border-default rounded-lg gap-4 p-4",
        "data-[selected=true]:border-primary data-[selected=true]:bg-primary-100 data-[selected=true]:text-primary-700",
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div className="flex flex-col w-full">
        {children && <span {...getLabelProps()} className="text-center">{children}</span>}
      </div>
    </Component>
  );
};

export default function AnswerSelectRadio() {
  return (
    <RadioGroup>
<div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">

      <CustomRadio description="Option A" value="answerA">
      Answer A
      </CustomRadio>
      <CustomRadio description="Option B" value="answerB">
      Answer B
      </CustomRadio>
      <CustomRadio description="Option C" value="answerC">
      Answer C
      </CustomRadio>
      <CustomRadio description="Option D" value="answerD">
      Answer D
      </CustomRadio>
        </div>
    </RadioGroup>
  );
}
