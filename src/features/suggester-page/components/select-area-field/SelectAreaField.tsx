import Select from 'components/select/Select';
import { AREA_OPTIONS } from 'features/suggester-page/components/select-area-field/constants';
import { useAreaValueState } from 'features/suggester-page/components/select-area-field/hooks';

export default function SelectAreaField(): JSX.Element {
    const { areaValue, setAreaValue } = useAreaValueState();

    return (
        <Select
            value={areaValue}
            multiple={true}
            shouldAddSearch={true}
            options={AREA_OPTIONS}
            onChange={setAreaValue}
            label="Area"
            placeholder="Select At Least One Area"
            isFullWidth={true}
        />
    );
}
