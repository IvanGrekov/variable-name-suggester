'use client';

import ModalContent from 'components/modal/ModalContent';
import { TModalProps } from 'components/modal/types';
import { useEscapeListener } from 'hooks/escape.hooks';
import { useCreatePortal } from 'hooks/portal.hooks';
import { useBodyScrollLock } from 'hooks/scroll.hooks';

export default function Modal({
    onClose,
    isOpen,
    ...rest
}: TModalProps): JSX.Element | null {
    const createPortal = useCreatePortal({
        selector: '#modal-root',
        content: <ModalContent {...rest} isOpen={isOpen} onClose={onClose} />,
    });

    useBodyScrollLock(isOpen);
    useEscapeListener(onClose);

    return createPortal();
}
