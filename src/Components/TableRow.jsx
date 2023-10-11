import { useState } from "react";
import useOpenController from "../Hooks/useOpenController";
import { items } from "../data/items";
import { whereUse } from "../data/whereUse";
import { ExpandableButton } from "./ExpandableButton";

/* eslint-disable react/prop-types */
export const TableRow = ({ item, fs, width }) => {
  let cost = 0;

  const { isOpen, toggle, level } = useOpenController(false, 1);
  const itemsWhereUse = whereUse.filter((w_item) => {
    return w_item.item_id === item.id;
  });
  return (
    <>
      <tr>
        <td>
          {itemsWhereUse.length ? (
            <ExpandableButton isOpen={isOpen} toggle={toggle} />
          ) : null}
        </td>
        <td style={{ width: `${width}px`, textAlign: "right" }}> {item.id}</td>
        <td> {item.name}</td>
        <td> {item.desc}</td>
        <td> {item.cost || cost}</td>
        {/* <td>{personDetails.phone}</td>
      <td>{personDetails.country}</td>
      <td>{personDetails.alphanumeric}</td> */}
      </tr>
      {
        isOpen &&
          itemsWhereUse &&
          itemsWhereUse.map((w, index) => {
            const i = items.find((it) => {
              return w.item_sub_id === it.id;
            });

            return (
              <TableRow key={index} item={i} fs={fs + 1} width={width + 30} />
            );
          })
        // : setLevel(1)
      }
    </>
  );
};
