
export default async function DashboardPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded shadow">Aktiv o'quvchilar: —</div>
        <div className="p-4 rounded shadow">Bugungi darslar: —</div>
        <div className="p-4 rounded shadow">Oylik daromad: —</div>
      </div>
      <div className="mt-6">
        <a href="/students">O'quvchilar ro'yxati</a>
      </div>
    </div>
  )
}
