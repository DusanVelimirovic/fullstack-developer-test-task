// Import external modules

// Import Internal modules
import "./home.css";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="listContainer">
          <div className="listTitle">Latest </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;