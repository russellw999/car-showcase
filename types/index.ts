import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: String,
    containerStyles: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit'
}

export interface SearchManufacturerProps {
    manufacturer: String,
    setManufacturer: (manufacturer: string) => void;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
  
}