import CareScale from './CareScale';
import '../styles/PlantItem.css';

function PlantItem({ id, cover, name, water, light, price }) {
  return (
    <li key={id} className="lmj-plant-item">
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      <strong>{name}</strong>
      <div>{price} €</div>
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;
