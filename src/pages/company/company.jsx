import CommonHeader from "../../components/pageHeader";
import React, { useState } from "react";

/*FIELD CONFIG*/

const PRIMARY_FIELDS = [
  { label: "Company ID", name: "companyId", required: true },
  { label: "Company Name", name: "companyName", required: true },
  {
    label: "Status",
    name: "status",
    required: true,
    type: "select",
    options: ["Active", "Inactive", "Suspended"],
  },
];

const DATE_FIELDS = [
  {
    label: "Activation Date",
    name: "activationDate",
    type: "date",
    required: true,
  },
  {
    label: "Expiry Date",
    name: "expiryDate",
    type: "date",
  },
];

/* COMPONENT */

const Company = () => {
  const [showPrimary, setShowPrimary] = useState(true);
  const [showClassification, setShowClassification] = useState(true);

  const [form, setForm] = useState({
    companyId: "",
    companyName: "",
    status: "Active",
    activationDate: "",
    expiryDate: "",
    inactive: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="page-wrapper bg-gray-100">

      <CommonHeader title="New Company" />

      {/* PRIMARY */}
      <Section
        title="Primary Information"
        show={showPrimary}
        toggle={() => setShowPrimary(!showPrimary)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {PRIMARY_FIELDS.map((field) => (
            <Field
              key={field.name}
              {...field}
              value={form[field.name]}
              onChange={handleChange}
            />
          ))}

        </div>
      </Section>

      {/* DATES */}
      <Section
        title="Company Dates"
        show={showClassification}
        toggle={() => setShowClassification(!showClassification)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {DATE_FIELDS.map((field) => (
            <Field
              key={field.name}
              {...field}
              value={form[field.name]}
              onChange={handleChange}
            />
          ))}

          {/* Checkbox */}
          <div className="flex items-center gap-2 pt-6">
            <input
              type="checkbox"
              name="inactive"
              checked={form.inactive}
              onChange={handleChange}
              className="w-4 h-4 rounded border-gray-300"
            />
            <label className="text-sm font-medium text-gray-700">
              Mark Company as Inactive
            </label>
          </div>

        </div>
      </Section>

    </div>
  );
};

/* REUSABLE SECTION */

const Section = ({ title, show, toggle, children }) => {
  return (
    <div className="card mb-6">

      <h2 className="section-title cursor-pointer" onClick={toggle}>
        {title}
      </h2>

      {show && children}

    </div>
  );
};

/* REUSABLE FIELD */

function Field({
  label,
  required,
  children,
  type = "text",
  name,
  value,
  onChange,
  options = [],
}) {
  return (
    <div className="w-full">

      <label className="label-text">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {children ? (
        children
      ) : type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="input-field mt-1"
        >
          {options.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      ) : (
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

export default Company;