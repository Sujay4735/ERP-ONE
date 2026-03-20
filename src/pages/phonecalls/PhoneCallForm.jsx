import React, { useEffect, useState } from "react";
import CommonHeader from "../../components/pageHeader";

export default function PhoneCallForm() {

  const organizers = ["Sujay Kumar", "Vikalp Singh", "Jay", "Jatin"];
  const reminders = ["None", "5 Minutes", "10 Minutes", "30 Minutes", "1 Hour"];

  // ✅ SINGLE STATE OBJECT
  const [form, setForm] = useState({
    organizer: organizers[0],
    reminder: reminders[0],
    phoneNumber: "",
    subject: "",
    status: "Scheduled",
    date: "",
    startTime: "",
    endTime: "",
    message: "",
    isPrivate: false,
    reserveTime: false
  });

  useEffect(() => {
    document.title = "Phone Call";
  }, []);

  // ✅ ONE HANDLER FOR ALL
  const updateField = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log("Saved Data:", form);
  };

  const handleCancel = () => {
    console.log("Cancelled");
  };

  return (
    <div className="page-wrapper bg-gray-100">

      <CommonHeader
        title="Phone Call"
        onSave={handleSave}
        onCancel={handleCancel}
      />

      {/* Primary Information */}
      <div className="card mb-6">
        <h2 className="section-title">Primary Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div>
            <label className="label-text">Custom Form *</label>
            <select className="input-field mt-1">
              <option>Standard Phone Call Form</option>
            </select>
          </div>

          <div>
            <label className="label-text">Phone Number</label>
            <input
              type="text"
              value={form.phoneNumber}
              onChange={(e) => updateField("phoneNumber", e.target.value)}
              className="input-field mt-1"
            />
          </div>

          <div className="flex items-center mt-6">
            <input
              type="checkbox"
              checked={form.isPrivate}
              onChange={(e) => updateField("isPrivate", e.target.checked)}
              className="mr-2"
            />
            <label className="text-sm">Private Phone Call</label>
          </div>

          <div>
            <label className="label-text">Subject *</label>
            <input
              type="text"
              value={form.subject}
              onChange={(e) => updateField("subject", e.target.value)}
              className="input-field mt-1"
            />
          </div>

          <div>
            <label className="label-text">Status *</label>
            <select
              value={form.status}
              onChange={(e) => updateField("status", e.target.value)}
              className="input-field mt-1"
            >
              <option>Scheduled</option>
              <option>Held</option>
              <option>Not Held</option>
            </select>
          </div>

          <div>
            <label className="label-text">Organizer *</label>
            <select
              value={form.organizer}
              onChange={(e) => updateField("organizer", e.target.value)}
              className="input-field mt-1"
            >
              {organizers.map((org, i) => (
                <option key={i}>{org}</option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {/* Date & Time */}
      <div className="card mb-6">
        <h2 className="section-title">Date and Time</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div>
            <label className="label-text">Date *</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => updateField("date", e.target.value)}
              className="input-field mt-1"
            />
          </div>

          <div>
            <label className="label-text">Start Time</label>
            <input
              type="time"
              value={form.startTime}
              onChange={(e) => updateField("startTime", e.target.value)}
              className="input-field mt-1"
            />
          </div>

          <div>
            <label className="label-text">Reminder Type</label>
            <select
              value={form.reminder}
              onChange={(e) => updateField("reminder", e.target.value)}
              className="input-field mt-1"
            >
              {reminders.map((rem, i) => (
                <option key={i}>{rem}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="label-text">Date Completed</label>
            <input type="date" className="input-field mt-1" />
          </div>

          <div>
            <label className="label-text">End Time</label>
            <input
              type="time"
              value={form.endTime}
              onChange={(e) => updateField("endTime", e.target.value)}
              className="input-field mt-1"
            />
          </div>

          <div>
            <label className="label-text">Reminder</label>
            <select
              value={form.reminder}
              onChange={(e) => updateField("reminder", e.target.value)}
              className="input-field mt-1"
            >
              {reminders.map((rem, i) => (
                <option key={i}>{rem}</option>
              ))}
            </select>
          </div>

        </div>

        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            checked={form.reserveTime}
            onChange={(e) => updateField("reserveTime", e.target.checked)}
            className="mr-2"
          />
          <label className="text-sm">Reserve Time</label>
        </div>

      </div>

      {/* Tabs */}
      <div className="card">
        <div className="flex gap-6 border-b px-6 pt-4 text-sm">
          <button className="border-b-2 border-blue-500 pb-2 text-blue-600">
            Message
          </button>
          <button className="text-gray-500 hover:text-black">Related Records</button>
          <button className="text-gray-500 hover:text-black">Availability</button>
          <button className="text-gray-500 hover:text-black">Communication</button>
        </div>

        <div className="p-6">
          <textarea
            className="input-field"
            rows="4"
            placeholder="Enter message..."
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
          />
        </div>
      </div>

    </div>
  );
}