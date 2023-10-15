import Select from 'components/select/Select';

interface ISelectAreaFieldProps {
    value: string;
    onChange: (value: string | null) => void;
}

export default function SelectAreaField({
    value,
    onChange,
}: ISelectAreaFieldProps): JSX.Element {
    return (
        <Select
            value={value}
            shouldAddSearch={true}
            options={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']}
            onChange={onChange}
            label="Area"
            placeholder="Select Area"
            isFullWidth={true}
        />
    );
}
