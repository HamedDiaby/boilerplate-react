import { FC, useMemo } from 'react';
import { Button } from '../button';
import { useScreenSize } from '@utilities/hooks/useScreenSize';

interface ModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal: FC<ModalProps> = ({ 
    isOpen, 
    message,
    onCancel,
    onConfirm,
}) => {

    const { isMobile } = useScreenSize();

    const modalWidth = useMemo(()=> isMobile ? 'w-[90%]' : 'w-[40%]' , [isMobile]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className={`bg-white rounded-lg shadow-lg ${modalWidth} p-4 relative`}>
                <h4 className='mb-5'>{message}</h4>

                {/* Boutons d'action */}
                <div className="flex justify-end space-x-2">
                    <Button variant='secondary' onClick={onCancel}>
                        Annuler
                    </Button>

                    <Button onClick={onConfirm}>
                        Confirmer
                    </Button>
                </div>
            </div>
        </div>
    );
};
