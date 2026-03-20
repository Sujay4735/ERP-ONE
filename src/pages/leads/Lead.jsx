import React, { useMemo, useState } from "react";
import CommonHeader from "../../components/pageHeader";

/* ================= CONFIG ================= */

const PRIMARY_FIELDS = [
  { type: "select", name: "customForm", label: "Custom Form", required: true },
  { type: "select", name: "leadStatus", label: "Lead Status", required: true },
  { type: "leadId" },
  { type: "radio", name: "type", label: "Type", options: ["Company", "Individual"] },
  { type: "input", name: "companyName", label: "Company Name", required: true },
  { type: "input", name: "defaultOrderPriority", label: "Default Order Priority" },
  { type: "select", name: "salesRep", label: "Sales Rep" },
];

const CONTACT_FIELDS = [
  "email",
  "phone",
  "houseNo",
  "street",
  "nearby",
  "city",
  "state",
  "pincode",
  "country",
];

/* ================= COMPONENT ================= */

export default function LeadForm() {
  const [contactOpen] = useState(true);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    customForm: "Standard Lead Form",
    leadStatus: "LEAD-Unqualified",
    leadId: "",
    autoLeadId: true,
    type: "Company",
    companyName: "",
    defaultOrderPriority: "",
    salesRep: "",
    email: "",
    phone: "",
    houseNo: "",
    street: "",
    nearby: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  const OPTIONS = useMemo(
    () => ({
      customForm: ["Standard Lead Form", "Quick Lead Form"],
      leadStatus: [
        "LEAD-Unqualified",
        "LEAD-Qualified",
        "LEAD-Open",
        "LEAD-Converted",
      ],
      salesRep: ["Jay","Jatin", "Vikalp", "Sujay Kumar", "Kalpana"],
    }),
    []
  );

  const update = (name, value) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  /* VALIDATION */

  const validate = () => {
    const e = {};
    if (!form.customForm) e.customForm = "Required";
    if (!form.leadStatus) e.leadStatus = "Required";
    if (!form.companyName.trim()) e.companyName = "Required";
    return e;
  };

  const handleSave = () => {
    const e = validate();
    setErrors(e);

    if (Object.keys(e).length) {
      alert("Please fix the highlighted fields.");
      return;
    }

    alert("Saved!");
  };

  const handleCancel = () => setErrors({});

  /* RENDER FIELD */

  const renderField = (field) => {
    if (field.type === "leadId") {
      return (
        <div key="leadId">
          <label className="label-text">Lead ID</label>

          <div className="flex gap-2 mt-1">
            <input
              className="input-field flex-1"
              value={form.leadId}
              disabled={form.autoLeadId}
              onChange={(e) => update("leadId", e.target.value)}
            />

            <label className="flex items-center gap-1 text-sm">
              <input
                type="checkbox"
                checked={form.autoLeadId}
                onChange={(e) => update("autoLeadId", e.target.checked)}
              />
              Auto
            </label>
          </div>
        </div>
      );
    }

    if (field.type === "radio") {
      return (
        <div key={field.name}>
          <label className="label-text">{field.label}</label>

          <div className="flex gap-4 mt-2">
            {field.options.map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio"
                  value={opt}
                  checked={form[field.name] === opt}
                  onChange={(e) => update(field.name, e.target.value)}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      );
    }

    if (field.type === "select") {
      return (
        <div key={field.name}>
          <label className="label-text">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>

          <select
            className={`input-field mt-1 ${
              errors[field.name] ? "border-red-500" : ""
            }`}
            value={form[field.name]}
            onChange={(e) => update(field.name, e.target.value)}
          >
            {OPTIONS[field.name].map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
      );
    }

    return (
      <div key={field.name}>
        <label className="label-text">
          {field.label} {field.required && <span className="text-red-500">*</span>}
        </label>

        <input
          className={`input-field mt-1 ${
            errors[field.name] ? "border-red-500" : ""
          }`}
          value={form[field.name]}
          onChange={(e) => update(field.name, e.target.value)}
        />
      </div>
    );
  };

  return (
    <div className="page-wrapper bg-gray-100">

      <CommonHeader
        title="Lead"
        onSave={handleSave}
        onCancel={handleCancel}
      />

      {/* PRIMARY */}
      <div className="card mb-6">
        <h2 className="section-title">Primary Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRIMARY_FIELDS.map(renderField)}
        </div>
      </div>

      {/* CONTACT */}
      <div className="card">
        <h2 className="section-title">Email | Phone | Address</h2>

        {contactOpen && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONTACT_FIELDS.map((field) => (
              <input
                key={field}
                className="input-field mt-1"
                placeholder={field}
                value={form[field]}
                onChange={(e) => update(field, e.target.value)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}