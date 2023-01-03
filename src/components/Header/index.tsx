import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransacionModal } from "../NewTransacionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <h2>Dashboard Financeiro</h2>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransacionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}