import type { ComponentProps, Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { hiraToKana } from "utiles/hiraToKana";

const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(" ");

type Props = {
  label?: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  data: string[];
};

const Autocomplete: FC<Props> = ({
  label,
  value: selectedDino,
  onChange: handleSelected,
  data,
}) => {
  const [query, setQuery] = useState("");

  const handleQuery: ComponentProps<"input">["onChange"] = (e) =>
    setQuery(hiraToKana(e.target.value));

  const filteredPeople =
    query === "" ? data : data.filter((data) => data.includes(query));

  return (
    <Combobox as="div" value={selectedDino} onChange={handleSelected}>
      <Combobox.Label className="font-medium">{label}</Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="py-1 pr-10 pl-3 w-full text-xl rounded-md border border-gray-400 focus:border-[#339af0] focus:outline-none focus:ring-1 focus:ring-[#339af0]"
          onChange={handleQuery}
          displayValue={(dino: string) => dino}
        />

        {filteredPeople.length > 0 && (
          <Combobox.Options className="overflow-auto absolute z-10 py-1 mt-1 w-full max-h-60 text-base sm:text-sm bg-white rounded-md focus:outline-none ring-1 ring-black">
            {filteredPeople.map((dinoName) => (
              <Combobox.Option
                key={dinoName}
                value={dinoName}
                className={({ active }) =>
                  classNames(
                    "relative py-2 pr-9 pl-3 my-1 mx-2 select-none",
                    active ? "bg-gray-100 " : "",
                  )
                }
              >
                {({ selected }) => (
                  <span
                    className={classNames(
                      "block truncate",
                      selected ? "font-semibold" : "",
                    )}
                  >
                    {dinoName}
                  </span>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};

export default Autocomplete;
