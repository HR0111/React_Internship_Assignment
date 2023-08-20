import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
 

interface DepartmentData {
  department: string;
  subDepartments: string[];
}

export function DepartmentSelection() {
  const initialDepartments: DepartmentData[] = [
    {
      department: 'customer_service',
      subDepartments: ['support', 'customer_success'],
    },
    {
      department: 'design',
      subDepartments: ['graphic_design', 'product_design', 'web_design'],
    },
  ];

  const [selectedDepartments, setSelectedDepartments] = useState<Record<string, boolean>>({});
  const [selectedSubDepartments, setSelectedSubDepartments] = useState<Record<string, boolean>>({});

  const handleDepartmentChange = (department: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectedDepartments = { ...selectedDepartments, [department]: event.target.checked };
    setSelectedDepartments(newSelectedDepartments);

    const parentDept = initialDepartments.find((dept) => dept.department === department);
    if (parentDept) {
      const newSelectedSubDepartments = { ...selectedSubDepartments };
      parentDept.subDepartments.forEach((subDept) => {
        newSelectedSubDepartments[subDept] = event.target.checked;
      });
      setSelectedSubDepartments(newSelectedSubDepartments);
    }
  };

  const handleSubDepartmentChange = (subDepartment: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectedSubDepartments = { ...selectedSubDepartments, [subDepartment]: event.target.checked };
    setSelectedSubDepartments(newSelectedSubDepartments);

    const parentDept = initialDepartments.find((dept) =>
      dept.subDepartments.includes(subDepartment)
    );
    if (parentDept) {
      const allSubDepartmentsSelected = parentDept.subDepartments.every(
        (subDept) => newSelectedSubDepartments[subDept]
      );
      const newSelectedDepartments = { ...selectedDepartments };
      newSelectedDepartments[parentDept.department] = allSubDepartmentsSelected;
      setSelectedDepartments(newSelectedDepartments);
    }
  };

  return (
    <div className="DepartmentSelection" style={{ margin: '85px' }}>
      {initialDepartments.map((dept) => (
        <Accordion key={dept.department}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${dept.department}-content`}
            id={`panel-${dept.department}-header`}
          >
            <FormControlLabel
              label={dept.department}
              control={
                <Checkbox
                  checked={selectedDepartments[dept.department] || false}
                  onChange={handleDepartmentChange(dept.department)}
                  style={{ marginLeft: '-20px' }}
                />
              }
            />
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ marginLeft: '20px' }}>
              {dept.subDepartments.map((subDept) => (
                <FormControlLabel
                  key={subDept}
                  label={subDept}
                  control={
                    <Checkbox
                      checked={selectedSubDepartments[subDept] || false}
                      onChange={handleSubDepartmentChange(subDept)}
                    />
                  }
                />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default DepartmentSelection;
