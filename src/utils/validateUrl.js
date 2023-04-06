export default function validateUrl(value) {
  return /^https?:\/\/(?:www\.)?youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)?([a-zA-Z0-9_-]{11})(?:\S+)?$/.test(
    value
  );
}
