import CommonHeader from "../../components/pageHeader";
import React, { useMemo, useState } from "react";

const TaskPage = () => {
    const [showPrimary, setShowPrimary] = useState(true);
    const [showClassification, setShowClassification] = useState(true);
    const [activeTab, setActiveTab] = useState("Message");
    const [messageText, setMessageText] = useState("");
    
    const [form, setForm] = useState({
        customForm: "Standard Task Form",
        notifyAssignee: false,
        title: "",
        assignTo: "",
        priority: "Medium",
        insertBefore: "Task 1",
        status: "Not Started",
        privateTask: false,
        startDate: "",
        dueDate: "",
        dateCompleted: "",
        reserveTime: false,
        startTime: "",
        endTime: "",
        reminderType: "None",
        reminder: "None",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const tabs = useMemo(() => ["Message", "Related Records", "Availability", "Communication", "Time Tracking"], []);

    return (
        <div className="page-wrapper bg-gray-100">
            <CommonHeader title="New Task" />

            {/* Primary Information */}
            <div className="card mb-6">

                <h2 
                    className="section-title cursor-pointer"
                    onClick={() => setShowPrimary(!showPrimary)}
                >
                    Primary Information
                </h2>

                {showPrimary && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="space-y-4">
                            <Field label="Custom Form" required>
                                <select name="customForm" value={form.customForm} onChange={handleChange} className="input-field">
                                    <option>Standard Task Form</option>
                                </select>
                            </Field>

                            <Field label="Title" required name="title" value={form.title} onChange={handleChange} />

                            <Field label="Assigned To" required name="assignTo" value={form.assignTo} onChange={handleChange} />
                        </div>

                        <div className="space-y-4">

                            <div className="flex items-center gap-2 pt-5">
                                <input type="checkbox" name="notifyAssignee" checked={form.notifyAssignee} onChange={handleChange} className="w-4 h-4 rounded border-gray-300" />
                                <label className="text-sm font-medium text-gray-700">Notify Assignee by Email</label>
                            </div>

                            <Field label="Priority" required>
                                <select name="priority" value={form.priority} onChange={handleChange} className="input-field">
                                    <option>Low</option>
                                    <option>Medium</option>
                                    <option>High</option>
                                </select>
                            </Field>

                            <Field label="Insert Before" required>
                                <select name="insertBefore" value={form.insertBefore} onChange={handleChange} className="input-field">
                                    <option>Task 1</option>
                                </select>
                            </Field>

                        </div>

                        <div className="space-y-4">

                            <Field label="Status" required>
                                <select name="status" value={form.status} onChange={handleChange} className="input-field">
                                    <option>Not Started</option>
                                    <option>In Progress</option>
                                    <option>Completed</option>
                                </select>
                            </Field>

                            <div className="flex items-center gap-2 pt-2">
                                <input type="checkbox" name="privateTask" checked={form.privateTask} onChange={handleChange} className="w-4 h-4 rounded border-gray-300" />
                                <label className="text-sm font-medium text-gray-700">Private Task</label>
                            </div>

                        </div>

                    </div>
                )}

            </div>

            {/* Classification */}
            <div className="card mb-6">

                <h2 
                    className="section-title cursor-pointer"
                    onClick={() => setShowClassification(!showClassification)}
                >
                    Classification
                </h2>

                {showClassification && (

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="space-y-4">

                            <Field label="Start Date" required type="date" name="startDate" value={form.startDate} onChange={handleChange} />

                            <Field label="Due Date" required type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />

                            <Field label="Date Completed" type="date" name="dateCompleted" value={form.dateCompleted} onChange={handleChange} />

                        </div>

                        <div className="space-y-4">

                            <div className="flex items-center gap-2 pt-5">
                                <input type="checkbox" name="reserveTime" checked={form.reserveTime} onChange={handleChange} className="w-4 h-4 rounded border-gray-300" />
                                <label className="text-sm font-medium text-gray-700">Reserve Time</label>
                            </div>

                            <Field label="Start Time" type="time" name="startTime" value={form.startTime} onChange={handleChange} />

                            <Field label="End Time" type="time" name="endTime" value={form.endTime} onChange={handleChange} />

                        </div>

                        <div className="space-y-4">

                            <Field label="Reminder Type">
                                <select name="reminderType" value={form.reminderType} onChange={handleChange} className="input-field">
                                    <option>None</option>
                                    <option>Email</option>
                                    <option>In-App Notification</option>
                                </select>
                            </Field>

                            <Field label="Reminder">
                                <select name="reminder" value={form.reminder} onChange={handleChange} className="input-field">
                                    <option>None</option>
                                    <option>15 mins before</option>
                                    <option>1 hour before</option>
                                </select>
                            </Field>

                        </div>

                    </div>

                )}

            </div>

            {/* Tabs */}
            <div className="card">

                <div className="flex gap-6 border-b px-6 pt-4 text-sm">

                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`pb-2 ${
                                activeTab === tab
                                    ? "border-b-2 border-blue-500 text-blue-600"
                                    : "text-gray-500 hover:text-black"
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}

                </div>

                {activeTab === "Message" && (

                    <div className="p-6 flex flex-col lg:flex-row gap-8">

                        <textarea 
                            className="input-field flex-1 min-h-[200px]"
                            placeholder="Type message here..."
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                        />

                        <div className="w-full lg:w-80 bg-gray-50 p-5 rounded border border-gray-200">

                            <h4 className="font-bold text-gray-700 mb-4 border-b pb-2">
                                Auto Metadata
                            </h4>

                            <div className="space-y-3 text-xs">

                                <p>
                                    <span className="text-gray-500 font-semibold uppercase">
                                        Priority:
                                    </span> {form.priority}
                                </p>

                                <p>
                                    <span className="text-gray-500 font-semibold uppercase">
                                        Status:
                                    </span> Completed
                                </p>

                                <p>
                                    <span className="text-gray-500 font-semibold uppercase">
                                        Created:
                                    </span> {new Date().toLocaleDateString()}
                                </p>

                            </div>

                            <button className="w-full mt-6 bg-blue-600 text-white py-2.5 rounded-md font-bold text-sm hover:bg-blue-700 transition shadow-sm">
                                SAVE MESSAGE
                            </button>

                        </div>

                    </div>

                )}

            </div>

        </div>
    );
};

function Field({ label, required, children, type = "text", name, value, onChange }) {

    return (
        <div className="w-full">

            <label className="label-text">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            {children ? children : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="input-field mt-1"
                />
            )}

        </div>
    );
}

export default TaskPage;