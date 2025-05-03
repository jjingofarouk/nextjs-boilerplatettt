interface FormSelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function FormSelect({ label, name, options, onChange }: FormSelectProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium">{label}</label>
      <select id={name} name={name} onChange={onChange} className="w-full px-4 py-2 rounded border">
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
