import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbDivider,
    BreadcrumbButton,
  } from "@fluentui/react-components";
import { CalendarMonthRegular} from "@fluentui/react-icons";
import * as React from 'react';
const label = "myLabel"; const myFunc = (): string => { return "test"};

export const ButtonTests = () => (
    <>
        <Breadcrumb></Breadcrumb>
<p id={label}></p>
        <Breadcrumb aria-labelledby={label}>
      <BreadcrumbItem>
        <BreadcrumbButton href={label}>Item 1</BreadcrumbButton>
      </BreadcrumbItem>
     
    </Breadcrumb>


        <Breadcrumb aria-label="Breadcrumb default example">
      <BreadcrumbItem>
        <BreadcrumbButton href={label}>Item 1</BreadcrumbButton>
      </BreadcrumbItem>
     
    </Breadcrumb>

    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbButton href={label}>Item 1</BreadcrumbButton>
      </BreadcrumbItem>

    </Breadcrumb>



    
  </>      
);