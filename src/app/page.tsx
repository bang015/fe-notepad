"use client";

import Header from "@/components/common/header/page";
import Memo from "@/components/memo/modal/page";
import {modalStore } from "@/store/modalStore";
import { observer } from "mobx-react-lite";

const Home: React.FC = () => {
  const btn = "cursor-pointer hover:text-blue-500";
  return (
    <div className="h-screen flex flex-col justify-items-center">
      <div className="flex flex-col h-full m-auto w-1/3">
        <Header />
        <div className="flex flex-col grow">
          <div className="flex justify-between border rounded-t-md p-3">
            <button onClick={() => modalStore.openModal(null)}>New Memo</button>
            <div className={btn}>Delete</div>
          </div>
          <div className="border border-t-0 rounded-b-md h-2/3 overflow-y-scroll">
            <Memo open={modalStore.open} id={modalStore.id} closeModal={modalStore.closeModal}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(Home);
