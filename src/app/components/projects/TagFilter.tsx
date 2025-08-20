type TagFilterProps = {
  tags: string[];
  active: string | null;
  onChange: (tag: string | null) => void;
};

export default function TagFilter({ tags, active, onChange }: TagFilterProps) {
  if (!tags.length) return null;

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <button
        onClick={() => onChange(null)}
        className={`px-3 py-1 rounded border text-sm ${
          !active
            ? "bg-primary text-white border-primary"
            : "bg-white text-primary border-primary hover:bg-primary/10"
        }`}
      >
        Tous
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          className={`px-3 py-1 rounded border text-sm ${
            active === tag
              ? "bg-primary text-white border-primary"
              : "bg-white text-primary border-primary hover:bg-primary/10"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
