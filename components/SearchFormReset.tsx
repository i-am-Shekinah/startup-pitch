"use client";
import { useState } from "react";

import { X } from "lucide-react";
import Link from "next/link";

export default function SearchFormReset() {
  const [search, setSearch] = useState<string>("");
  const form = document.querySelector(".search-form") as HTMLFormElement;

  if (form) form.reset();

  return (
    <button type="submit" className="search-btn">
      <Link href="/" className="text-white lowercase">
        <X className="size-5" />
      </Link>
    </button>
  );
}
