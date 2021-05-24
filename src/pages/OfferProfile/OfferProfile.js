import React, { Component } from "react";
import moment from "moment";
import Loading from "../../components/Loader";
import Carousel from "../../components/Carousel";
import "./OfferProfile.scss";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offerName: "",
      offerName: "",
      liveStreams: [],
      mostViewedStreams: [],
      waitingForResponse: true,
      error: null
    };
  }

  getofferDataFromTwitch = async () => {
    let waitingForResponse;

    // Gets the raw name of the offer
    let offerRawName =
      this.props && this.props.location && this.props.location.props
        ? this.props.location.props.offerName
        : this.props.location.pathname.match(/[^/]+$/)[0];

    // Makes the offerRawName compatible with API search.
    let offerName = offerRawName.replace(/&|\+/g, match => {
      return match == "&" ? "%26" : match == "+" ? "%2B" : "";
    });

    this.setState({ offerName, offerRawName });

    try {
      let liveStreams = await GetofferStreams(offerName);
      liveStreams.length == 0
        ? (waitingForResponse = false)
        : (waitingForResponse = true);

      let mostViewedStreams = await GetofferViewedStreams(offerName);
      this.setState({ liveStreams, mostViewedStreams, waitingForResponse });
    } catch (error) {
      this.setState({ error: "error" });
      console.log(error);
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getofferDataFromTwitch();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.getofferDataFromTwitch();
    }
  }

  render() {
    const {
      offerName,
      offerRawName,
      liveStreams,
      mostViewedStreams,
      waitingForResponse,
      error
    } = this.state;

    if (error) {
      return (
        <div style={{ margin: "50px", textAlign: "center" }}>
          <h4>Something went wrong.</h4>
        </div>
      );
    }

    let coverArt = `https://static-cdn.jtvnw.net/ttv-boxart/./${offerName}-272x380.jpg`;

    const offerCard = offerName ? (
      <div className="offer-topContainer">
        <div className="offer-logoContainer">
          <div className="offer-offerLogo">
            <img src={coverArt} alt="" />
          </div>
        </div>
        <div className="offer-carouselCard">
          <Carousel
            name={offerRawName}
            clipQuery={`clips/top?offer=${offerName}`}
          />
        </div>
      </div>
    ) : (
      <Loading />
    );

    const title_liveStreams = (
      <h4 className="offer-partTitle" style={{ marginTop: "50px" }}>
        Top Live Streams
      </h4>
    );

    const title_MostViewedStreams = (
      <h4 className="offer-partTitle" style={{ marginTop: "20px" }}>
        Most Viewed Streams
      </h4>
    );

    const renderLiveStreams = liveStreams.length ? (
      liveStreams.map(stream => {
        return (
          <LiveStreamCard
            viewers={stream.viewers}
            url={stream.channel.url}
            imgURL={stream.preview.medium}
            routeParam={stream.channel._id}
            logoURL={stream.channel.logo}
            status={stream.channel.status}
            name={stream.channel.display_name}
            startedAt={"started " + moment(stream.created_at).from(moment())}
          />
        );
      })
    ) : waitingForResponse ? (
      <Loading />
    ) : (
      <h4>Seems like nobody is streaming {offerName}</h4>
    );

    const mostViewedVideosList = mostViewedStreams.length ? (
      mostViewedStreams.map(stream => {
        return (
          <PrevStreamCard
            streamLength={stream.length}
            url={stream.url}
            imgURL={stream.preview.medium}
            title={stream.title}
            offerName={stream.channel.display_name}
            routeParam={"/channel/" + stream.channel._id}
            views={stream.views}
            streamRecordTime={stream.recorded_at}
          />
        );
      })
    ) : waitingForResponse ? (
      <Loading />
    ) : (
      <h4>No videos found of {offerName}</h4>
    );

    return (
      <div>
        {offerCard}
        {title_liveStreams}
        <div className="offer-streamContainer" style={{ marginTop: "100px" }}>
          {renderLiveStreams}
        </div>

        <div>{title_MostViewedStreams}</div>
        <div
          className="offer-streamContainer"
          style={{ marginTop: "100px", marginBottom: "20px" }}
        >
          {mostViewedVideosList}
        </div>
      </div>
    );
  }
}

export default Profile;
