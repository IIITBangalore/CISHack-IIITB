
export default function InfoChip({chipColorName, label}) {
  const chipColor = chipColorName;
  const chipLabel = label;
    return (
        <div className={`rounded-full p-2 px-8 text-black m-2 text-sm ${
          (chipColor === "red") ? 'bg-red-400' : (chipColor === "orange") ? "bg-yellow-600" : "bg-green-500"}`}>
        {chipLabel}
      </div>
    );
  }