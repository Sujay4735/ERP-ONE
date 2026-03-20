import React, { useEffect, useMemo, useState } from "react";
import CommonHeader from "../../components/pageHeader";

const RESOURCE_OPTIONS = ["Sujay Kumar", "Vikalp Singh"];
const ALLOCATION_TYPE_OPTIONS = ["Hard", "Easy"];
const UNIT_OPTIONS = ["Hours", "Days"];
const TAB_OPTIONS = ["Communication", "Recurrence", "Related Records"];

const initialForm = {
  resource: RESOURCE_OPTIONS[0],
  allocationType: ALLOCATION_TYPE_OPTIONS[0],
  project: " ",
  startDate: "",
  endDate: "",
  allocate: "",
  unit: UNIT_OPTIONS[0],
  notes: "",
  projectTask: "Select Task",
};

const PRIMARY_FIELDS = [
  {
    type: "select",
    name: "resource",
    label: "Resource *",
    options: RESOURCE_OPTIONS,
  },
  {
    type: "input",
    name: "project",
    label: "Customer : Project *",
    inputType: "text",
  },
  {
    type: "static",
    label: "Requested By",
    value: "SUJAY AND VIKALP",
    className: "text-blue-500 text-sm mt-2",
  },
  {
    type: "input",
    name: "startDate",
    label: "Start Date *",
    inputType: "date",
  },
  {
    type: "input",
    name: "endDate",
    label: "End Date *",
    inputType: "date",
  },
  {
    type: "input",
    name: "allocate",
    label: "Allocate *",
    inputType: "number",
  },
  {
    type: "select",
    name: "unit",
    label: "Unit",
    options: UNIT_OPTIONS,
  },
  {
    type: "select",
    name: "allocationType",
    label: "Allocation Type *",
    options: ALLOCATION_TYPE_OPTIONS,
  },
  {
    type: "static",
    label: "RACG",
    value: "Resource Allocation Chart / Grid",
    className: "text-blue-500 text-sm mt-2 cursor-pointer",
  },
];

function FieldRenderer({ field, form, updateField }) {
  if (field.type === "static") {
    return (
      <div>
        <label className="label-text">{field.label}</label>
        <p className={field.className}>{field.value}</p>
      </div>
    );
  }

  if (field.type === "select") {
    return (
      <div>
        <label className="label-text">{field.label}</label>
        <select
          value={form[field.name]}
          onChange={(e) => updateField(field.name, e.target.value)}
          className="input-field mt-1"
        >
          {field.options.map((option, index) => (
            <option key={`${field.name}-${index}`}>{option}</option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div>
      <label className="label-text">{field.label}</label>
      <input
        type={field.inputType || "text"}
        value={form[field.name]}
        onChange={(e) => updateField(field.name, e.target.value)}
        className="input-field mt-1"
      />
    </div>
  );
}

export default function ResourceAllocation() {
  const [form, setForm] = useState(initialForm);
  const [activeTab, setActiveTab] = useState(TAB_OPTIONS[0]);

  useEffect(() => {
    document.title = "Resource Allocation";
  }, []);

  const updateField = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saved:", form);
  };

  const handleCancel = () => {
    console.log("Cancelled");
  };

  const primaryFields = useMemo(() => PRIMARY_FIELDS, []);

  return (
    <div className="page-wrapper bg-gray-100">
      <CommonHeader
        title="Resource Allocation"
        onSave={handleSave}
        onCancel={handleCancel}
      />

      {/* Primary Information */}
      <div className="card mb-6">
        <h2 className="section-title">Primary Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryFields.map((field, index) => (
            <FieldRenderer
              key={field.name || `${field.label}-${index}`}
              field={field}
              form={form}
              updateField={updateField}
            />
          ))}
        </div>
      </div>

      {/* Notes Section */}
      <div className="card mb-6">
        <h2 className="section-title">Notes</h2>

        <textarea
          rows="4"
          value={form.notes}
          onChange={(e) => updateField("notes", e.target.value)}
          className="input-field"
          placeholder="Enter notes..."
        />
      </div>

      {/* Tabs Section */}
      <div className="card">
        <div className="flex gap-6 border-b px-6 pt-4 text-sm">
          {TAB_OPTIONS.map((tab) => (
            <button
              key={tab}
              className={`${
                activeTab === tab
                  ? "border-b-2 border-blue-500 pb-2 text-blue-600"
                  : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveTab(tab)}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6">
          <label className="label-text">Project Task</label>
          <select
            className="input-field mt-1"
            value={form.projectTask}
            onChange={(e) => updateField("projectTask", e.target.value)}
          >
            <option>Select Task</option>
          </select>
        </div>
      </div>
    </div>
  );
}