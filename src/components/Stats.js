export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items to your list!</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "All Done!✈️"
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
