import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";

const UpdateUser = ({
  updateFormData,
  setShowUpdateForm,
  getDataFromBackend,
}) => {
  const userSubmit = async (FormData) => {
    const response = await fetch(
      "http://localhost:5001/user/update/" + FormData._id,
      {
        method: "PUT",
        body: JSON.stringify(FormData),
        headers: {
          "content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "Updated Successfully",
        text: "well done!",
      });
      getDataFromBackend();
      setShowUpdateForm(false);
    } else {
      console.log(response.status);
      console.log("something went wrong ");
      Swal.fire({
        icon: "error",
        title: "something went wrong ",
        text: "Wrong",
      });
    }
  };

  return (
    <div className="containerup">
      <div className="card c1">
        <div className="row">
          <div className="col-md">
            <div className="my-card-body">
              <Formik initialValues={updateFormData} onSubmit={userSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-center mb-6">Update Details</h3>
                    <TextField
                      label="Username"
                      id="fname"
                      variant="outlined"
                      className="w-100 mb-4"
                      onChange={handleChange}
                      value={values.fname}
                    />

                    <TextField
                      label="Email"
                      id="email"
                      onChange={handleChange}
                      value={values.email}
                      variant="outlined"
                      className="w-100 mb-4"
                    />

                    <Button variant="contained" type="submit" className="w-50 ">
                      Update
                    </Button>

                    <Button
                      variant="contained"
                      color="error"
                      onClick={(e) => setShowUpdateForm(false)}
                      className="w-50"
                    >
                      Cancel
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default UpdateUser;
