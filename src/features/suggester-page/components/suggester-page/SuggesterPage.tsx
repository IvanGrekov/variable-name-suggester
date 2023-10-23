import cx from 'classnames';

import Spacing from 'components/spacing/Spacing';
import Chat from 'features/suggester-page/components/chat/Chat';
import ChatEmptyState from 'features/suggester-page/components/chat-empty-state/ChatEmptyState';
import SelectAreaField from 'features/suggester-page/components/select-area-field/SelectAreaField';
import styles from 'features/suggester-page/components/suggester-page/SuggesterPage.module.scss';
import { useAreaValueState } from 'features/suggester-page/hooks/areaField.hooks';
import { useIsAppAccessExpired } from 'features/suggester-page/hooks/trialGuard.hooks';
import { useSelectIsSuggesterChatEmpty } from 'features/suggester-page/stores/suggester-chat/selectors';

interface ISuggesterPageProps {
    className?: string;
}

export default function SuggesterPage({
    className,
}: ISuggesterPageProps): JSX.Element {
    const { areaValue, setAreaValue } = useAreaValueState();
    const isChatEmpty = useSelectIsSuggesterChatEmpty();
    const isAppAccessExpired = useIsAppAccessExpired();

    return (
        <section className={cx(styles.page, className)}>
            <SelectAreaField
                areaValue={areaValue}
                setAreaValue={setAreaValue}
            />

            <Spacing xs={20} />

            {isChatEmpty && (
                <ChatEmptyState
                    areaValue={areaValue}
                    className={styles['empty-state']}
                />
            )}

            {isAppAccessExpired && (
                <ChatEmptyState
                    customTitle="It seems that you have exceeded the trial usage limit"
                    customDescription=""
                    className={styles['empty-state']}
                />
            )}

            <Chat areaValue={areaValue} />
        </section>
    );
}
