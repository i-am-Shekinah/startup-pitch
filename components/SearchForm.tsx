import { Search } from "lucide-react";
import Form from "next/form";

import SearchFormReset from "./SearchFormReset";

export default function SearchForm({ query }: { query?: string }) {
  return (
    <>
      <Form action="/" scroll={false} className="search-form">
        <input
          type="text"
          name="query"
          placeholder="Search Startups"
          defaultValue={query}
          className="search-input"
        />

        <div className="flex gap-2">
          {query && <SearchFormReset />}

          <button type="submit" className="search-btn text-white !font-light">
            <Search className="size-5" />
          </button>
        </div>
      </Form>
    </>
  );
}
