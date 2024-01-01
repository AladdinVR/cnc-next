"use client";
import React, { FunctionComponent } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CssBaseline,
} from "@mui/material";
import { SelectButtonProps } from "../props";
import { Link, usePathname } from "@/navigation";

const SelectButton: FunctionComponent<SelectButtonProps> = (
  props: SelectButtonProps
) => {
  const pathname = usePathname();
  return (
    <div {...props.div} className="SelectButton" style={{ overflow: "auto" }}>
      <CssBaseline />
      <FormControl
        style={{ background: "default" }}
        variant="standard"
        sx={{ m: 1, minWidth: 140 }}
      >
        <InputLabel id="input-label">
          {props.selectItems.inputLabel.text}
        </InputLabel>
        <Select
          defaultValue={props.defaultValue}
          onChange={(e) => (props.onChange ? props.onChange(e) : null)}
          onClick={(e) => (props.onClick ? props.onClick(e) : null)}
        >
          {props.selectItems.menuItems.map((menuItem) => (
            <MenuItem
              key={menuItem.id}
              value={menuItem.text ? menuItem.text : ""}
            >
              {menuItem.text.slice(0, 1).toUpperCase() + menuItem.text.slice(1)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectButton;
