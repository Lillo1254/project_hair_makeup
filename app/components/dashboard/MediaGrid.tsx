"use client";

interface MediaGridProps {
  items?: string[];
  onDelete: (path: string) => void;
  isVideo?: boolean;
}

export default function MediaGrid({ items = [], onDelete, isVideo = false }: MediaGridProps) {
  if (!Array.isArray(items)) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {items.map((file, i) => (
        <div key={i} className="relative">

          {isVideo ? (
            <video controls className="w-full rounded">
              <source src={file} />
            </video>
          ) : (
            <img src={file} className="w-full h-40 object-cover rounded" />
          )}

          <button
            onClick={() => onDelete(file)}
            className="absolute top-2 right-2 bg-red-600 w-6 h-6 text-xs rounded-full"
          >
            ✕
          </button>

        </div>
      ))}
    </div>
  );
}
