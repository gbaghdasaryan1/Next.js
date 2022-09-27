import cn from "classnames";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import classes from "./Search.module.css";
import { SearchProps } from "./Search.props";
import GlassIcon from "./glass.svg";
import { useRouter } from "next/router";

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      goToSearch();
    }
  };
  return (
    <div className={cn(className, classes.Search)} {...props}>
      <Input placeholder='Search...' className={classes.Input} value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} checked />
      <Button appearance='primary' className={classes.Button} onClick={goToSearch}>
        <GlassIcon />
      </Button>
    </div>
  );
};

export default Search;
