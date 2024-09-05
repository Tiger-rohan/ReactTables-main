import { Box, Center, Icon } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from './icons/CalendarIcon';

const DateCell = ({getValue ,row,column,table}) => {
    const DateCustomInput=forwardRef(({value,onClick,clearDate}, ref)=>(
        <Center ref={ref} onClick={onClick}
        cursor="pointer"
        >
            {
                value ? <>
                {value}
                <Box pos="absolute" fontSize='md' right={3} color='red.400' onClick={(e)=>{e.stopPropagation();clearDate()}}>
                    &times;

                </Box>
                </> : <Icon as={CalendarIcon} fontSize='xl'/>
            }
        </Center>
    ));
    
    const date =getValue();
    const {updateData} = table.options.meta;

  return (
    <DatePicker
    wrapperClassName='date-wrapper'
    dateFormat="MMM d"
    selected={date} 
    onChange={(date) => updateData(row.index,column.id,date)}
    customInput={<DateCustomInput
    clearDate={()=>updateData(row.index,column.id,null)}
    
    
    />}
    /> 
     )
}

export default DateCell;
