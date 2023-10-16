import Spacing from 'components/spacing/Spacing';
import SelectAreaField from 'features/suggester-page/components/select-area-field/SelectAreaField';
import SuggesterChat from 'features/suggester-page/components/suggester-chat/SuggesterChat';
import styles from 'features/suggester-page/components/suggester-page/SuggesterPage.module.scss';
import { useAreaValueState } from 'features/suggester-page/components/suggester-page/hooks';

export default function SuggesterPage(): JSX.Element {
    const { areaValue, setAreaValue } = useAreaValueState();

    return (
        <section className={styles.page}>
            <SelectAreaField value={areaValue} onChange={setAreaValue} />

            <Spacing xs={20} />

            <SuggesterChat areaValue={areaValue} />
        </section>
    );
}
