import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { classNames } from "../utils/classNames";

export const InputWithLabel: React.FC<IInputProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={label}>{label}</Label>
      <Input className="w-full" id={label} {...props} />
      <p
        className={classNames(
          !error ? "hidden" : "block",
          "text-xs font-medium text-red-500 mt-1"
        )}
      >
        {error}
      </p>
    </div>
  );
};
