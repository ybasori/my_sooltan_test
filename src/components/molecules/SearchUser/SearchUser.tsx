import Head from "next/head";
import styles from "./SearchUser.module.scss";
import InputField from "@/src/components/atoms/InputField/InputField";
import { useState } from "react";

export default function SearchUser() {
  const [search, setSearch] = useState("");
  return (
    <>
      <InputField
        placeholder="search user"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
    </>
  );
}
