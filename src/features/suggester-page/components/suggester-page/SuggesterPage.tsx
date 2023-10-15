import { useState } from 'react';

import Spacing from 'components/spacing/Spacing';
import SelectAreaField from 'features/suggester-page/components/select-area-field/SelectAreaField';
import SuggesterChat from 'features/suggester-page/components/suggester-chat/SuggesterChat';
import styles from 'features/suggester-page/components/suggester-page/SuggesterPage.module.scss';

export default function SuggesterPage(): JSX.Element {
    const [areaValue, setAreaValue] = useState('');

    const onChangeArea = (value: string | null): void => {
        setAreaValue(value || '');
    };

    return (
        <section className={styles.page}>
            <SelectAreaField value={areaValue} onChange={onChangeArea} />

            <Spacing xs={20} />

            <SuggesterChat areaValue={areaValue} />
        </section>
    );
}
