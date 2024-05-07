function FormInput({
  labelText,
  type,
  name,
  defaultValue,
}: {
  labelText: string;
  type: string;
  name?: string;
  defaultValue?: string;
}) {
  return (
    <div className={"flex flex-col"}>
      <label className={"capitalize"} htmlFor={name}>
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        className={
          "bg-background border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
        }
      />
    </div>
  );
}

export default FormInput;
