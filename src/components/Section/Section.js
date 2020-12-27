import React from "react";
import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";
import "./Section.scss";

export default function Section() {
  return (
    <div className="Section">
      <div>
        <Title text="Meal Deals" />
        <SubTitle
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget erat
          bibendum, cursus libero in, vestibulum mauris. Nulla commodo mi ut
          lacinia sollicitudin. Nunc suscipit pellentesque scelerisque. Aliquam
          varius, nibh at tempus blandit, dolor arcu cursus tellus, a tristique
          lacus risus sed lorem. Sed in accumsan diam. Quisque felis enim,
          consectetur ut imperdiet quis, tempus non ligula. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec bibendum at ligula ac rutrum. Mauris ut nunc at nisi tristique
          accumsan. Proin a maximus ipsum. Sed eleifend, justo quis tincidunt
          bibendum, diam lacus vestibulum enim, vitae viverra ligula dolor vitae
          nisl. Morbi luctus egestas dapibus. Vestibulum aliquam dolor nec nisi
          lobortis, vitae auctor est luctus. Duis velit augue, cursus ut maximus
          vitae, hendrerit a est. Cras viverra tellus libero, in feugiat augue
          consequat nec. Aliquam at velit dui."
        />
      </div>
    </div>
  );
}
