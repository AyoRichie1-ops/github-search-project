import { useContext } from "react";
import { GithubContext } from "../context/Context";

export const useGlobalContext = () => useContext(GithubContext);