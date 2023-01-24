import styles from "./UserGithub.module.scss";
import Image from "next/image";
import { ISearchUserItem } from "@/src/domain/github/github.type";

export default function UserGithub({
  user,
  onClick,
}: {
  user: ISearchUserItem;
  onClick?: () => void;
}) {
  return (
    <div
      className={`${styles["item"]} ${onClick ? styles["cursor-pointer"] : ""}`}
      onClick={onClick}
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
  );
}
