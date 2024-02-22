"use client";

import { CustomButtonProps } from "@/types";

const CustomButton = (
  { title,
    disabled,
    onClick,
    containerStyles,
    btnType = "button",
  } :CustomButtonProps
    ) => {
  return (
    <button
      type={btnType}
      disabled={disabled}
      className={`custom-btn ${containerStyles}`}
      onClick={onClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}

export default CustomButton