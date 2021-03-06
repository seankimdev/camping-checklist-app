import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircle } from "@fortawesome/free-regular-svg-icons";

const FilterContainer = (props) => {
  // declare state to store whether the Unchecked filter is on.
  const [filterCheck, setFilterCheck] = useState(false);

  // useEffect to run filterList function when the filterCheck value is changed
  useEffect(() => {
    props.filterList(filterCheck);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterCheck]);

  // function to invert the filterCheck value onClick
  const triggerFilterCheck = () => {
    setFilterCheck(!filterCheck);
  };

  return (
    <section className="filterContainer">
      <button
        className="iconButton checkButton changeOrange"
        onClick={triggerFilterCheck}
      >
        {filterCheck ? (
          // display checked circle icon when filterCheck==true
          <div>
            <span className="sr-only">Checked Circle</span>
            <FontAwesomeIcon icon={faCheckCircle} aria-hidden={false} />
          </div>
        ) : (
          // display empty circle icon when filterCheck==false
          <div>
            <span className="sr-only">Unchecked Circle</span>
            <FontAwesomeIcon icon={faCircle} aria-hidden={false} />
          </div>
        )}
        <span className="buttonLabel">Filter Remaining Items</span>
      </button>
    </section>
  );
};

export default FilterContainer;
