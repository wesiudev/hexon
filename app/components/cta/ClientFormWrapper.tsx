"use client";
import { useDispatch, useSelector } from "react-redux";
import ClientForm from "./ClientFormDesign";
import { setModalVisible } from "@/common/redux/slices/actionSlice";

export default function ClientFormWrapper() {
  const dispatch = useDispatch();
  const { action } = useSelector((state: any) => state.action);
  function setModalVisibility(action: string) {
    dispatch(setModalVisible(action));
  }
  return <ClientForm action={action} setAction={setModalVisibility} />;
}
