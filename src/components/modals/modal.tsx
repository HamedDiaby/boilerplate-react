import { useScreenSize } from '@utilities/hooks/useScreenSize';
import { FC, ReactNode, useMemo } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ 
    isOpen, 
    onClose, 
    title, 
    children,
}) => {

    const { isMobile } = useScreenSize();

    const modalWidth = useMemo(()=> isMobile ? 'w-[100%]' : 'w-[70%]' , [isMobile]);
    const modalHeight = useMemo(()=> isMobile ? 'h-[100vh]' : 'min-h-[10vh]' , [isMobile]);
    const modalRadius = useMemo(()=> isMobile ? 'rounded-none' : 'rounded-lg' , [isMobile]);
    const modalChildrenMaxHeight = useMemo(()=> isMobile ? 'max-h-[90vh]' : 'max-h-[60vh]' , [isMobile]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className={`bg-white ${modalRadius} shadow-lg ${modalWidth} ${modalHeight} relative`}>
                
                {/* En-tête fixe */}
                <div className="flex items-center rounded-lg justify-between p-4 sticky top-0 bg-white z-10">
                    {title && <h2 className="text-xl font-semibold">{title}</h2>}
                    
                    <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>

                {/* Contenu défilant */}
                <div className={`p-6 overflow-y-auto ${modalChildrenMaxHeight}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};
