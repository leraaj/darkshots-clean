import React, { useState } from "react";
import { MaterialReactTable } from "material-react-table";
import "./Table.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
const MaterialTable = ({
  columns,
  data,
  enableLoading,
  renderRowActions,
  renderTopToolbarCustomActions,
  enableColumnActions,
  enableHiding,
  enableDensityToggle,
  enableFullScreenToggle,
}) => {
  const theme = createTheme({
    components: {
      MuiTable: {
        styleOverrides: {
          root: {},
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            // backgroundColor: "#D9D9D9 !important",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            color: "black",
            fontWeight: "bold !important",
          },
          root: {
            // borderBottom: "1px solid #ccc", // Customize the border of table cells
          },
        },
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <MaterialReactTable
          columns={columns}
          data={data ?? []}
          enableDensityToggle={enableDensityToggle}
          enableHiding={enableHiding}
          state={{ isLoading: enableLoading }}
          enableColumnActions={enableColumnActions}
          enableFullScreenToggle={enableFullScreenToggle}
          positionActionsColumn="last"
          initialState={{ pagination: { pageSize: 5 } }}
          enableRowActions
          renderRowActions={renderRowActions}
          renderTopToolbarCustomActions={renderTopToolbarCustomActions}
          enableStickyHeader
          muiTableContainerProps={{ sx: { maxHeight: "325px" } }}
        />
      </ThemeProvider>
    </>
  );
};

export default MaterialTable;
