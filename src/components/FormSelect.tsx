import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";

function FormSelect({
  labelText,
  name,
  defaultValue,
  options,
}: {
  labelText: string;
  name?: string;
  defaultValue?: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <Select name={name} defaultValue={defaultValue || options[0]}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => {
              return (
                <SelectItem value={option} key={option}>
                  {option}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default FormSelect;
