import React, { useState } from 'react'

export default function FeedbackForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    roll: '',
    course: '',
    rating: '5',
    comments: '',
    consent: false,
  })

  function update(e) {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  function submit(e) {
    e.preventDefault()
    // basic validation
    if (!form.name.trim() || !form.roll.trim()) {
      alert('Please enter name and roll number.')
      return
    }
    const payload = { ...form, time: Date.now() }
    onSubmit(payload)
    setForm({ name: '', roll: '', course: '', rating: '5', comments: '', consent: false })
  }

  return (
    <form className="form" onSubmit={submit}>
      <label>
        Name
        <input name="name" value={form.name} onChange={update} />
      </label>

      <label>
        Roll No
        <input name="roll" value={form.roll} onChange={update} />
      </label>

      <label>
        Course
        <input name="course" value={form.course} onChange={update} placeholder="e.g. CS" />
      </label>

      <label>
        Rating
        <select name="rating" value={form.rating} onChange={update}>
          <option>5</option><option>4</option><option>3</option><option>2</option><option>1</option>
        </select>
      </label>

      <label>
        Comments
        <textarea name="comments" value={form.comments} onChange={update} />
      </label>

      <label className="checkbox">
        <input type="checkbox" name="consent" checked={form.consent} onChange={update} />
        I agree to submit honest feedback
      </label>

      <button type="submit">Submit Feedback</button>
    </form>
  )
}
