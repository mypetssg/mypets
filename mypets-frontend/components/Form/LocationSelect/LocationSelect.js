import { Select } from "@chakra-ui/react";

function LocationSelect({ field, values }) {
  return (
    <Select
      {...field}
      id="location"
      placeholder="Select area"
      focusBorderColor="mypets.100"
    >
      {values.map((value, i) => (
        <option key={i} value={value}>
          {value}
        </option>
      ))}
    </Select>
  );
}

export default LocationSelect;
