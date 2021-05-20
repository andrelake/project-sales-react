import Navbar from "./components/navbar";
import Footer from "./components/footer";
import DataTable from "./components/datatable";
import BarChart from "./components/barchart";
import DonutChart from "./components/donutchart";

function App() {
  return (
      <>
          <Navbar/>
          <div className={"container"}>
              <h1 className={"text-primary text-center py-5"}>DASHBOARD</h1>
              <DataTable></DataTable>
              <div className={"row"}>
                  <div className={"col-sm-6"}>
                      <h5 className={"text-center"}>Percent of Success</h5>
                      <BarChart></BarChart>
                  </div>
                  <div className={"col-sm-6"}>
                      <h5 className={"text-center"}>Sales Percentage</h5>
                      <DonutChart></DonutChart>
                  </div>
              </div>
          </div>
          <Footer></Footer>
      </>
  );
}

export default App;
