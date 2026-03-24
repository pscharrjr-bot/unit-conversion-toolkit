function toNumber(value) {
  const num = parseFloat(value);
  return Number.isFinite(num) ? num : NaN;
}

function formatNumber(value) {
  if (!Number.isFinite(value)) return '—';
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(value);
}

function formatPercent(value) {
  if (!Number.isFinite(value)) return '—';
  return `${formatNumber(value)}%`;
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function clearFields(ids) {
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}
