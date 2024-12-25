import Banner from "../../components/Banner/Banner";
import BecomeAMember from "../../components/BecomeAMember/BecomeAMember";
import ExhibitionsCounts from "../../components/ExhibitionsCounts/ExhibitionsCounts";
import LatestNews from "../../components/LatestNews/LatestNews";
import OngoingExhibition from "../../components/OngoingExhibition/OngoingExhibition";
import OpenHours from "../../components/OpenHours/OpenHours";
import TopArtifacts from "../../components/TopArtifacts/TopArtifacts";
import UpcomingExhibitions from "../../components/UpcomingExhibitions/UpcomingExhibitions";

const Home = () => {



  return (
    <div className="mt-24">
      {/* Banner */}
      <Banner />

      {/* Top Artifacts */}
      <TopArtifacts />

      {/* Open Hours */}
      <OpenHours />

      {/* Ongoing Exhibitions */}
      <OngoingExhibition />

      {/* Upcoming Exhibitions */}
      <UpcomingExhibitions />

      {/* Latest News */}
      <LatestNews />

      {/* Become A Member */}
      <BecomeAMember />

      {/* Exibitions Counts */}
      <ExhibitionsCounts />

    </div>
  );
};

export default Home;
