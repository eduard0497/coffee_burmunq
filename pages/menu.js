import React from "react";
import styles from "../styles/Menu.module.css";

const coffeeItems = [
  {
    name: "Americano",
    imagePath: "/menuItems/coffeeItems/1.JPEG",
    alterImageText: "Coffee Image",
    price: 7,
  },
  {
    name: "Cappuccino",
    imagePath: "/menuItems/coffeeItems/2.JPEG",
    alterImageText: "Coffee Image",
    price: 6,
  },
  {
    name: "Espresso",
    imagePath: "/menuItems/coffeeItems/3.JPEG",
    alterImageText: "Coffee Image",
    price: 4,
  },
  {
    name: "Flat White",
    imagePath: "/menuItems/coffeeItems/4.JPEG",
    alterImageText: "Coffee Image",
    price: 5,
  },
  {
    name: "Frappuccino",
    imagePath: "/menuItems/coffeeItems/5.JPEG",
    alterImageText: "Coffee Image",
    price: 6,
  },
  {
    name: "Iced Coffee",
    imagePath: "/menuItems/coffeeItems/6.JPEG",
    alterImageText: "Coffee Image",
    price: 7,
  },
];

const pastryItems = [
  {
    name: "Croissant",
    imagePath: "/menuItems/pastryItems/1.JPEG",
    alterImageText: "Pastry Item",
    price: 5,
  },
  {
    name: "Cinnamon Roll",
    imagePath: "/menuItems/pastryItems/2.JPEG",
    alterImageText: "Pastry Item",
    price: 7,
  },
  {
    name: "Browney",
    imagePath: "/menuItems/pastryItems/3.JPEG",
    alterImageText: "Pastry Item",
    price: 6,
  },
  {
    name: "Cheese Cake",
    imagePath: "/menuItems/pastryItems/4.JPEG",
    alterImageText: "Pastry Item",
    price: 10,
  },
  {
    name: "Waffles",
    imagePath: "/menuItems/pastryItems/5.JPEG",
    alterImageText: "Pastry Item",
    price: 7,
  },
];

function Menu() {
  return (
    <div className={styles.menu}>
      <MenuSection title="Coffee" items={coffeeItems} />
      <MenuSection title="Pastry" items={pastryItems} />
    </div>
  );
}

export default Menu;

const MenuSection = ({ title, items }) => {
  if (!title || !items) return null;

  return (
    <div className={styles.menu_section}>
      <h2>{title}</h2>
      <div className={styles.menu_line_break}></div>
      <div className={styles.menu_items_container}>
        {items.map((item, index) => {
          return (
            <div key={index} className={styles.menu_item}>
              <div className={styles.menu_item_image}>
                <img src={item.imagePath} alt={item.alterImageText} />
              </div>
              <div className={styles.menu_item_info}>
                <h4>{item.name}</h4>
                <h4>{item.price}$</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
