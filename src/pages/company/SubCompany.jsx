// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react"; 
// import CommonHeader from "../../components/pageHeader"; 
// const initialForm = {
//   inactive: false,
//   name: "",
//   parentSubsidiary: "Consolidated",
//   alwaysDisplayName: false,
//   logoForms: "",
//   logoPages: "",
//   website: "",
//   documentPrefix: "",
//   stateProvince: "",
//   country: "United States",
//   legalName: "",
//   returnEmail: "",
//   fax: "",
//   elimination: false,
//   language: "English (U.S.)",
//   fiscalCalendar: "United States",
//   taxFiscalCalendar: "United States",
//   currency: "USD",
//   edition: "US",
//   orgNumber: "",
//   taxNumber: "",
//   documentFooterMessage: "",
//   bankDetails: "",
//   phone: "",
//   pan: "",
//   tan: "",
//   taxCollectionAccountNumber: "",
//   deductorType: "Company",
//   responsibleEmail: "",
//   responsiblePin: "",
//   responsibleDesignation: "",
//   responsibleAddress: "",
//   responsibleState: "",
//   responsibleName: "",
//   mobileNumber: "",
//   responsiblePan: "",
//   upiId: "",
//   address: "",
// };

// export default function SubCompanyForm() {
//   const [form, setForm] = useState(initialForm);
//   const [activeTab, setActiveTab] = useState("Addresses");
//     const handleSave = () => {
//     console.log("Sub Company Saved", form);
//   };

//   const handleCancel = () => {
//     console.log("Cancelled");
//   };

//   const updateField = (field, value) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//   };

//   const Label = ({ text, required }) => (
//     <label className="label-text !text-[#343434] !font-semibold mb-[4px] block">
//       {text} {required && <span className="text-[#d93025]">*</span>}
//     </label>
//   );

//   const Select = ({ label, field, options, required = false }) => (
//     <div className="mb-[9px]">
//       <Label text={label} required={required} />
//       <div className="relative w-[225px]">
//         <select
//           value={form[field]}
//           onChange={(e) => updateField(field, e.target.value)}
//           className="input-field !h-[29px] !w-full py-0 appearance-none pr-8 cursor-pointer bg-white"
//         >
//           {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
//         </select>
//         <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
//           <ChevronDown size={14} strokeWidth={2.5} />
//         </div>
//       </div>
//     </div>
//   );

//   const Input = ({ label, field, type = "text", required = false, disabled = false }) => (
//     <div className="mb-[9px]">
//       <Label text={label} required={required} />
//       <input
//         type={type}
//         value={form[field]}
//         disabled={disabled}
//         onChange={(e) => updateField(field, e.target.value)}
//         className={`input-field !h-[29px] !w-[225px] ${disabled ? "!bg-[#f2f2f2]" : ""}`}
//       />
//     </div>
//   );

//   return (
//     <div className="page-wrapper">
//       <div className="card !p-0 !border-[#b9b9b9] !rounded-none min-h-[calc(100vh-120px)]">
//       <CommonHeader
//         title="Sub Company"
//         onSave={handleSave}
//         onCancel={handleCancel}
//       />
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[70px] gap-y-[10px] p-[18px_16px_10px]">
          
//           <div className="flex flex-col">
//             <label className="flex items-center gap-[7px] mb-[10px] cursor-pointer">
//               <input type="checkbox" checked={form.inactive} onChange={(e) => updateField("inactive", e.target.checked)} className="w-[14px] h-[14px]" />
//               <span className="text-[12px] font-medium text-[#3f3f3f]">Subsidiary is Inactive</span>
//             </label>
//             <Input label="Name" field="name" required />
//             <Select label="Parent subsidiary" field="parentSubsidiary" required options={["Consolidated", "Parent A", "Parent B"]} />
//             <label className="flex items-center gap-[7px] mb-[10px] cursor-pointer">
//               <input type="checkbox" checked={form.alwaysDisplayName} onChange={(e) => updateField("alwaysDisplayName", e.target.checked)} className="w-[14px] h-[14px]" />
//               <span className="text-[12px] font-medium text-[#3f3f3f]">Always Display Subsidiary Name</span>
//             </label>
//             <Select label="Subsidiary Logo (Forms)" field="logoForms" options={["", "Logo 1", "Logo 2"]} />
//             <Select label="Subsidiary Logo (Pages)" field="logoPages" options={["", "Logo A", "Logo B"]} />
//             <Input label="Web Site" field="website" />
//             <Input label="Document Number Prefix" field="documentPrefix" />
//             <Select label="State/Province" field="stateProvince" required options={["", "California", "New York", "Texas"]} />
//             <Select label="Country" field="country" required options={["United States", "India", "Canada"]} />
//             <Input label="Legal Name" field="legalName" />
//             <Input label="Return Email Address" field="returnEmail" />
//             <Input label="Fax" field="fax" />
//             <label className="flex items-center gap-[7px] mb-[10px] cursor-pointer">
//               <input type="checkbox" checked={form.elimination} onChange={(e) => updateField("elimination", e.target.checked)} className="w-[14px] h-[14px]" />
//               <span className="text-[12px] font-medium text-[#3f3f3f]">Elimination</span>
//             </label>
//             <Select label="Language" field="language" required options={["English (U.S.)", "English (U.K.)", "Hindi"]} />
//           </div>

//           <div className="flex flex-col">
//             <Select label="Fiscal Calendar" field="fiscalCalendar" required options={["United States", "India", "Global"]} />
//             <Select label="Tax Fiscal Calendar" field="taxFiscalCalendar" required options={["United States", "India", "Global"]} />
//             <Select label="Currency" field="currency" required options={["USD", "INR", "EUR"]} />
//             <Input label="Edition" field="edition" disabled />
//             <Input label="Org Number" field="orgNumber" />
//             <Input label="Tax Number" field="taxNumber" />
//             <div className="mb-[9px]">
//               <Label text="Document Footer Message" />
//               <textarea rows={4} value={form.documentFooterMessage} onChange={(e) => updateField("documentFooterMessage", e.target.value)} className="input-field !w-[225px] !h-[62px] resize-none p-[8px_10px]" />
//             </div>
//             <div className="mb-[9px]">
//               <Label text="Bank Details" />
//               <textarea rows={4} value={form.bankDetails} onChange={(e) => updateField("bankDetails", e.target.value)} className="input-field !w-[225px] !h-[62px] resize-none p-[8px_10px]" />
//             </div>
//             <Input label="Phone" field="phone" />
//             <Input label="Permanent Account Number (PAN)" field="pan" />
//             <Input label="Tax Deduction Account Number (TAN)" field="tan" />
//           </div>

//           <div className="flex flex-col">
//             <Input label="Tax Collection Account Number" field="taxCollectionAccountNumber" />
//             <Select label="Deductor Type" field="deductorType" options={["Company", "Individual", "Firm"]} />
//             <Input label="Responsible Person's Email ID" field="responsibleEmail" />
//             <Input label="Responsible Person's PIN" field="responsiblePin" />
//             <Input label="Designation of Responsible Person" field="responsibleDesignation" />
//             <Input label="Responsible Person's Address" field="responsibleAddress" />
//             <Select label="Responsible Person's State" field="responsibleState" options={["", "California", "New York", "Texas"]} />
//             <Input label="Name of Responsible Person" field="responsibleName" />
//             <Input label="Mobile Number" field="mobileNumber" />
//             <Input label="PAN of Responsible Person" field="responsiblePan" />
//             <Input label="UPI ID" field="upiId" />
//           </div>
//         </div>

  
//         <div className="mt-[6px] border-t border-[#dddddd]">
//           <div className="flex items-end gap-[24px] h-[38px] border-b border-[#dddddd] px-[16px]">
//             {["Addresses", "Document Numbers"].map((tab) => (
//               <button key={tab} type="button" className={`pb-[10px] text-[12px] transition-all border-b-2 ${activeTab === tab ? "text-[#1f1f1f] font-bold border-[#1f84cc]" : "text-[#5d5d5d] border-transparent"}`} onClick={() => setActiveTab(tab)}>{tab}</button>
//             ))}
//           </div>
//           <div className="min-h-[120px] p-[12px_16px_18px]">
//             {activeTab === "Addresses" ? (
//               <div className="w-[280px]">
//                 <Label text="Address" />
//                 <textarea rows={4} value={form.address} onChange={(e) => updateField("address", e.target.value)} className="input-field !w-[255px] !h-[54px] resize-none p-[8px_10px]" />
//               </div>
//             ) : (
//               <div className="text-[12px] text-[#5c5c5c]">No document numbers configured.</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import CommonHeader from "../../components/pageHeader";

const initialForm = {
  inactive: false,
  name: "",
  parentSubsidiary: "Consolidated",
  alwaysDisplayName: false,
  logoForms: "",
  logoPages: "",
  website: "",
  documentPrefix: "",
  stateProvince: "",
  country: "United States",
  legalName: "",
  returnEmail: "",
  fax: "",
  elimination: false,
  language: "English (U.S.)",
  fiscalCalendar: "United States",
  taxFiscalCalendar: "United States",
  currency: "USD",
  edition: "US",
  orgNumber: "",
  taxNumber: "",
  documentFooterMessage: "",
  bankDetails: "",
  phone: "",
  pan: "",
  tan: "",
  taxCollectionAccountNumber: "",
  deductorType: "Company",
  responsibleEmail: "",
  responsiblePin: "",
  responsibleDesignation: "",
  responsibleAddress: "",
  responsibleState: "",
  responsibleName: "",
  mobileNumber: "",
  responsiblePan: "",
  upiId: "",
  address: "",
};

export default function SubCompanyForm() {

  const [form, setForm] = useState(initialForm);
  const [activeTab, setActiveTab] = useState("Addresses");

  const handleSave = () => {
    console.log("Sub Company Saved", form);
  };

  const handleCancel = () => {
    console.log("Cancelled");
  };

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const Label = ({ text, required }) => (
    <label className="label-text">
      {text} {required && <span className="text-red-500">*</span>}
    </label>
  );

  const Select = ({ label, field, options, required = false }) => (
    <div>
      <Label text={label} required={required} />
      <div className="relative">
        <select
          value={form[field]}
          onChange={(e) => updateField(field, e.target.value)}
          className="input-field mt-1 appearance-none pr-8"
        >
          {options.map((opt, i) => (
            <option key={i} value={opt}>{opt}</option>
          ))}
        </select>

        <ChevronDown
          size={14}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        />
      </div>
    </div>
  );

  const Input = ({ label, field, type = "text", required = false, disabled = false }) => (
    <div>
      <Label text={label} required={required} />
      <input
        type={type}
        value={form[field]}
        disabled={disabled}
        onChange={(e) => updateField(field, e.target.value)}
        className="input-field mt-1"
      />
    </div>
  );

  return (

    <div className="page-wrapper bg-gray-100">

      <CommonHeader
        title="Sub Company"
        onSave={handleSave}
        onCancel={handleCancel}
      />

      <div className="card mb-6">

        <h2 className="section-title">Primary Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="space-y-4">

            <label className="flex items-center gap-2">
              <input type="checkbox" checked={form.inactive} onChange={(e) => updateField("inactive", e.target.checked)} />
              Subsidiary is Inactive
            </label>

            <Input label="Name" field="name" required />
            <Select label="Parent subsidiary" field="parentSubsidiary" required options={["Consolidated", "Parent A", "Parent B"]} />

            <label className="flex items-center gap-2">
              <input type="checkbox" checked={form.alwaysDisplayName} onChange={(e) => updateField("alwaysDisplayName", e.target.checked)} />
              Always Display Subsidiary Name
            </label>

            <Select label="Subsidiary Logo (Forms)" field="logoForms" options={["", "Logo 1", "Logo 2"]} />
            <Select label="Subsidiary Logo (Pages)" field="logoPages" options={["", "Logo A", "Logo B"]} />

            <Input label="Web Site" field="website" />
            <Input label="Document Number Prefix" field="documentPrefix" />

            <Select label="State/Province" field="stateProvince" required options={["", "California", "New York", "Texas"]} />
            <Select label="Country" field="country" required options={["United States", "India", "Canada"]} />

          </div>

          <div className="space-y-4">

            <Input label="Legal Name" field="legalName" />
            <Input label="Return Email Address" field="returnEmail" />
            <Input label="Fax" field="fax" />

            <label className="flex items-center gap-2">
              <input type="checkbox" checked={form.elimination} onChange={(e) => updateField("elimination", e.target.checked)} />
              Elimination
            </label>

            <Select label="Language" field="language" required options={["English (U.S.)", "English (U.K.)", "Hindi"]} />

            <Select label="Fiscal Calendar" field="fiscalCalendar" required options={["United States", "India", "Global"]} />
            <Select label="Tax Fiscal Calendar" field="taxFiscalCalendar" required options={["United States", "India", "Global"]} />
            <Select label="Currency" field="currency" required options={["USD", "INR", "EUR"]} />

            <Input label="Edition" field="edition" disabled />

            <Input label="Org Number" field="orgNumber" />
            <Input label="Tax Number" field="taxNumber" />

          </div>

          <div className="space-y-4">

            <Input label="Phone" field="phone" />
            <Input label="Permanent Account Number (PAN)" field="pan" />
            <Input label="Tax Deduction Account Number (TAN)" field="tan" />

            <Input label="Tax Collection Account Number" field="taxCollectionAccountNumber" />

            <Select label="Deductor Type" field="deductorType" options={["Company", "Individual", "Firm"]} />

            <Input label="Responsible Person's Email ID" field="responsibleEmail" />
            <Input label="Responsible Person's PIN" field="responsiblePin" />
            <Input label="Designation of Responsible Person" field="responsibleDesignation" />

            <Input label="Responsible Person's Address" field="responsibleAddress" />

            <Select label="Responsible Person's State" field="responsibleState" options={["", "California", "New York", "Texas"]} />

            <Input label="Name of Responsible Person" field="responsibleName" />
            <Input label="Mobile Number" field="mobileNumber" />
            <Input label="PAN of Responsible Person" field="responsiblePan" />
            <Input label="UPI ID" field="upiId" />

          </div>

        </div>

      </div>

      {/* Tabs */}

      <div className="card">

        <div className="flex gap-6 border-b px-6 pt-4 text-sm">

          {["Addresses", "Document Numbers"].map((tab) => (

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

        <div className="p-6">

          {activeTab === "Addresses" ? (

            <textarea
              rows={4}
              value={form.address}
              onChange={(e) => updateField("address", e.target.value)}
              className="input-field"
            />

          ) : (

            <div className="text-sm text-gray-500">
              No document numbers configured.
            </div>

          )}

        </div>

      </div>

    </div>
  );
}