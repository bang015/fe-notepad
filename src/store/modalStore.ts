import {makeAutoObservable} from "mobx";

export class ModalStore {
  open: boolean = false;
  id: number | null = null;
  constructor() {
    makeAutoObservable(this);
  }

  openModal = (id: number | null) => {
    this.open = true;
    this.id = id
  };

  closeModal = () => {
    this.open = false;
    this.id = null;
  };
}

export const modalStore = new ModalStore();
