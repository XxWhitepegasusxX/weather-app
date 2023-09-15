interface CepInputProps {
    label: string;
    placeholder: string;
    type: 'text' | 'select'; 
    value: string;
    options?: string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  }

export default function CepInput(data: CepInputProps){
    return(
        <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">{data.label}</label>
      {data.type === 'select' ? (
        <select
          className="pl-2 py-1 border rounded-lg w-full"
          value={data.value}
          onChange={data.onChange}
        >
          <option value="">{data.placeholder}</option>
          {data.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          className="pl-2 py-1 border rounded-lg w-full"
          placeholder={data.placeholder}
          value={data.value}
          onChange={data.onChange as React.ChangeEventHandler<HTMLInputElement>}
        />
      )}
        </div>
    )
}