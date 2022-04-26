import { FocusEvent } from 'react';

interface PageInputProps {
  onChange: (page: number) => void;
}
export const PageInput = ({ onChange }: PageInputProps) => {
  const handleChange = (event: FocusEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    if (!isNaN(value)) {
      onChange(value);
      return;
    }

    onChange(1);
  };

  return (
    <li className="mr-2">
      <input
        type="tel"
        pattern="[0-9]"
        onBlur={handleChange}
        className="border-0 outline-none border-b-2 border-dotted border-gray-300 py-2 rounded w-[50px] h-[36px] text-center bg-transparent"
      />
    </li>
  );
};
