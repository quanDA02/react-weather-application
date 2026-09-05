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
import type { locationHistory } from "@/schemas/locationSearchSchema";
import { getHistory, addHistory, deleteHistory } from "../utils/history";
import { Trash2Icon } from "lucide-react";
type Props = {
  setCoords: React.Dispatch<React.SetStateAction<Coords>>;
};

export default function SearchBar({ setCoords }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState(getHistory());

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
    const [name, country, lat, lon, isNew] = location.split("|");
    setSearch("");
    setOpen(false);
    const l: locationHistory = {
      name: name,
      country: country,
      lat: Number(lat),
      lon: Number(lon),
    };
    if (isNew == "1") addHistory(l);
    setHistory(getHistory());
    setCoords({ lat: Number(lat), lon: Number(lon) });
  };

  const handleDelete = (index: number) => {
    const oldHistory = history;
    const newHistory = oldHistory.filter((_, i) => i != index);
    setHistory(newHistory);
    deleteHistory(newHistory);
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
                    key={location.name}
                    value={`${location.name}|${location.country}|${location.lat}|${location.lon}|1`}
                    onSelect={handleSelect}
                  >
                    <span>{location.name}</span>
                    <CommandShortcut>{location.country}</CommandShortcut>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {history && history.length > 0 && (
              <CommandGroup value={query} heading="Recent">
                {history.map((location, index) => (
                  <CommandItem
                    key={location.name}
                    value={`${location.name}|${location.country}|${location.lat}|${location.lon}|0`}
                    onSelect={handleSelect}
                  >
                    <span>{location.name}</span>
                    <CommandShortcut>{location.country}</CommandShortcut>
                    <Button
                      variant="destructive"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(index);
                      }}
                    >
                      <Trash2Icon />
                    </Button>
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
