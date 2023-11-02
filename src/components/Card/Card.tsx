import { CardProps } from '../../types/CardProps';
import MenuItem from '../MenuItem/MenuItem';

function Card(props: CardProps) {
  return (
    <div>
      <div
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        id={props.id}
        className="my-16 py-16"
      >
        <h2 className="text-center text-5xl tracking-wide font-light text-black opacity-75 sm:text-3xl">
          {props.title}
        </h2>
        <div className="mx-auto my-12 w-16 h-1 bg-blue-400" />
        <p className="text-center text-md font-light text-black opacity-75">
          {props.description}
        </p>
      </div>
      {props.package &&
        props.package.map((dish, index) => (
          <MenuItem
            key={index}
            name={dish.name}
            ingredients={dish.ingredients}
            price={dish.price}
          />
        ))}
    </div>
  );
}

export default Card;
