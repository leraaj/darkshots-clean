import React from "react";
import InputField from "../../../components/forms/InputField";
import SelectField from "../../../components/forms/SelectField";
import Checkbox from "../../../components/buttons/checkbox/Checkbox";
const CareerForm = ({ items }) => {
  return (
    <form method="" action="" className="form row mx-0">
      <div className="th-fs-2 text-uppercase th-fw-bold">User Information</div>
      <div className="row mx-0 px-2">
        <div className="col-6">
          <InputField name="Applicant's Name" type="text" />
        </div>
        <div className="col-6">
          <InputField name="Contact number " type="text" />
        </div>
        <div className="col-6">
          <InputField name="Email" type="text" />
        </div>
        <div className="col-6">
          {/* <SelectField name="Preferred Position" items={items} /> */}
          <div className="d-flex flex-wrap w-100 gap-2">
            {items.map((item) => {
              return (
                <>
                  <Checkbox value={item.title} />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="th-fs-2 text-uppercase th-fw-bold">Files</div>
      <div className="row mx-0 px-2">
        <div className="col-6">
          <InputField name="Curriculum Vitae" type="file" />
        </div>
        <div className="col-6">
          <InputField name="Resume" type="file" />
        </div>
        <div className="col-6">
          <InputField
            name="Portfolio"
            placeholder={"Select JPG files"}
            type="file"
            accept=".jpeg, .jpg, .png"
            multiple={true}
          />
        </div>
      </div>
    </form>
  );
};
export default CareerForm;
