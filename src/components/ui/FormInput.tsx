interface FormInputProps {
  label: string;
  type: string;
  name: string;
}

export default function FormInput({ label, type, name }: FormInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium">{label}</label>
      {type === 'textarea' ? (
        <textarea id={name} name={name} className="w-full px-4 py-2 rounded border" />
      ) : (
        <input type={type} id={name} name={name} className="w-full px-4 py-2 rounded border" />
      )}
    </div>
  );
}
