import FormComponent from '../components/FormComponent'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-slate-400">Application settings and preferences</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-slate-400">Configure your application preferences</p>
        </div>
        
      </div>

      <FormComponent key="1" title="Profile Settings" fields={[{"name":"name","type":"text","label":"Full Name","value":"John Doe"},{"name":"email","type":"email","label":"Email","value":"john@example.com"},{"name":"timezone","type":"select","label":"Timezone","options":["UTC","EST","PST","GMT"]},{"name":"notifications","type":"toggle","label":"Email Notifications"}]} />

      <div key="2" className="card">
        <p className="text-slate-400">Component: card</p>
      </div>
    </div>
  )
}
