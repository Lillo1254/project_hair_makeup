"use client";

interface PreviewGridProps {
  files: File[];
  isVideo?: boolean;
}

export default function PreviewGrid({ files, isVideo = false }: PreviewGridProps) {
  if (!Array.isArray(files)) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {files.map((file, i) => {
        const url = URL.createObjectURL(file);

        return (
          <div key={i}>
            {isVideo ? (
              <video controls className="w-full rounded">
                <source src={url} />
              </video>
            ) : (
              <img src={url} className="w-full h-40 object-cover rounded" />
            )}
          </div>
        );
      })}
    </div>
  );
}
