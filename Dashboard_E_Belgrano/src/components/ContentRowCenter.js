import React from "react";
import Categories from "./Categories";
import LastProduct from "./LastProduct";
import LastUser from "./LastUser";

function ContentRowCenter({ props }) {
  return (
    <div className="row">
      {/*<!-- Categories in DB -->*/}
      <Categories props={props} />

      <LastProduct props={props} />

      <LastUser props={props} />
    </div>
  );
}

export default ContentRowCenter;
