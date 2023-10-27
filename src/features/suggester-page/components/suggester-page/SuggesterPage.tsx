import cx from 'classnames';

import Button from 'components/button/Button';
import Spacing from 'components/spacing/Spacing';
import Chat from 'features/suggester-page/components/chat/Chat';
import ChatEmptyState from 'features/suggester-page/components/chat-empty-state/ChatEmptyState';
import GetFullVersionModal from 'features/suggester-page/components/get-full-version-modal/GetFullVersionModal';
import SelectAreaField from 'features/suggester-page/components/select-area-field/SelectAreaField';
import styles from 'features/suggester-page/components/suggester-page/SuggesterPage.module.scss';
import { useGetFullVersionModal } from 'features/suggester-page/components/suggester-page/hooks';
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

    const { openModal, ...modalProps } = useGetFullVersionModal();

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
                    action={
                        <Button
                            text="Get Full Version"
                            className={styles['get-full-button']}
                            onClick={openModal}
                        />
                    }
                    className={cx(styles['empty-state'], {
                        [styles['empty-state--access-expired']]: true,
                    })}
                />
            )}

            <Chat areaValue={areaValue} />

            <GetFullVersionModal {...modalProps} />
        </section>
    );
}
