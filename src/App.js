import React, { useState } from 'react'

import './App.css';

import { AgGridReact } from 'ag-grid-react';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


function App() {
  const [rowData] = useState([
    { ID:"123456789",Name:"Inigo Montoia",Extra_Hours:5, Manual_Hours:5,Monthly_Hours:150,Overall_Hours:155},
    { ID:"021456789",Name:"Patrick Star",Extra_Hours:0, Manual_Hours:0,Monthly_Hours:70,Overall_Hours:70},
    { ID:"523416709",Name:"Bill Gates",Extra_Hours:10, Manual_Hours:10,Monthly_Hours:200,Overall_Hours:210}
    
  ]);

  const [columnDefs] = useState([
    { field: "ID",rowDrag:true },
    { field: "Name" },
    { field: "Extra_Hours" },
    { field: "Manual_Hours" },
    { field: "Monthly_Hours" },
    { field: "Overall_Hours" }
  ]);

  return (
      <div className="ag-theme-alpine" style={{ height: 400, width:"50%"  }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          rowDragManaged={true}
          >
        </AgGridReact>
      </div>
  )
}

export default App;

