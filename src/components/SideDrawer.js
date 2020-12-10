import React from "react";
import { Drawer } from "antd";

function SideDrawer({ filterList, setVisibility, visibility }) {
  const renderFilterList = () => {
    const listOfFilters = filterList.map((listItem, i) => (
      <div className="filter-list-item"key={`filter${i}`}>
        {listItem}
        <hr />
      </div>
    ));
    return listOfFilters;
  };
  return (
    <Drawer
      onClose={() => setVisibility(false)}
      placement="left"
      title="Filters"
      visible={visibility}
    >
      {filterList.length && renderFilterList()}
    </Drawer>
  );
}

export default SideDrawer;
