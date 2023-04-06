export default function dateFormatter(date) {
  return (
    date.toLocaleDateString("en-US", { day: "numeric" }) +
    " " +
    date.toLocaleDateString("en-US", { month: "long" }) +
    " " +
    date.toLocaleDateString("en-US", { year: "numeric" })
  ); // 16-Nov-2019
}
