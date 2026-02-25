import FormComponent from '../components/FormComponent'
import DataTable from '../components/DataTable'

export default function ItemsPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Items</h1>
        <p className="text-slate-400">Manage all items in the system</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">All Items</h1>
          <p className="text-slate-400">Manage and organize your items</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-primary"><i className="fa-solid fa-plus mr-2"></i>Add New</button>
          <button className="btn-secondary"><i className="fa-solid fa-download mr-2"></i>Export</button>
        </div>
      </div>

      <FormComponent key="1" title="" fields={[{"name":"search","type":"search","placeholder":"Search items..."},{"name":"status","type":"select","options":["All","Active","Archived"]},{"name":"sort","type":"select","options":["Newest","Oldest","Name"]}]} />

      <DataTable key="2" columns={["Name","Status","Created","Updated","Actions"]} rows={[{"Name":"Item Alpha","Status":"Active","Created":"2024-01-15","Updated":"2024-01-20"},{"Name":"Item Beta","Status":"Active","Created":"2024-01-10","Updated":"2024-01-18"},{"Name":"Item Gamma","Status":"Archived","Created":"2024-01-05","Updated":"2024-01-12"}]} />
    </div>
  )
}
