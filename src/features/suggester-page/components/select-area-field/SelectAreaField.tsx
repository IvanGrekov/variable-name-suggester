import Select from 'components/select/Select';
import { AREA_OPTIONS } from 'features/suggester-page/components/select-area-field/constants';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField';

interface ISelectAreaFieldProps {
    value: TAreaFieldValue;
    onChange: (value: string | null) => void;
}

export default function SelectAreaField({
    value,
    onChange,
}: ISelectAreaFieldProps): JSX.Element {
    return (
        <Select
            value={value}
            multiple={true}
            shouldAddSearch={true}
            options={AREA_OPTIONS}
            onChange={onChange}
            label="Area"
            placeholder="Select At Least One Area"
            isFullWidth={true}
        />
    );
}
