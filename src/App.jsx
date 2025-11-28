import React, { useState } from 'react'
import FeedbackForm from './FeedbackForm'

export default function App() {
  const [submissions, setSubmissions] = useState([])

  function handleSubmit(data) {
    // save locally (could be sent to server)
    setSubmissions(prev => [data, ...prev])
    console.log('New submission:', data)
  }

  return (
    <div className="app">
      <h1>Student Feedback Form</h1>
      <FeedbackForm onSubmit={handleSubmit} />
      <section className="submissions">
        <h2>Recent Submissions</h2>
        {submissions.length === 0 && <p>No submissions yet.</p>}
        {submissions.map((s, i) => (
          <div key={i} className="card">
            <strong>{s.name} — {s.roll}</strong>
            <div>Course: {s.course} | Rating: {s.rating}/5</div>
            <p>{s.comments}</p>
            <small>{new Date(s.time).toLocaleString()}</small>
          </div>
        ))}
      </section>
    </div>
  )
}
