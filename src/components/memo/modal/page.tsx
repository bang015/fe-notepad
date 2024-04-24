"use client";

import { Modal } from "@mui/material";
interface modalStore {
    open: boolean,
    id: number | null,
    closeModal: () => void
}
const Memo: React.FC<modalStore> = (modalStore) => {
  return (
    <>
      <Modal open={modalStore.open}>
        <div>메모</div>
      </Modal>
    </>
  );
};

export default Memo;
