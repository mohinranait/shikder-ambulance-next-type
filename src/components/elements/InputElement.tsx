import React, { FC } from "react";

type Props = {
  placeholder?: string;
  type: string;
  className?: string;
  label?: string;
  labelCss?: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rest?: any;
};

const InputElement: FC<Props> = ({
  label,
  name,
  placeholder,
  type,
  className,
  labelCss,
  onChange,
  value,
  ...rest
}) => {
  return (
    <div className="">
      {label && (
        <label htmlFor="" className={`flex mb-[2px] ${labelCss}`}>
          {label}
        </label>
      )}
      <div className="bg-slate-200 rounded backdrop-blur-md bg-opacity-20">
        <input
          name={name}
          type={type}
          className={` focus-visible:border-primary w-full focus-visible:outline-primary focus-visible:outline-none focus-visible:outline-offset-0 py-[10px] rounded px-3  ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  );
};

export default InputElement;
