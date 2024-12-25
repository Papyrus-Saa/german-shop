"use client";

import clsx from "clsx";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}

const QuantitySelector = ({ quantity }: Props) => {
  const [quantityValue, setQuantityValue] = useState(quantity);
  const [isActive, setIsActive] = useState(false);

  const changeQuentity = (value: number) => {
    if (quantityValue + value < 1) return;

    setQuantityValue(quantityValue + value);

    // Activa la clase durante un cambio
    setIsActive(true);

    // Desactiva la clase después de un tiempo breve
    setTimeout(() => setIsActive(false), 200);
  };

  return (
    <div className="flex mb-8">
      <button onClick={() => changeQuentity(-1)}>
        <IoRemoveCircleOutline size={20} className="hover:text-red-600" />
      </button>
      <span
        className={clsx(
          "w-20 mx-3 px-5 bg-gray-200 dark:bg-gray-900 border-b-2 text-center",
          { "border-green-500": isActive }
        )}
      >
        {quantityValue}
      </span>
      <button onClick={() => changeQuentity(+1)}>
        <IoAddCircleOutline size={20} className="hover:text-blue-600" />
      </button>
    </div>
  );
};

export default QuantitySelector;
