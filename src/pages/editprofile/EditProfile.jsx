import React, { useState } from "react";
import "./styles.css";
import { ImageBaseUrl, Images } from "../../images";
import { useEffect } from "react";
import {
  GET_USER_INFO,
  EDITPROFILE,
  GENERATE_SIGNED_URL,
} from "../../config/endpoints";
import { call } from "../../config/axios";
function EditProfile() {
  const [editProfileSubmitPopup, setEditProfileSubmitPopup] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_no: "",
    user_name: "",
  });
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(true);
  const [singedUrl, setSignedUrl] = useState("");
  const [status, setStatus] = useState(false);
  const register_id = localStorage?.getItem("register_id");

  // const [present] = useIonToast();

  // const presentToast = (message) => {
  //   present({
  //     message: message,
  //     duration: 1500,
  //     position: "middle",
  //     color: "danger",
  //   });
  // };

  const getProfile = async (id) => {
    const payload = {
      register_id: id,
    };
    try {
      const res = await call(GET_USER_INFO, payload);
      const userProfileData = res?.data?.data[0];
      setFormData({
        first_name: userProfileData?.first_name || "",
        last_name: userProfileData?.last_name || "",
        email: userProfileData?.email || "",
        mobile_no: userProfileData?.mobile_no || "",
        user_name: userProfileData?.user_name || "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const generateSignedUrl = async () => {
    await call(GENERATE_SIGNED_URL, {
      register_id,
      event_type: "user_profile_image",
      folder_name: "profile-images",
    })
      .then(async (res) => {
        let url = res?.data?.data?.result?.signed_url;
        // console.log({url})
        setSignedUrl(url);
      })
      .catch((err) => console.log("generating signed url error", err));
  };

  const onUpdateBtnClick = async () => {
    // inputData.register_id = "client-20230724133719247";
  };

  useEffect(() => {
    getProfile();
  }, []);

  // const handleEditProfileSubmitPopup = () => {
  //   setEditProfileSubmitPopup(true);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const isUserNameValid = formData.user_name.trim() !== "";
    const isMobileNumberValid = formData.mobile_no.trim() !== "";

    setIsUserNameValid(isUserNameValid);
    setIsMobileNumberValid(isMobileNumberValid);

    return isUserNameValid && isMobileNumberValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    singedUrl &&
      profileImage &&
      (await fetch(singedUrl, {
        method: "PUT",
        body: profileImage,
        headers: {
          "Content-Type": "image/jpeg",
          "cache-control": "public, max-age=0",
        },
      })
        .then((res) => {})
        .catch((err) => {
          console.log("err: ", err);
        }));
    if (validateForm()) {
      const updatedProfile = {
        register_id: localStorage?.getItem("register_id"),
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        mobile_no: formData.mobile_no,
        user_name: formData.user_name,
        profile_image: `${ImageBaseUrl}/${"profile-images"}/${register_id}.png`,
      };

      try {
        const response = await call(EDITPROFILE, updatedProfile);
        if (response.status === 200) {
          console.log("Profile updated successfully.");
          setEditProfileSubmitPopup(true);
        } else {
          console.error("Profile update failed:", response.data);
        }
      } catch (error) {
        console.error("An error occurred while updating the profile:", error);
      }
    } else {
      console.log("Form is invalid, please fill in the required fields.");
    }
  };

  return (
    <div className="container bootstrap snippets bootdey">
      <h1>Edit Profile</h1>
      <hr />
      <div className="d-flex flex-row justify-content-between">
        <div className="row w-100">
          <div className="col-md-3 w-100">
            <div className="text-center">
              <img
                src={formData?.profile_image || Images.dhoni_image}
                className="avatar img-circle img-thumbnail"
                alt="avatar"
              />
              <h6>Upload a different photo...</h6>
              <input
                type="file"
                className="form-control"
                onChange={(e) => {
                  setProfileImage(e?.target?.files[0]);
                  generateSignedUrl(register_id);
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-9 personal-info mx-5">
          <h3>Personal info</h3>
          <form className="form-horizontal" role="form">
            <div className="form-group">
              <label className="col-lg-3 control-label my-2">First Name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  placeholder="First Name"
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label my-2">Last Name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  placeholder="Last Name"
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label my-2">Email:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  placeholder="Email ID"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <div>
                <label className="col-lg-3 control-label my-2">
                  Mobile Number:
                </label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    placeholder="Mobile Number"
                    type="number"
                    maxLength={10}
                    name="mobile_no"
                    value={formData.mobile_no}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="col-lg-3 control-label my-2">
                  User Name:
                </label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    placeholder="User Name"
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="col-lg-8 w-100">
                <button
                  className="add-button w-50 d-flex justify-content-center py-2 my-4 clr-white rounded"
                  onClick={handleSubmit}
                >
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
