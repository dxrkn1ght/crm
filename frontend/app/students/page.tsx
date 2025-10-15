
'use client'
import { useEffect, useState } from 'react'

export default function StudentsPage() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/students')
      .then(r => r.json())
      .then(setStudents)
      .catch(console.error)
  }, [])

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">O'quvchilar</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th>Ism</th><th>Telefon</th><th>Guruh</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.fullName}</td>
              <td>{s.phone}</td>
              <td>{s.group?.name || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
