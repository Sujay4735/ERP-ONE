const CommonHeader = ({ title, onSave, onCancel }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h1 className="page-title">{title}</h1>

        <div className="flex gap-6 text-sm text-gray-600">
          <span className="cursor-pointer hover:text-black">List</span>
          <span className="cursor-pointer hover:text-black">Search</span>
          <span className="cursor-pointer hover:text-black">Customize</span>
          <span className="cursor-pointer hover:text-black">More</span>
        </div>
      </div>

      <div className="flex gap-3 mb-6">

        {onSave && (
          <button className="btn-primary" onClick={onSave}>
            Save
          </button>
        )}

        {onCancel && (
          <button className="btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}

      </div>
    </>
  );
};

export default CommonHeader;