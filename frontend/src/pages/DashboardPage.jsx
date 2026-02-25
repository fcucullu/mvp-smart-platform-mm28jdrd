import StatsCard from '../components/StatsCard'
import ChartComponent from '../components/ChartComponent'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-slate-400">Main overview with key metrics and activity</p>
      </div>

      <StatsCard key="0" data={[{"label":"Total Users","value":"2,451","change":"+12%","icon":"users"},{"label":"Active Tasks","value":"184","change":"+5%","icon":"tasks"},{"label":"Completion Rate","value":"87%","change":"+3%","icon":"chart"},{"label":"Avg Response Time","value":"1.2s","change":"-15%","icon":"clock"}]} />

      <ChartComponent key="1" type="line" title="Activity Trends" data={[{"name":"Mon","value":120},{"name":"Tue","value":150},{"name":"Wed","value":180},{"name":"Thu","value":140},{"name":"Fri","value":200},{"name":"Sat","value":90},{"name":"Sun","value":70}]} />

      <div key="2" className="card">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          
          <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
            <i className="fa-solid fa-user-plus text-blue-400"></i>
            <div>
              <p className="text-sm font-medium">New user registered</p>
              <p className="text-xs text-slate-400">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
            <i className="fa-solid fa-check text-blue-400"></i>
            <div>
              <p className="text-sm font-medium">Task completed</p>
              <p className="text-xs text-slate-400">15 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
            <i className="fa-solid fa-file text-blue-400"></i>
            <div>
              <p className="text-sm font-medium">Report generated</p>
              <p className="text-xs text-slate-400">1 hour ago</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
            <i className="fa-solid fa-refresh text-blue-400"></i>
            <div>
              <p className="text-sm font-medium">System update</p>
              <p className="text-xs text-slate-400">3 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
