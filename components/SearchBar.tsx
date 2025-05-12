"use client";
import { useRef, useState } from "react";

import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

type SearchBarProps = {
  initialQuery?: string;
  action?: string;
  placeholder?: string;
  method?: string;
};

export default function SearchBar({
  initialQuery = "",
  action = "/",
  placeholder = "Search Startups",
  method = "GET",
}: SearchBarProps) {
  const [query, setQuery] = useState<string>(initialQuery);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleClear = () => {
    if (query) {
      formRef.current?.reset();
      setQuery("");
      router.push(action);
    }
  };

  return (
    <form ref={formRef} action={action} method={method} className="search-form">
      <input
        type="text"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />

      {query && (
        <button type="reset" onClick={handleClear} className="search-btn">
          <X className="size-5 text-white" />
        </button>
      )}

      <button type="submit" className="search-btn">
        <Search className="size-5 text-white" />
      </button>
    </form>
  );
}
