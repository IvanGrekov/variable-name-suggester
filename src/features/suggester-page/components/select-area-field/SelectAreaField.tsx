import Select from 'components/select/Select';
import { AREA_OPTIONS } from 'features/suggester-page/components/select-area-field/constants';
import { IUseAreaValueStateResult } from 'features/suggester-page/hooks/areaField.hooks';

export default function SelectAreaField({
    areaValue,
    setAreaValue,
}: IUseAreaValueStateResult): JSX.Element {
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
