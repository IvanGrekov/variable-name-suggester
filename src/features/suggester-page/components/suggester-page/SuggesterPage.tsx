import Spacing from 'components/spacing/Spacing';
import SelectAreaField from 'features/suggester-page/components/select-area-field/SelectAreaField';
import SuggesterChat from 'features/suggester-page/components/suggester-chat/SuggesterChat';
import SuggesterChatEmptyState from 'features/suggester-page/components/suggester-chat-empty-state/SuggesterChatEmptyState';
import styles from 'features/suggester-page/components/suggester-page/SuggesterPage.module.scss';
import { useSelectIsSuggesterChatEmpty } from 'features/suggester-page/stores/suggester-chat/selectors';

export default function SuggesterPage(): JSX.Element {
    const isChatEmpty = useSelectIsSuggesterChatEmpty();

    return (
        <section className={styles.page}>
            <SelectAreaField />

            <Spacing xs={20} />

            {isChatEmpty && (
                <SuggesterChatEmptyState className={styles['empty-state']} />
            )}

            <SuggesterChat />
        </section>
    );
}
