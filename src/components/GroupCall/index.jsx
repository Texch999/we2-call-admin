import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { call } from "../../config/axios";
import {
  GET_ALL_CLIENTS,
  GET_LIVE_MEETING,
  SIGNAL_RECORDING,
  UPDATE_MEETING,
  UPDATE_PROFILE,
} from "../../config/endpoints";
import { Images } from "../../images";
import { setLoading } from "../../redux/actions";
import { setMeetingStartStatus } from "../../redux/actions/dataActions";
import "./Styles.css";
import Calling from "../video-call/Calling";
import MatchPosition from "../video-call/MatchPosition";
class GroupCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allUserList: [],
      allUserListToJoin: [],
      showUsersListInSideBar: false,
      customersList: [],
      meetingStarted: false,
      tags: [],
      eventName: "",
      isVideoEnabled: "Y",
      eventTime: new Date(),
      userIds: [],
      appRole: localStorage.getItem("role"),
      hideBar: false,
      isAdminCreated:
        localStorage.getItem("isAdminMeeting") === "true" ? true : false,
      aliasNameModal: false,
      userSettingsEnable: false,
      inputDiv: "",
      updateFlag: true,
      isTableDataShow: false,
      isAudioOn: false,
      liveMeeting: {},
      meetingInputs: {
        audio: true,
        video: true,
      },
    };
    this.observer = new MutationObserver(this.handleMutation);
    this.audio = new MutationObserver(this.handleAudioMutation);
    this.video = "";
    this.realTimeAudio = "";
    this.onGoingMeeting = "";
    this.realTimeVideo = "";
    this.options = {
      childList: true, // Listen for changes to the child nodes of the target node
      subtree: true, // Listen for changes to the entire subtree of the target node
    };
  }

  meeting_id = this.props.meeting_id;
  appDiv;
  zp;
  systemReq;
  devicesInfo;
  signatureNonce = "";
  // || crypto.randomBytes(8).toString("hex");
  async componentDidMount() {
    if (this.zp) {
      this.zp.destroy();
    }
    // this.props.setMeetingStartStatus(true);
    // if (
    //   !AndroidPermissions.hasPermission(AndroidPermissions.PERMISSION.CAMERA)
    // ) {
    //   await AndroidPermissions.requestPermission(
    //     AndroidPermissions.PERMISSION.CAMERA
    //   );
    // }
    // if (
    //   !AndroidPermissions.hasPermission(
    //     AndroidPermissions.PERMISSION.RECORD_AUDIO
    //   )
    // ) {
    //   await AndroidPermissions.requestPermission(
    //     AndroidPermissions.PERMISSION.RECORD_AUDIO
    //   );
    // }

    this.appDiv = document.getElementById(`group-call`);
    // if(this.appDiv){
    this.appDiv.innerHTML = `<h1></h1>`;
    // }
    // await this.getAllCallHistoryList();
    // this.props.setMeetingStartStatus(true);
    if (
      localStorage.getItem("isAdminMeeting") == undefined ||
      localStorage.getItem("isAdminMeeting") == null
    ) {
      this.props.history.goBack();
    }
    await this.getAllUsers();
    await this.getLiveMeetingData();
    const recordParamsObj = {
      meeting_id: this.props.match.params.id,
      register_id: localStorage.getItem("register_id"),
      type: "get-live-meeting",
    };
    // const meetingData = await this.callTokenApi(recordParamsObj);

    // const liveMeeting = meetingData?.body?.Items?.[0]
    // this.setState({ liveMeeting, isAdminCreated: liveMeeting ? true : false })
    await this.init();

    const butttonClick = document.getElementsByTagName("button")?.[0];
    if (butttonClick?.innerHTML === "Join") {
      butttonClick.addEventListener("click", async () => {
        const inputData = document.getElementsByTagName("input")?.[0].value;
        const register_id = localStorage.getItem("register_id");
        const payload = { alias_name: inputData, register_id };
        await call(UPDATE_PROFILE, payload)
          .then((res) => {
            if (res.status === 200) {
              localStorage.setItem("aliasName", inputData);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }
  handleAudioMutation = () => {
    let elemToObserve =
      document.getElementById("audio_video_div")?.childNodes[0];
    const that = this;
    const currentMeeting = this.state?.meetingData;
    // const currentMeeting = allMeetings.filter((item=>item.roomId === this.roomId))?.[0]||{}
    if (!document.getElementsByClassName("invite-img-div")[0]) {
      const imageDiv = document.createElement("div");
      imageDiv.className = "invite-img-div";
      const img = document.createElement("img");
      img.className = "meeting-avator";
      img.src = currentMeeting?.callerImg
        ? `https://texch-images.s3.eu-west-1.amazonaws.com/profile-images/${currentMeeting.callerImg}`
        : Images.CallingProfileImage;
      imageDiv.appendChild(img);
      const pTag = document.createElement("p");
      pTag.className = "meeting-invitor-div";
      pTag.innerText = `${this.state?.liveMeeting?.createdBy || "unknown"}`;
      imageDiv.appendChild(pTag);
      const pTag2 = document.createElement("p");
      pTag2.className = "meeting-invitor-call";
      pTag2.innerText = `Inviting for ${
        this.state?.liveMeeting?.video_call_type ? "Video" : "Audio"
      } call...`;
      imageDiv.appendChild(pTag2);
      document
        .getElementById("audio_video_div")
        ?.parentNode.appendChild(imageDiv);
    }
    // this.setState({meetingInputs:{...this.state.meetingInputs, audio:true}})

    this.audio = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName == "class") {
          if (that.state.meetingInputs?.audio) {
            that.setState({
              meetingInputs: { ...that.state.meetingInputs, audio: false },
            });
            document
              .getElementById("audio_call_on")
              ?.setAttribute("id", "audio_call_off");
          } else {
            that.setState({
              meetingInputs: { ...that.state.meetingInputs, audio: true },
            });
            document
              .getElementById("audio_call_off")
              ?.setAttribute("id", "audio_call_on");
          }
        }
      });
    });
    if (elemToObserve != null) {
      this.audio.observe(elemToObserve, { attributes: true });
    }
  };
  handleVideoMutation = () => {
    let element = document.getElementById("audio_video_div")?.childNodes;
    let elemToObserve =
      element?.length == 3
        ? element[2]
        : element?.length == 2
        ? element[1]
        : null;
    const that = this;
    this.video = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName == "class") {
          if (that.state.meetingInputs.video) {
            that.setState({
              meetingInputs: { ...that.state.meetingInputs, video: false },
            });

            document
              .getElementById("video_call_on")
              ?.setAttribute("id", "video_call_off");
          } else {
            that.setState({
              meetingInputs: { ...that.state.meetingInputs, video: true },
            });
            document
              .getElementById("video_call_off")
              ?.setAttribute("id", "video_call_on");
          }
        }
      });
    });
    if (elemToObserve != null) {
      this.video.observe(elemToObserve, { attributes: true });
    }
  };
  handleMutation = (mutationsList) => {
    if (
      this.state?.liveMeeting?.video_call_type &&
      !mutationsList[0]?.nextSibling?.children[1]?.getAttribute("id")
    ) {
      mutationsList[0]?.nextSibling?.setAttribute("id", "audio_video_div");
      mutationsList[0]?.nextSibling?.children[1]?.setAttribute(
        "id",
        "video_call_on"
      );
      mutationsList[0]?.nextSibling?.children[0]?.setAttribute(
        "id",
        "audio_call_on"
      );
      this.handleAudioMutation();
      this.handleVideoMutation();
    } else if (
      !mutationsList[2]?.nextSibling?.children[1]?.getAttribute("id")
    ) {
      mutationsList[2]?.nextSibling?.setAttribute("id", "audio_video_div");
      mutationsList[2]?.nextSibling?.children[0]?.setAttribute(
        "id",
        "audio_call_on"
      );
      this.handleAudioMutation();
    }
    // mutationsList[1]?.nextSibling?.setAttribute("id","audio_video_div");

    // this.handleAudioMutation();

    // this.setState({previousSate});
    // console.log("meeting",document.getElementById("group-call")?.childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[1]?.childNodes[0]);
    // let index = 1;
    // if(document.getElementById("audio_video_div")?.childNodes?.length ==3) {
    //   index = 2;
    // }
    // console.log("previousSate?.nextSibling?.children",previousSate?.nextSibling?.children);
    // if( document.getElementById("group-call")?.childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[1]?.childNodes[index]?.classList[0] !== previousSate?.nextSibling?.children[index]?.classList[0]){
    //   if( document.getElementById("video_call_off")) {
    //     document.getElementById("video_call_off").setAttribute("id","video_call_on")
    //   }else {
    //     document.getElementById("video_call_on").setAttribute("id","video_call_off")
    //   }
    // }
    // console.log(document.getElementById("group-call")?.childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[2]?.childNodes[0]);
    // console.log(previousSate?.nextSibling?.children[0]?.classList,"#####");
    // console.log("this.state.isAudioOn",this.state.isAudioOn);
    // if(!this.state.isAudioOn) {
    //   console.log("if executing",this.state.isAudioOn);
    //   mutationsList[0]?.nextSibling?.children[0]?.setAttribute("id","audio_call_on")
    //   this.setState({
    //     isAudioOn:true
    //   })
    // }else {
    //   console.log("else executing",this.state.isAudioOn);
    //   mutationsList[0]?.nextSibling?.children[0]?.setAttribute("id","audio_call_off")
    //   this.setState({
    //     isAudioOn:false
    //   })
    // }

    // if(document.getElementById("group-call")?.childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[2]?.childNodes[0]?.classList[0] !== previousSate?.nextSibling?.children[0]?.classList[0]){
    //  let audioOnOrOff = 'audio_call_off';
    //   if(document.getElementById("audio_call_off")){
    //     audioOnOrOff = 'audio_call_on'
    //   }
    //   mutationsList[0]?.nextSibling?.children[0]?.setAttribute("id",audioOnOrOff)
    // }
    // const voiceCallClass = document.getElementById("audio_call_on")?.classList[0]
    // this.setState({voiceCallClass})
    // console.log(voiceCallClass,this.state.voiceCallClass,"voiceCallClass");
    // if(this.state.voiceCallClass && voiceCallClass!==this.state.voiceCallClass){
    //   const micInput = mutationsList[0]?.nextSibling?.children[0].getAttribute('id') == "audio_call_on" ? "audio_call_off":"audio_call_on"
    //   console.log(micInput,document.getElementById("audio_call_on"),"micInput$$$$$");
    //   this.setState({micInput})
    //   document.getElementById(micInput!=="audio_call_on" ? "audio_call_on":"audio_call_off").setAttribute("id",micInput)
    //   // mutationsList[0]?.nextSibling?.children[0]?.setAttribute("id",micInput)
    //   console.log(micInput,mutationsList[0]?.nextSibling?.children[0],"micInput$$$$$");
    // }
  };
  animationForMeetingCreator(
    volumeHeightForCreatorStatus,
    domElementsUser,
    index
  ) {
    const creatorDiv =
      domElementsUser.parentElement?.parentElement?.parentElement
        ?.childNodes[0];
    if (
      volumeHeightForCreatorStatus &&
      parseInt(volumeHeightForCreatorStatus) >= 1
    ) {
      creatorDiv?.childNodes[1]?.classList.add("user-card-container");
      if (creatorDiv?.childNodes?.length <= 5) {
        const spanItem = document.createElement("span");
        creatorDiv?.childNodes[1]?.childNodes[0]?.appendChild(spanItem);
      }
      creatorDiv?.childNodes[1]?.childNodes[0]?.classList?.add("circle");
    } else {
      creatorDiv?.childNodes[1]?.childNodes[0]?.classList?.remove("circle");
      creatorDiv?.childNodes[1]?.classList?.remove("user-card-container");
    }
  }
  animationForMeetingUsers(
    volumeHeightStatus,
    domElementsUser,
    randomColor,
    index
  ) {
    const userDiv =
      domElementsUser?.parentElement?.parentElement?.parentElement
        ?.childNodes[1]?.childNodes[0];
    var isAndroid = navigator.userAgent.match(/Android/i);

    if (isAndroid) {
      var secondChild = document.querySelector(
        ".ZegoRoomMobile_ZegoRoom > :nth-child(1)"
      );
      if (secondChild) {
        secondChild.style.bottom = "-50px";
      }
    }
    if (volumeHeightStatus && parseInt(volumeHeightStatus) >= 1) {
      userDiv?.childNodes[0]?.classList.add("user-meeting-avator");
      domElementsUser?.classList?.remove("user-meeting-avator");
      if (randomColor && userDiv?.childNodes[0]?.style) {
        userDiv.childNodes[0].style["background"] = `#${randomColor}`;
        userDiv.childNodes[0].style.color = "white";
      }
      domElementsUser?.parentElement?.parentElement?.parentElement?.childNodes[0]?.classList.add(
        "border-color-meeting"
      );
      domElementsUser?.classList?.remove("border-color-meeting");
    } else {
      userDiv?.childNodes[0]?.classList.remove("user-card-container");
      userDiv?.childNodes[0]?.classList.remove("user-meeting-avator");
      domElementsUser?.parentElement?.parentElement?.parentElement?.childNodes[0]?.classList.remove(
        "border-color-meeting"
      );
    }
  }

  componentDidUpdate(prevPros) {
    var isAndroid = navigator.userAgent.match(/Android/i);

    // Check if the user is using an iOS device
    var isiOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
    if (isAndroid) {
      var secondChild = document.querySelector(
        ".ZegoRoomMobile_ZegoRoom > :nth-child(1)"
      );
      if (secondChild) {
        secondChild.style.bottom = "-50px";
      }
    } else if (isiOS) {
      var secondChild = document.querySelector(".we-2-call-main-section");
      if (secondChild) {
        secondChild.style.top = "100px";
      }
    }
    // this.appDiv = document.getElementById(`group-call`)
    // if(!this.appDiv){
    // this.appDiv.innerHTML = `<h1></h1>`;
    // }
    setInterval(() => {
      const domElementsUsersArr =
        document.getElementsByClassName("unmuteVideo");
      if (domElementsUsersArr.length > 0) {
        for (const index in domElementsUsersArr) {
          const cloudDataExist =
            domElementsUsersArr[index]?.innerHTML?.length > 0 &&
            domElementsUsersArr[index]?.innerHTML?.includes("cloud_record");
          if (cloudDataExist) {
            domElementsUsersArr[
              index
            ]?.parentElement?.parentElement?.parentElement?.childNodes[
              index
            ]?.classList.add("hide-card-container");
          }
          const backgroundAdded =
            domElementsUsersArr[index]?.parentElement?.parentElement
              ?.parentElement?.childNodes[1]?.childNodes[0]?.childNodes[0]
              ?.style?.background;
          // parentElement?.parentElement?.parentElement?.childNodes[0]?.childNodes[0]
          let randomColor = "";
          if (!backgroundAdded) {
            randomColor = Math.floor(Math.random() * 16777215).toString(16);
          }
          const newIndex = index == 0 ? 2 : 1;
          const volumeHeightStatus =
            domElementsUsersArr[index]?.parentElement?.childNodes[newIndex]
              ?.childNodes[0]?.style?.height;
          domElementsUsersArr[index]?.classList?.remove("user-meeting-avator");
          // const volumeHeightStatus1 =
          // domElementsUsersArr[index]?.parentElement?.childNodes[2]?.childNodes[0]?.style?.height;
          this.animationForMeetingUsers(
            volumeHeightStatus,
            domElementsUsersArr[index],
            randomColor,
            index
          );
          // this.animationForMeetingUsers(
          //   volumeHeightStatus1,
          //   domElementsUsersArr[index],
          //   randomColor,
          //   index
          // );
          this.appDiv = document.getElementById(`group-call`);
          this.appDiv?.classList?.remove("pre-join-meeting");
        }
      }
    }, 1000);
    if (this.props.isMeetingEnable && !prevPros.isMeetingEnable) {
      const targetElement = document.getElementById("group-call");
      this.setState({ targetElement });
      this.observer.observe(targetElement, this.options);
      this.appDiv = document.getElementById(`group-call`);
      // this.appDiv.innerHTML = ``;
      this.appDiv?.classList?.add("pre-join-meeting");
    }
    this.appDiv?.childNodes[0]?.childNodes[0]?.childNodes[1]?.classList?.add(
      "pre-join-input-box-container"
    );
    const butttonClick = document.getElementsByTagName("button");
    console.log("Return to home screen", butttonClick);
  }
  componentWillUnmount() {
    if (this.zp) {
      this.zp.destroy();
    }
    localStorage.removeItem("isAdminMeeting");
  }

  // get token
  generateToken(tokenServerUrl, userID, meeting_id, userName) {
    // Obtain the token interface provided by the App Server
    return fetch(
      `${tokenServerUrl}/access_token?userID=${userID}&userName=${userName}&meeting_id=${meeting_id}&expired_ts=7200`,
      {
        method: "GET",
      }
    ).then((res) => res.json());
  }

  randomID(len) {
    let result = "";
    if (result) return result;
    var chars =
        "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }

  getUrlParams(url) {
    let urlStr = url.split("?")[1];
    const urlSearchParams = new URLSearchParams(urlStr);
    const result = Object.fromEntries(urlSearchParams.entries());
    return result;
  }

  getCustomersList = async () => {
    const id = localStorage.getItem("id");
    if (!localStorage.getItem("joinAsaUser")) {
      // await call(GET_CUSTOMERS_LIST)
      //   .then((res) => {
      //     if (res.status === 200) {
      // let list =[]
      // if(this.state.appRole ==="master"){
      // list = getDataInArray(res)?.map((item) => {
      //   return { label: item.user_name, value: item.user_id };
      // });
      // } else {
      //   list = getDataInArray(res)?.map((item) => {
      //     return { label: item.master_name, value: item.master_id };
      //   });
      // }
      //   this.setState({ customersList: list });
      // } else {
      //   console.log(res.err);
    }
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
    // }
  };
  async getLiveMeetingData() {
    const creator_id = this.state.isAdminCreated
      ? localStorage.getItem("register_id")
      : localStorage.getItem("creator_id");
    return await call(GET_LIVE_MEETING, {
      creator_id,
      meeting_id: this.props.match.params.id,
    })
      .then((res) => {
        const data = res.data?.data?.Items?.[0];
        this.setState({ liveMeeting: data });
      })
      .catch((err) => {
        throw err;
      });
  }
  async callTokenApi(paramsObj, flag) {
    // setLoading(true);
    paramsObj["userType"] = "admin";
    return await call(SIGNAL_RECORDING, paramsObj)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  }
  async init(flag) {
    let callUserId =
      localStorage.getItem("register_id") + "" + this.props.match.params.id;
    const paramsObj = {
      register_id: this.state.isAdminCreated
        ? localStorage.getItem("register_id")
        : localStorage.getItem("creator_id"),
      meeting_id: this.props.match.params.id,
      callUserId,
      type: "generate_token",
    };
    const userName =
      localStorage.getItem("aliasName") || localStorage.getItem("username");
    const adminObj = {
      showOnlyAudioUser: true,
      showNonVideoUser: true,
    };
    // : {};
    let response = await this.callTokenApi(paramsObj, flag);
    response = JSON.parse(JSON.stringify(response));
    const meeting_id = this.props.match.params.id;
    const appId = response?.appId;
    const token = response?.token;
    this.setState({ token });
    const payloadObject = {
      room_id: meeting_id,
      privilege: {
        1: 1, // loginRoom: 1 pass , 0 not pass
        2: 0, // publishStream: 1 pass , 0 not pass
      },
      stream_id_list: null,
    }; //
    let kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
      +appId,
      token,
      meeting_id,
      callUserId,
      userName
    );
    let userSettings = this.state?.liveMeeting?.video_call_type;
    this.zp = ZegoUIKitPrebuilt.create(kitToken);
    this.zp.joinRoom({
      container: this.appDiv,
      maxUsers: 20,
      facingMode: "environment",
      turnOnCameraWhenJoining: userSettings,
      showMyCameraToggleButton: userSettings,
      showAudioVideoSettingsButton: true,
      InvitationTypeVideoCall: true,
      showOnlyAudioUser: false,
      showNonVideoUser: true,
      showScreenSharingButton: true,
      showLayoutButton: false,
      showRoomDetailsButton: false,
      showPinButton: false,
      showRoomDetailsButton: false,
      lowerLeftNotification: {
        showUserJoinAndLeave: false,
      },
      // sharedLinks: [
      //   {
      //     name: "Personal link",
      //     url: window.location.origin + "/" + window.location.hash,
      //   },
      // ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        config: {
          GroupCall: {
            role: "Host",
          },
        },
      },
      showPreJoinView: true,
      ...adminObj,
      showUserList: false,
      onJoinRoom: async (users) => {
        const recordParamsObj = {
          meeting_id: this.props.match.params.id,
          register_id: localStorage.getItem("register_id"),
          type: "startRecord",
        };
        this.setState({ meetingStarted: true });
        this.appDiv = document.getElementById(`group-call`);
        this.appDiv?.classList?.add("meeting-started");
        localStorage.setItem("meetingmeeting_id", this.props.match.params.id);
        // this.props.setMeetingStartStatus(true);
        const id = document.getElementById("audio_video_div");
        if (id?.nextElementSibling?.classList[0] === "invite-img-div") {
        }

        if (this.state.isAdminCreated) {
          this.callTokenApi(recordParamsObj);
        }
        this.setState({ showUsersListInSideBar: true });
      },
      onLeaveRoom: (users) => {
        const role = localStorage.getItem("role");
        const stopRecordParamsObj = {
          meeting_id: this.props.match.params.id,
          type: "stopRecord",
          register_id: localStorage.getItem("register_id"),
        };
        // const objKey = role === "master" ? "masterId" : "adminId";
        // stopRecordParamsObj[objKey] = localStorage.getItem("id");
        // this.props.setMeetingStartStatus(false);

        if (this.state.isAdminCreated) {
          this.callTokenApi(stopRecordParamsObj);
        }
        const removeItem = localStorage.getItem("joinAsaUser");
        if (removeItem) {
          localStorage.removeItem("joinAsaUser");
        }
        localStorage.removeItem("isAllUserAccessStatus");
        // window.close()
        // this.props.history.push('/up-coming-meetings');
      },
      onUserJoin: (users) => {
        // this.state.allUserListToJoin.filter(users=>users.UserId ===userID)
        const findIndex = this.state.allUserListToJoin?.findIndex(
          (elem) => users[0].userID == (elem.UserId || elem.userID)
        );
        const domElementsUsersArr =
          document.getElementsByClassName("unmuteVideo");

        if (findIndex === -1 || findIndex === undefined) {
          this.setState({
            allUserListToJoin: [...this.state.allUserListToJoin, users[0]],
            domElementsUsersArr: document.getElementsByClassName("unmuteVideo"),
          });
        }
      },
      onUserLeave: (users) => {
        this.setState({
          allUserListToJoin: this.state.allUserListToJoin?.filter(
            (elem) =>
              !users.find(
                ({ userID }) => (elem.UserId || elem.userID) === userID
              ) && elem
          ),
        });
      },
      preJoinViewConfig: {
        title: "Welcome",
      },
      layout: "Grid",
    });
  }

  // getAllUsers = async () => {
  //   if (!this.state.isAdminCreated) {
  //     await call(SIGNAL_RECORDING, {
  //       register_id: localStorage.getItem("register_id"),
  //       meeting_id: this.props.match.params.id,
  //       type: "get-users-list",
  //       userType: "admin",
  //     })
  //       .then((res) => {
  //         let result = res?.data?.body?.Data?.UserList;
  //         this.setState({ allUserListToJoin: result });
  //         this.setState({
  //           tags: result?.map((tag) => tag.UserName || tag?.userName),
  //         });
  //       })
  //       .catch((err) => {
  //         throw err;
  //       });
  //   }
  // };

  getAllUsers = async () => {
    await call(GET_ALL_CLIENTS, {
      register_id: localStorage.getItem("register_id"),
      account_role: localStorage.getItem("account_role"),
    })
      .then((res) => {
        let result = res?.data?.data;
        this.setState({ allUserListToJoin: result });
        // this.setState({
        //   tags: result?.map((tag) => tag.UserName || tag?.userName),
        // });
      })
      .catch((err) => {
        throw err;
      });
  };
  handleInputChange = (value) => {
    this.onSubmitClick(value);
  };

  handleClose = async (removedTag) => {
    const newTags = this.state.tags?.filter(
      (tag) => tag.value !== removedTag.value
    );
    this.setState({ tags: newTags });
    await this.getAllUsers();
  };

  // getAllCallHistoryList = async () => {
  //   const appRole = localStorage.getItem("role");
  //   const id = localStorage.getItem("id");
  //   const roleBasedParam =
  //     appRole === "admin" ? { adminId: id } : { masterId: id };
  //   await call(ADMIN_GET_ALL_MEETINGS, {
  //     ...roleBasedParam,
  //     eventsFor: "upcoming",
  //   })
  //     .then((res) => {
  //       const temp = res?.data?.data?.filter(
  //         (it) => it.meeting_id === this.props.match.params.id
  //       );
  //       let resultUserIds = [];
  //       this.state.customersList?.filter((item) =>
  //         temp[0]?.userIds?.forEach((tag) => {
  //           if (tag === item.value) resultUserIds.push(item.label);
  //         })
  //       );
  //       // console.log({resultUserIds})
  //       this.setState({ tags: resultUserIds })
  //       this.setState({
  //         eventName: temp[0]?.eventName,
  //         isVideoEnabled: temp[0]?.isVideoEnabled,
  //         eventTime: temp[0]?.eventTime,
  //         userIds: resultUserIds,
  //       });
  //     })
  //     .catch((err) => {
  //       throw err;
  //     });
  // };

  onSubmitClick = async (values) => {
    let res = [];
    this.state.customersList?.filter((item) =>
      values?.forEach((tag) => {
        if (tag === item.label) res.push(item);
      })
    );
    this.setState({ tags: [...values] });
    const appRole = localStorage.getItem("role");
    const id = localStorage.getItem("id");
    const userName = localStorage.getItem("username");
    let payload = {
      meeting_id: this.props.match.params.id || `${new Date().getTime()}`,
      userIds: res?.map((item) => item.value),
      eventTime: moment(
        (moment.unix(this.state.eventTime / 1000).format("YYYY-MM-DD") || "") +
          " " +
          (moment.unix(this.state.eventTime / 1000).format("HH:mm:ss A") || ""),
        "YYYY-MM-DD HH:mm:ss"
      ).valueOf(),
      eventName: this.state.eventName,
      createdBy: userName,
      isVideoEnabled: this.state.isVideoEnabled,
    };
    const roleBasedID =
      appRole === "admin" ? { adminId: id } : { masterId: id };
    payload = { ...payload, ...roleBasedID };
    await call(UPDATE_MEETING, { ...payload })
      .then((res) => {
        if (res.data.error === "false") {
        } else {
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  handleRemoveUserFromMeeting = async (usr) => {
    await call(SIGNAL_RECORDING, {
      register_id: localStorage.getItem("register_id"),
      meeting_id: this.props.match.params.id,
      type: "remove-user-from-room",
      userId: usr?.UserId || usr?.userID,
      userType: "admin",
    })
      .then((res) => {
        const filterUsers = this.state.tags?.filter(
          (itm) => itm !== usr.userName
        );
        this.onSubmitClick(filterUsers);
        this.getAllUsers();
      })
      .catch((err) => {
        throw err;
      });
  };
  render() {
    const butttonClick = document.getElementsByTagName("button");
    const { liveMeeting, meetingStarted } = this.state;
    return (
      <div className={`background`}>
        <div className="background-none"></div>
        <div className="group-call-container flex-center px-2">
          {meetingStarted ? (
            this.state.isAdminCreated ? (
              <Calling
                isAdminCreated={this.state.isAdminCreated}
                meetingId={this.props.match.params.id}
                liveMeeting={this.state.liveMeeting}
              />
            ) : (
              liveMeeting?.meeting_type === "Professional" && (
                <MatchPosition
                  matchId={liveMeeting?.matchId}
                  liveMeeting={liveMeeting}
                />
              )
            )
          ) : null}
          <div id="group-call" className="w-75"></div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (data) => dispatch(setLoading(data)),
    // setMeetingStartStatus: (data) => dispatch(setMeetingStartStatus(data)),
    // setMinimize: (data) => dispatch(setMinimize(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    isMeetingEnable: state?.data?.isMeetingStarted,
    selectedUser: state.common.selectedMaster,
    isMinimize: state?.data?.isMinimize,
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GroupCall)
);
