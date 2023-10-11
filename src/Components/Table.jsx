import { info } from "../data/info.js";
import { items } from "../data/items.js";
import { TableSection } from "./TableSection.jsx";
export const Table = ({ r }) => {
  return (
    <div>
      <table ref={r} style={{ border: "1px solid red" }}>
        <thead>
          <tr>
            <th></th>
            <th>Id</th>
            <th>Item</th>
            <th>Description</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <TableSection item={item} index={index} key={index} />
          ))}
        </tbody>
      </table>
      {/* <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>desc</th>
            <th>Country</th>
            <th>Alphanumeric</th>
          </tr>
        </thead>
        {info.map((personDetails, index) => (
          <TableSection
            personDetails={personDetails}
            index={index}
            key={index}
          />
        ))}
      </table> */}
    </div>
  );
};
