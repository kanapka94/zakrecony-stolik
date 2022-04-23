interface NumberProps {
  number: number;
}
export const Number = ({ number }: NumberProps) => (
  <div className="absolute mr-2 bg-emerald-400 text-white flex justify-center font-bold w-4 h-4 top-5 left-4 rounded-full text-xs">
    {number}
  </div>
);
