import { SearchLocation } from "@/api";
import { Button } from "../ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "../ui/command";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../ui/spinner";
import type { Coords } from "@/schemas/coords";
type Props = {
  setCoords: React.Dispatch<React.SetStateAction<Coords>>;
};

export default function SearchBar({ setCoords }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(search);
    }, 750);
    return () => clearTimeout(timer);
  }, [search]);

  const { data, isLoading } = useQuery({
    queryKey: ["weather", query],
    queryFn: () => SearchLocation(query),
    enabled: query === "" ? false : true,
  });

  const handleSelect = (location: string) => {
    const [_, lat, lon] = location.split("|");
    setSearch("");
    setOpen(false);
    setCoords({ lat: Number(lat), lon: Number(lon) });
  };
  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
        Search location
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} className="z-1001">
        <Command>
          <CommandInput
            placeholder="Search..."
            value={search}
            onValueChange={setSearch}
          />
          <CommandList>
            {isLoading && (
              <CommandEmpty>
                <Spinner />
                Searching...
              </CommandEmpty>
            )}
            {data && data.length > 0 && (
              <CommandGroup value={query} heading="Suggestions">
                {data.map((location) => (
                  <CommandItem
                    key={location.id}
                    value={`${location.name}|${location.lat}|${location.lon}`}
                    onSelect={handleSelect}
                  >
                    <span>{location.name}</span>
                    <CommandShortcut>{location.country}</CommandShortcut>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}
