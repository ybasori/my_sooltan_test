import styles from "./SearchUser.module.scss";
import InputField from "@/src/components/atoms/InputField/InputField";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchUser } from "@/src/domain/github/github.thunk";
import { AppDispatch, RootState } from "@/src/store";
import Image from "next/image";
import { setSelectedUser } from "@/src/domain/github/github.reducer";

export default function SearchUser() {
  const dispatch: AppDispatch = useDispatch();
  const githubStore = useSelector((state: RootState) => state.github);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (search !== "") dispatch(getSearchUser({ searchUser: search }));
  }, [dispatch, search]);
  return (
    <div className={styles["container"]}>
      <InputField
        placeholder="search user"
        value={search}
        onChange={(e) => {
          setShowDropdown(true);
          return setSearch(e.currentTarget.value);
        }}
      />
      {showDropdown && (
        <div className={styles["group"]}>
          {githubStore.searchUser?.items.map((user, index) => (
            <div
              className={styles["item"]}
              key={`user-${index}`}
              onClick={() => {
                setShowDropdown(false);
                setSearch(user.login);
                return dispatch(setSelectedUser(user));
              }}
            >
              <Image
                width={50}
                height={50}
                className={styles["photo"]}
                loading="lazy"
                src={user.avatar_url}
                alt=""
              />
              <div className={styles["summary"]}>
                <div className={styles["name"]}>{user.login}</div>
                <div className={styles["username"]}>{user.html_url}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
