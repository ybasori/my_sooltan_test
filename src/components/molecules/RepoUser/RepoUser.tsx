import { getRepoByUsername } from "@/src/domain/github/github.thunk";
import { AppDispatch, RootState } from "@/src/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./RepoUser.module.scss";

export default function RepoUser({}: {}) {
  const dispatch: AppDispatch = useDispatch();
  const githubStore = useSelector((state: RootState) => state.github);

  useEffect(() => {
    if (githubStore.selectedUser) {
      dispatch(getRepoByUsername({ user: githubStore.selectedUser.login }));
    }
  }, [dispatch, githubStore.selectedUser]);

  return <></>;
}
