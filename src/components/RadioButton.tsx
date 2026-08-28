type RadioButtonProps = {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
};

/**

* Renders a reusable controlled radio button.
*
* @param label - Text displayed alongside the radio button.
* @param name - Name shared by the radio button group.
* @param value - Value associated with the radio button.
* @param checked - Whether the radio button is currently selected.
* @param onChange - Callback invoked when the radio button is selected.
  */

const RadioButton = ({
  label,
  name,
  value,
  checked,
  onChange,
}: RadioButtonProps) => {
  const id = `${name}-${value}`;

  return (
    <div>
      <label htmlFor={id} className="donation-label">
        {label}
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={() => onChange(value)}
        />
      </label>
    </div>
  );
};

export default RadioButton;
