import { useAtom } from 'jotai';
import { connectDialogOpenedAtom } from './atoms';

interface ConnectDialogService {
  opened: boolean;
  open: () => void;
  close: () => void;
}

export function useConnectDialog(): ConnectDialogService{
  const [opened, setOpened] = useAtom(connectDialogOpenedAtom);

  const open = () => setOpened(true)
  const close = () => setOpened(false)

  return {
    opened,
    open,
    close
  }
}
