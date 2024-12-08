"use client";
import React, { FC } from "react";

type Props = {
  placeholder?: string;
  type: string;
  className?: string;
  label?: string;
  labelCss?: string;
  name: string;
  value: string;
  error?: string | null;
  onChange?: (value: string) => void;
  rest?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputElement: FC<Props> = ({
  label,
  name,
  placeholder,
  type,
  className,
  labelCss,
  value,
  error,
  onChange,
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
          className={`  w-full  focus-visible:outline-none border-2 border-slate-300  py-[10px] rounded px-3  ${className}`}
          placeholder={placeholder}
          {...rest}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm"> {error} </p>}
      </div>
    </div>
  );
};

export default InputElement;
