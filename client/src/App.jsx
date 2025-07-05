import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({ name: '', location: '' })
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('http://localhost:3001/business-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    const json = await res.json()
    setData(json)
    setLoading(false)
  }

  const regenerate = async () => {
    const res = await fetch('http://localhost:3001/regenerate-headline')
    const json = await res.json()
    setData(prev => ({ ...prev, headline: json.headline }))
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <input name="name" placeholder="Business Name" onChange={handleChange} className="border p-2 w-full mb-3" />
        <input name="location" placeholder="Location" onChange={handleChange} className="border p-2 w-full mb-3" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Submit</button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}

      {data && (
        <div className="bg-white p-4 mt-6 rounded shadow-md w-full max-w-md">
          <p><strong>Rating:</strong> {data.rating} ★</p>
          <p><strong>Reviews:</strong> {data.reviews}</p>
          <p><strong>Headline:</strong> {data.headline}</p>
          <button onClick={regenerate} className="mt-2 bg-green-600 text-white px-4 py-2 rounded">Regenerate Headline</button>
        </div>
      )}
    </div>
  )
}

export default App
