'use client'

import Link from 'next/link'
import Swal from 'sweetalert2'

export default function ListUserDashboard() {
  const handleDelete = (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Warning!',
      text: 'Are you sure want to delete?',
      icon: 'warning',
      confirmButtonText: 'Yes',
      confirmButtonColor: 'blue',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      cancelButtonColor: 'red',
    })
  }
  return (
    <section className="px-5 pt-6">
      <div>
        <h1 className="text-2xl font-semibold">List User</h1>
      </div>
      <div className="mt-8">
        <Link
          href="/dashboard/user/add"
          className="px-3 py-1 w-fit flex text-white bg-blue-400 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          Tambah
        </Link>
      </div>
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-slate-300">
            <th className="text-start table-data border border-slate-600">
              Nama
            </th>
            <th className="text-start table-data border border-slate-600">
              Email
            </th>
            <th className="text-start table-data border border-slate-600">
              Role
            </th>
            <th className="table-data border border-slate-600"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-data border border-slate-600">Person 1</td>
            <td className="table-data border border-slate-600">
              person1@example.com
            </td>
            <td className="table-data border border-slate-600">admin</td>
            <td className="table-data border border-slate-600 text-center">
              <button className="button-info mr-1">Edit</button>
              <button className="button-danger ml-1" onClick={handleDelete}>
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}