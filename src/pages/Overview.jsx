import React from "react";
import { useSelector } from "react-redux";
import Kpi from "../components/ui/Kpi";
import AreaLineChart from "../components/ui/AreaLineChart";
import DataTable from "../components/ui/DataTable";
import Card from "../components/ui/Card";
import WorldMap from "../components/ui/WorldMap";
import BiggestChangesTable from '../components/ui/DataTable2';
export default function Overview() {
  const { kpis, spendTrend, campaigns } = useSelector(s => s.dashboard);

  return (
    <div className="space-y-6">
   <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
  {kpis.map((k, i) => <Kpi key={i} {...k} />)}
</div>


      {/* middle charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* World map placeholder */}
        <div>
          <h1 className="text-2xl p-2">Storefronts</h1>
          <Card className="h-84 flex items-center justify-center text-sm text-gray-500">
          <WorldMap title="Storefronts" /> 
        </Card>
        </div>



  <div className="h-94">
          <h1 className="text-2xl p-2">Trends</h1>
                  <AreaLineChart data={spendTrend} title="Trends — Spend" />

        </div>
      </div>

      {/* tables row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
  <div>
          <h1 className="text-2xl p-2">Top List</h1>
        <DataTable rows={campaigns} title="Top List — Campaigns" />
        </div>
          <div>
          <h1 className="text-2xl p-2">Biggest Changes</h1>
      <BiggestChangesTable  className="bg-transparent" />
      </div>
      </div>
    </div>
  );
}
