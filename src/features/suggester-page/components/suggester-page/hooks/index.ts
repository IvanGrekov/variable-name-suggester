import { useState } from 'react';

import { IModalBaseProps } from 'components/modal/types';

interface IUseGetFullVersionModal extends IModalBaseProps {
    openModal: VoidFunction;
}

export const useGetFullVersionModal = (): IUseGetFullVersionModal => {
    const [isOpen, setIsOpen] = useState(false);

    return {
        isOpen,
        openModal: () => setIsOpen(true),
        onClose: () => setIsOpen(false),
    };
};
