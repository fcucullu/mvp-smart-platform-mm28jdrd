import ChartComponent from '../components/ChartComponent'

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-slate-400">Detailed analytics and reporting</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-slate-400">Insights and performance metrics</p>
        </div>
        
      </div>

      <ChartComponent key="1" type="area" title="Performance Over Time" data={[{"name":"Jan","value":400},{"name":"Feb","value":600},{"name":"Mar","value":550},{"name":"Apr","value":780},{"name":"May","value":890},{"name":"Jun","value":1100}]} />

      <ChartComponent key="2" type="pie" title="Category Distribution" data={[{"name":"Category A","value":35},{"name":"Category B","value":25},{"name":"Category C","value":20},{"name":"Category D","value":20}]} />
    </div>
  )
}
