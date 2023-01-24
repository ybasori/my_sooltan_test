import styles from "./SearchUser.module.scss";
import InputField from "@/src/components/atoms/InputField/InputField";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchUser } from "@/src/domain/github/github.thunk";
import { AppDispatch, RootState } from "@/src/store";
import { setSelectedUser } from "@/src/domain/github/github.reducer";
import UserGithub from "../../atoms/UserGithub/UserGithub";

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
        <>
          <div
            className={styles["bg-dropdown"]}
            onClick={() => setShowDropdown(false)}
          ></div>
          <div className={styles["group"]}>
            {githubStore.searchUser?.items.map((user, index) => (
              <UserGithub
                key={`user-${index}`}
                onClick={() => {
                  setShowDropdown(false);
                  setSearch(user.login);
                  return dispatch(setSelectedUser(user));
                }}
                user={user}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
