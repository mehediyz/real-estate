import Button from "./Button";

const Search = () => {
  return (
    <div className="max-w-[900px] w-full bg-white p-4 rounded-full flex items-center gap-4">
      <select
        className="w-[250px] border rounded-full px-4 py-2 border-grey-3 outline-accent-1 placeholder:text-[15px]"
        defaultValue={"0"}
      >
        <option disabled value={0}>
          Type
        </option>
        <option value={1}>Type 1</option>
      </select>
      <input
        className="flex-1 border rounded-full px-4 py-2 border-grey-3 outline-accent-1 placeholder:text-[15px] "
        type="text"
        placeholder="Enter Keywords"
      />
      <div className="flex gap-2 h-full">
        <Button>Filters</Button>
        <Button variant={"accent"}>Search</Button>
      </div>
    </div>
  );
};

export default Search;
