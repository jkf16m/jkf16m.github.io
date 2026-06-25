type Props = {
  value: string;
  onChange: (e: Event) => void;
};

export function LanguageSelect({ value, onChange }: Props) {
  return (
    <select class="lang-select" value={value} onChange={onChange} aria-label="Language">
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
}
