import FoodItem from "./FoodItem";

export default function DisplayData({ fooddata, shit, setShit }) {
  return (
    <div>
      {fooddata.map((item) => (
        <FoodItem key={item.id} item={item} shit={shit} setShit={setShit} />
      ))}
    </div>
  );
}
