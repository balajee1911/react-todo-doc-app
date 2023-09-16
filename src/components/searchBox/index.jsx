import "./style.scss";

const SearchBox = ({ setState }) => {
  return (
    <div className="search__box__component">
      <input
        onChange={(event) => {
          setState(event?.target?.value ? event.target.value : "");
        }}
        placeholder="Enter the title"
      />
    </div>
  );
};

export default SearchBox;
