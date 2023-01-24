import React from "react";
import ElementsTableExample from "./elements_table_example";
import PropsTableExample from "./props_table_example";

const data = [
  {
    name: "Bert Jaskolski Jr.",
    email: "Ona13@hotmail.com",
    permissions: "User",
    status: "Active",
    lastActive: "12/08/2022",
  },
  {
    name: "Fred Kertzmann",
    email: "Nyasia94@yahoo.com",
    permissions: "User",
    status: "Active",
    lastActive: "12/08/2022",
  },
  {
    name: "Oscar Schoen I",
    email: "Tiara75@hotmail.com",
    permissions: "Admin",
    status: "Active",
    lastActive: "12/08/2022",
  },
  {
    name: "Rex Kling",
    email: "Anita66@yahoo.com",
    permissions: "User",
    status: "Active",
    lastActive: "12/08/2022",
  },
  {
    name: "Troy Hills",
    email: "Meggie.Okuneva77@gmail.com",
    permissions: "User",
    status: "Active",
    lastActive: "12/08/2022",
  },
];

function App() {
  React.useEffect(() => {
    document.title = "Table Comparison";
  }, []);

  const [dataState, setDataState] = React.useState(() =>
    data.map((value) => ({
      ...value,
      checked: false,
    }))
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl">Tables</h1>

      <h2 className="mt-8 mb-2 ml-2 text-xl">Elements Table</h2>
      <ElementsTableExample data={dataState} setData={setDataState} />

      <h2 className="mt-8 mb-2 ml-2 text-xl">Props Table</h2>
      <PropsTableExample data={dataState} setData={setDataState} />
    </div>
  );
}

export default App;
