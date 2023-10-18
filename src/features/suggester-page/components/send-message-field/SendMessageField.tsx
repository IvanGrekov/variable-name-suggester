import cx from 'classnames';

import styles from 'features/suggester-page/components/send-message-field/SendMessageField.module.scss';

interface ISendMessageFieldProps {
    className?: string;
}

export default function SendMessageField({
    className,
}: ISendMessageFieldProps): JSX.Element {
    return <div className={cx(styles.area, className)}>Send Message Area</div>;
}
