import React from "react";
import { Select } from "@chakra-ui/react";

function ProductDetailVariantSelect({
  variantValue,
  variantUnit,
  variantIsFloat,
  options,
  onChange,
  ...props
}) {
  return (
    <Select
      value={variantValue}
      focusBorderColor="mypets.100"
      onChange={onChange}
      {...props}
    >
      {options.map((option, i) => (
        <option
          key={i}
          value={
            variantIsFloat
              ? parseFloat(option.variant_type_float)
              : option.variant_type_str
          }
        >
          {variantIsFloat ? option.variant_type_float : option.variant_type_str}
          {variantIsFloat && variantUnit.toLowerCase()}
        </option>
      ))}
    </Select>
  );
}

export default ProductDetailVariantSelect;
