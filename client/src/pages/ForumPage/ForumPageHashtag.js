import React, { Component } from "react";
import "./ForumPage.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import ModalContainerFollow from "../../components/Modal/_ModalContainer-follow";
import ForumContainer from "../../components/ForumPostContainer/ForumPostContainer";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__Community from "assets/images/community_banner.png";
import Footer from "../../components/Footer/Footer";
import MediaCard from "../../components/MediaCard/MediaCard";
import books from "../../assets/images/media-card-1.png";
import happiness from "../../assets/images/media-card-2.png";
import van from "../../assets/images/media-card-3.png";
import nightSky from "../../assets/images/media-card-4.png";
import waterfall from "../../assets/images/media-card-5.png";
import flight from "../../assets/images/media-card-6.png";

class ForumPageHastag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followTag: false,
      showModal: false
    };
  }

  handleConfirm = evt => {
    evt.preventDefault();
    this.setState({
      followTag: true,
      showModal: false
    });
  };

  handleLeave = evt => {
    evt.preventDefault();
    this.setState({
      followTag: false,
      showModal: false
    });
  };

  handleCloseModal = evt => {
    evt.preventDefault();
    this.setState({
      showModal: false
    });
  };

  handleOpenModal = evt => {
    // evt.preventDefault()
    console.log("Ive been clicked!!!");
    this.setState({
      showModal: true
    });
  };

  handleEvent(evt) {
    evt.preventDefault();
    alert("something happens");
  }
  render() {
    return (
      <div className="ForumPage">
        <NavBar page={2} profileImage={people} />
        <Banner background={Banner__Community}>
          <div className="community-page-header">
            {" "}
            <h3 style={{ margin: 0 }}>#packinglight</h3>
          </div>
          <InputTextField
            type="text"
            name="search directory"
            placeholder="Search in #packinglight"
            variation="wide"
          />
          {this.state.followTag ? (
            <div className="Modal_align">
              <ModalContainerFollow
                buttonText="Unfollow"
                buttonTextColor="white"
                buttonColor="pink"
                buttonSize="small"
                message="Are you sure you want to unfollow?"
                confirmText="Unfollow"
                cancelText="Exit"
                onConfirm={this.handleLeave}
                onClose={this.handleCloseModal}
                modalOpen={this.state.showModal}
                handleOpenModal={this.handleOpenModal}
              />
            </div>
          ) : (
            <div className="Modal_align">
              <ModalContainerFollow
                buttonText="Follow #hashtag"
                buttonTextColor="black"
                buttonColor="yellow"
                buttonSize="small"
                message="Are you sure you want to follow?"
                confirmText="Follow"
                cancelText="Exit"
                onConfirm={this.handleConfirm}
                onClose={this.handleCloseModal}
                modalOpen={this.state.showModal}
                handleOpenModal={this.handleOpenModal}
              />
            </div>
          )}
        </Banner>{" "}
        <div className="hashtag__body">
          <div className="hashtag__bodyLeft">
            <header className="ForumPage__header"></header>
            <div>
              <ForumContainer
                className="ForumPost"
                forumPost={{ topics: ["Parenting", "Vacation", "Topic"], likes: 8, comments: 5 }}
                comments={[
                  {
                    name: "Lexi R.",
                    likes: 2,
                    replies: 0,
                    date: "May 5 ",
                    time: " 4:45pm",
                    body:
                      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit"
                  }
                ]}
              />
              <ForumContainer
                className="ForumPost"
                forumPost={{ topics: ["Parenting", "Vacation", "Topic"], likes: 8, comments: 5 }}
                comments={[
                  {
                    name: "Lexi R.",
                    likes: 2,
                    replies: 0,
                    date: "May 5 ",
                    time: " 4:45pm",
                    body:
                      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit"
                  }
                ]}
              />
              <ForumContainer
                className="ForumPost"
                forumPost={{ topics: ["Parenting", "Vacation", "Topic"], likes: 8, comments: 5 }}
                comments={[
                  {
                    name: "Lexi R.",
                    likes: 2,
                    replies: 0,
                    date: "May 5 ",
                    time: " 4:45pm",
                    body:
                      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit"
                  }
                ]}
              />
            </div>
          </div>
          <div className="hashtag__bodyRight">
            <div className="hashtag_media">
              <h2>Media</h2>
            </div>
            <div className="hashtag_media">
              <div className="hashtag_mediaContainer">
                <div className="hashtag_mediaCard">
                  <MediaCard imageSrc={happiness} size="small" footerText="Posted By: Chandi" />
                </div>
                <div className="hashtag_mediaCard">
                  <MediaCard imageSrc={books} size="small" footerText="Posted By: Chandi" />
                </div>
                <div className="hashtag_mediaCard">
                  <MediaCard imageSrc={van} size="small" footerText="Posted By: Chandi" />
                </div>
              </div>
              <div className="hashtag_mediaContainer">
                <div className="hashtag_mediaCard">
                  <MediaCard imageSrc={nightSky} size="small" footerText="Posted By: Paula" />
                </div>
                <div className="hashtag_mediaCard">
                  <MediaCard imageSrc={waterfall} size="small" footerText="Posted By: Paula" />
                </div>
                <div className="hashtag_mediaCard">
                  <MediaCard imageSrc={flight} size="small" footerText="Posted By: Paula" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer /* history={props.history} handle_logout={props.handle_logout} */ />
      </div>
    );
  }
}

export default ForumPageHastag;
