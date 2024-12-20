import Button from "./Button";

const Search = () => {
  return (
    <div className="max-w-[900px] w-[90%] bg-white p-4 rounded-md md:rounded-full flex flex-col md:flex-row items-center gap-4 md:gap-6">
      {/* Dropdown */}
      <select
        className="w-full md:w-[250px] border rounded-full px-4 py-2 border-grey-3 outline-accent-1 placeholder:text-[15px]"
        defaultValue={"0"}
      >
        <option disabled value={0}>
          Type
        </option>
        <option value={1}>Type 1</option>
      </select>

      {/* Input */}
      <input
        className="w-full md:flex-1 border rounded-full px-4 py-2 border-grey-3 outline-accent-1 placeholder:text-[15px]"
        type="text"
        placeholder="Enter Keywords"
      />

      {/* Buttons */}
      <div className="flex gap-2 w-full md:w-auto h-full justify-center">
        <Button>Filters</Button>
        <Button variant={"accent"}>Search</Button>
      </div>
    </div>
  );
};

export default Search;
