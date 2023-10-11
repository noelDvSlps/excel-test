/* eslint-disable react/prop-types */
import { TableRow } from "./TableRow";
import useOpenController from "../Hooks/useOpenController";
import { ExpandableButton } from "./ExpandableButton";
import { whereUse } from "../data/whereUse.js";
import { items } from "../data/items.js";

export const TableSection = ({ item }) => {
  console.log(`item ${item.name}`);
  const { isOpen, toggle } = useOpenController(false, 1);
  const itemsWhereUse = whereUse.filter((w_item) => {
    return w_item.item_id === item.id;
  });
  // let cost = 0;

  const getCost = (i, c) => {
    console.log(`c ${c}`);
    // filter the item number
    const subExist = whereUse.filter((w_item) => {
      return w_item.item_id === i;
    });
    // console.log(subExist);
    // check sub item

    if (subExist) {
      subExist.map((sub) => {
        // console.log(sub.item_sub_id);
        const g = items.find((item) => item.id === sub.item_sub_id);
        // console.log(`the cost of ${sub.item_sub_id} is ${g.cost}`);
        c = c + (g.cost ? g.cost : 0);
        console.log("get cost");
        getCost(sub.item_sub_id, c);
      });
    }

    console.log(`cost of  ${i} is ${subExist ? c : 1000000000000}`);
  };

  getCost(item.id, 0);

  // console.log(itemsWhereUse);
  return (
    <>
      {/* <tr>
        <td className="button-td">
          <ExpandableButton isOpen={isOpen} toggle={toggle} />
        </td>
        <td>
          <b>Person : {index}</b>
        </td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      {isOpen && <TableRow personDetails={personDetails} />} */}
      <tr style={{ color: "blue" }}>
        <td className="button-td">
          {itemsWhereUse.length ? (
            <ExpandableButton isOpen={isOpen} toggle={toggle} />
          ) : null}
        </td>
        <td>
          <b>{item.id}</b>
        </td>
        <td>
          <b>{item.name}</b>
        </td>
        <td>
          <b>{item.desc}</b>
        </td>
        <td>
          <b>{item.cost || 0}</b>
        </td>
      </tr>

      {
        isOpen &&
          itemsWhereUse &&
          itemsWhereUse.map((w, index) => {
            const i = items.find((it) => {
              return w.item_sub_id === it.id;
            });

            return <TableRow key={index} item={i} fs={2} width={30} />;
          })
        // : setLevel(1)
      }
    </>
  );
};
