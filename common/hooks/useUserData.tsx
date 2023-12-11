"use client";
import { auth, getUser, getUserImages } from "@/common/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState, store } from "@/common/redux/store";
import { setImages } from "@/common/redux/slices/imagesSlice";
import { setUser } from "@/common/redux/slices/userSlice";
import { redirect } from "next/navigation";
export function useUserData() {
  const dispatch = useDispatch();
  const { images, loadingImages } = useSelector(
    (state: RootState) => state.images
  );
  const { userData } = useSelector((state: RootState) => state.user);

  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    !loading &&
      !userData.length &&
      getUser(user).then((res: any) => dispatch(setUser(res)));
    !loading &&
      !images?.length &&
      getUserImages(user?.email).then((res) => dispatch(setImages(res)));

    if (!user && !loading) {
      redirect("/auth");
    }
  }, []);
  return { userData, loading, images, loadingImages };
}
