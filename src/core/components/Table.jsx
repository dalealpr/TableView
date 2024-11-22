import { useMemo } from "react";
import {
  MaterialReactTable,
} from "material-react-table";
import talleres from "../../data/talleres";

const Table = () => {
  // Titulos de cada columna
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Logo",
        size: 150,
      },
      {
        accessorKey: "name",
        header: "Taller",
        size: 150,
      },
      {
        accessorKey: "marca",
        header: "Marca",
        size: 150,
      },
      {
        accessorKey: "servicios",
        header: "Servicios",
        size: 150,
      },
      {
        accessorKey: "valorizacion",
        header: "Valorización",
        size: 150,
      },
      {
        accessorKey: "certificado",
        header: "Certificado",
        size: 150,
      },
      {
        accessorKey: "costo",
        header: "Costo H/H",
        size: 150,
      },
    ],
    []
  );

  return (
    <div className="py-10">
      <MaterialReactTable
        columns={columns}
        data={talleres}
        initialState={{ density: "compact" }} />
    </div>
  );
};

export default Table;
