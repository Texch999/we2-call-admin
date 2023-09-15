import React from "react";
import "./styles.css";
function EditProfile() {
  return (
    <div class="container bootstrap snippets bootdey">
      <h1 class="text-primary">Edit Profile</h1>
      <hr />
      <div className="d-flex flex-row justify-content-between">
        <div class="row w-100">
          <div class="col-md-3 w-100">
            <div class="text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                class="avatar img-circle img-thumbnail"
                alt="avatar"
              />
              <h6>Upload a different photo...</h6>
              <input type="file" class="form-control" />
            </div>
          </div>
        </div>
        <div class="col-md-9 personal-info mx-5">
          <div class="alert alert-info alert-dismissable">
            <a class="panel-close close" data-dismiss="alert">
              ×
            </a>
            <i class="fa fa-coffee"></i>
            This is an <strong>.alert</strong>. Use this to show important
            messages to the user.
          </div>
          <h3>Personal info</h3>

          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label class="col-lg-3 control-label my-2">Full Name:</label>
              <div class="col-lg-8">
                <input class="form-control" type="text" value="dey-dey" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label my-2">Whatsapp Number:</label>
              <div class="col-lg-8">
                <input class="form-control" type="text" value="" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label my-2">SkypeID:</label>
              <div class="col-lg-8">
                <input class="form-control" type="text" value="" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label my-2">Phone Number:</label>
              <div class="col-lg-8">
                <input class="form-control" type="text" value="" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label my-2">Email:</label>
              <div class="col-lg-8">
                <input
                  class="form-control"
                  type="text"
                  value="janesemail@gmail.com"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label my-2">Time Zone:</label>
              <div class="col-lg-8">
                <div class="ui-select">
                  <select id="user_time_zone" class="form-control">
                    <option value="Hawaii">(GMT-10:00) Hawaii</option>
                    <option value="Alaska">(GMT-09:00) Alaska</option>
                    <option value="Pacific Time (US &amp; Canada)">
                      (GMT-08:00) Pacific Time (US &amp; Canada)
                    </option>
                    <option value="Arizona">(GMT-07:00) Arizona</option>
                    <option value="Mountain Time (US &amp; Canada)">
                      (GMT-07:00) Mountain Time (US &amp; Canada)
                    </option>
                    <option
                      value="Central Time (US &amp; Canada)"
                      selected="selected"
                    >
                      (GMT-06:00) Central Time (US &amp; Canada)
                    </option>
                    <option value="Eastern Time (US &amp; Canada)">
                      (GMT-05:00) Eastern Time (US &amp; Canada)
                    </option>
                    <option value="Indiana (East)">
                      (GMT-05:00) Indiana (East)
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-8 w-100">
               <button className="add-button">Update Profile</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
