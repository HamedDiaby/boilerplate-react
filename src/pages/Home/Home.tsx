import { FC, useState } from "react";
import { useTranslation } from "@utilities/hooks";
import { Button, ConfirmModal, Modal } from "@components";
// import { useControllers } from "./useControllers";

export const Home:FC = ()=> {

    // const {  } = useControllers();
    const { translate } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenConfirm, setIsOpenConfirm] = useState<boolean>(false);

    return (
        <div>
            <h1>
                {translate('welcome')}
            </h1>

            <Button onClick={()=> setIsOpen(true)}>Default Primary Button</Button>
            <Button variant="warning" className="rounded-none" onClick={()=> setIsOpenConfirm(true)}>Warning Button</Button>
            <Button variant="secondary">Secondary Button</Button>

            <Modal
                isOpen={isOpen}
                onClose={()=> setIsOpen(false)}
                title="Titre de la modal"
            >
                <>
                    <p>Contenue de la modal</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolore nisi molestias explicabo veritatis expedita numquam neque, amet impedit illum id placeat veniam. Voluptates nam aut corrupti rerum sed eligendi?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis numquam a. Fuga obcaecati laudantium ex dolor esse doloribus quos explicabo reprehenderit aspernatur aliquam non reiciendis sapiente, modi consequatur quibusdam.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, tempora eligendi nesciunt quidem aspernatur itaque facilis ut magni quibusdam expedita dolore eius, esse iure quia nam soluta? Ratione, consectetur fugiat.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur ea deserunt voluptates sunt officiis repellendus cum praesentium eos harum repudiandae omnis quidem veritatis, ex tempora nulla incidunt sed accusamus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aperiam, quas hic eius placeat unde nisi earum minima aspernatur quam labore mollitia amet autem fugiat voluptatum illo, repudiandae, voluptas animi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt nihil possimus quam ratione cumque odio at deserunt accusamus? Ea nesciunt explicabo nobis eveniet enim. Aliquam earum tempore repellat pariatur!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa eum dolorum illum rerum quidem sapiente doloremque perspiciatis, quas neque. Rerum nisi cum optio, architecto sit nam recusandae qui sunt!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus voluptatibus nihil, delectus quis quod exercitationem nemo soluta sapiente nostrum quisquam natus, reprehenderit maxime magni. Soluta facilis maiores eos molestias fugiat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque temporibus quisquam eum ab at autem molestiae cupiditate. Inventore necessitatibus labore illo, iste quaerat veniam, quos amet quisquam quidem ratione at!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolore nisi molestias explicabo veritatis expedita numquam neque, amet impedit illum id placeat veniam. Voluptates nam aut corrupti rerum sed eligendi?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis numquam a. Fuga obcaecati laudantium ex dolor esse doloribus quos explicabo reprehenderit aspernatur aliquam non reiciendis sapiente, modi consequatur quibusdam.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, tempora eligendi nesciunt quidem aspernatur itaque facilis ut magni quibusdam expedita dolore eius, esse iure quia nam soluta? Ratione, consectetur fugiat.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur ea deserunt voluptates sunt officiis repellendus cum praesentium eos harum repudiandae omnis quidem veritatis, ex tempora nulla incidunt sed accusamus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aperiam, quas hic eius placeat unde nisi earum minima aspernatur quam labore mollitia amet autem fugiat voluptatum illo, repudiandae, voluptas animi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt nihil possimus quam ratione cumque odio at deserunt accusamus? Ea nesciunt explicabo nobis eveniet enim. Aliquam earum tempore repellat pariatur!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa eum dolorum illum rerum quidem sapiente doloremque perspiciatis, quas neque. Rerum nisi cum optio, architecto sit nam recusandae qui sunt!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus voluptatibus nihil, delectus quis quod exercitationem nemo soluta sapiente nostrum quisquam natus, reprehenderit maxime magni. Soluta facilis maiores eos molestias fugiat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque temporibus quisquam eum ab at autem molestiae cupiditate. Inventore necessitatibus labore illo, iste quaerat veniam, quos amet quisquam quidem ratione at!
                    </p>
                </>
            </Modal>

            <ConfirmModal
                isOpen={isOpenConfirm}
                message="Message de confirmation"
                onCancel={()=> setIsOpenConfirm(false)}
                onConfirm={()=> setIsOpenConfirm(false)}
            />
        </div>
    )
}
