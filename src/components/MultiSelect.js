import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  {
    label: "Kitchen cooker/stove/hotplate",
    value: "Kitchen cooker/stove/hotplate",
  },
  { label: "Stirring spoon", value: "Stirring spoon" },
  {
    label: "Metal or/and silicon spatula",
    value: "Metal or/and silicon spatula",
  },
  { label: "Container or bowl", value: "Container or bowl" },
  { label: "Pot", value: "Pot" },
  { label: "Oven", value: "Oven" },
  { label: "Sieve", value: "Sieve" },
  { label: "Weight (gr)", value: "Weight (gr)" },
  { label: "Teaspoon (ml)", value: "Teaspoon (ml)" },
  { label: "Tablespoon (ml)", value: "Tablespoon (ml)" },
  { label: "Spray bottle", value: "Spray bottle" },
  { label: "Measuring cups", value: "Measuring cups" },
  { label: "Microwave", value: "Microwave" },
  { label: "Moulds", value: "Moulds" },
  { label: "Hammer", value: "Hammer" },
  { label: "Brush", value: "Brush" },
  { label: "Rolling pin", value: "Rolling pin" },
  { label: "Grater", value: "Grater" },
  { label: "Whisk", value: "Whisk" },
  { label: "Sponge", value: "Sponge" },
  { label: "Cloth bag", value: "Cloth bag" },
  { label: "Kitchen scale (gr)", value: "Kitchen scale (gr)" },
  { label: "Kitchen thermometer", value: "Kitchen thermometer" },
  { label: "Silicon Moulds", value: "Silicon Moulds" },
  {
    label: "Litmus paper: pH strips (ph)",
    value: "Litmus paper: pH strips (ph)",
  },
  { label: "Dehydrators", value: "Dehydrators" },
  { label: "Grinder", value: "Grinder" },
  { label: "Blender", value: "Blender" },
  { label: "Kiln", value: "Kiln" },
  { label: "Plaster Slab", value: "Plaster Slab" },
  { label: "Laser Cutter", value: "Laser Cutter" },
  { label: "3D Printer", value: "3D Printer" },
  { label: "Syringe", value: "Syringe" },
  { label: "Water dropper", value: "Water dropper" },
  { label: "Coffee filter", value: "Coffee filter" },
  { label: "Centrifugal mixer", value: "Centrifugal mixer" },
  { label: "Precision scales (gr)", value: "Precision scales (gr)" },
  { label: "Thermometer probe", value: "Thermometer probe" },
  {
    label: "Controlled stirrer hot plate/cooker",
    value: "Controlled stirrer hot plate/cooker",
  },
  { label: "Beakers (ml)", value: "Beakers (ml)" },
  { label: "Magnetic stirrer bars", value: "Magnetic stirrer bars" },
  { label: "Micron sieve", value: "Micron sieve" },
  { label: "Overhead stirrers", value: "Overhead stirrers" },
  {
    label: "Ultrasonicator (frequency/ time)",
    value: "Ultrasonicator (frequency/ time)",
  },
  { label: "Vacuum chamber & pump", value: "Vacuum chamber & pump" },
  { label: "Universal Testing Machine", value: "Universal Testing Machine" },
  { label: "Inert environment chamber", value: "Inert environment chamber" },
  { label: "Dehydrator", value: "Dehydrator" },
  { label: "Petri Dish", value: "Petri Dish" },
];

const CustomMultiSelect = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div className="flex w-full">
      <pre>{selected.label}</pre>
      <MultiSelect
        className="w-full max-w-[600px]"
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default CustomMultiSelect;
