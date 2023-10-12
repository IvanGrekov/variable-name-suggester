import { useState } from 'react';

import Select from 'components/select/Select';
import Spacing from 'components/spacing/Spacing';
import Textarea from 'components/textarea/Textarea';

export default function SuggesterPage(): JSX.Element {
    const [value, setValue] = useState<string>('');

    const onChange = (value: string | null): void => {
        setValue(value || '');
    };

    return (
        <>
            <Select
                value={value}
                shouldAddSearch={true}
                options={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']}
                onChange={onChange}
                label="Area"
                placeholder="Select Area"
                isFullWidth={true}
            />

            <Spacing xs={20} />

            {!!value && (
                <Textarea
                    placeholder="Description about variable..."
                    label="Description"
                    isFullWidth={true}
                    disableResize={true}
                    rows={7}
                />
            )}
        </>
    );
}
