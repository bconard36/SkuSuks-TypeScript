/**
 * Radio Button Component Constructor
 * @param { Object }  - A deconstructed Radio Button element's parameters
 * @returns A dynamic radio button component
 */

type RadioButtonProps = {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
};

const RadioButton = ({
  label,
  name,
  value,
  checked,
  onChange,
}: RadioButtonProps) => {
  // Generate unique ID to link label and input
  const id = `${name}-${value}`;

  // Donate parent component knows which value was clicked
  // onChange here can be a plain no arg callback () => void
  // Parent's version of callback closes over a specific value for that instance
  return (
    <div>
      <label htmlFor={id} className="donation-label">
        {label}
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          // Controlled logic - evaluated as true/false based on state
          checked={checked}
          onChange={() => onChange(value)}
        />
      </label>
    </div>
  );
};

export default RadioButton;
