import React from "react";
import { useFormContext } from "react-hook-form";
import { TooltipItem } from "../TooltipItem/TooltipItem";
import { IConditionalCheckboxList, ICheckboxListItem } from "../../../../models/IFormInput";
import "../../../../assets/styles/CheckboxList.style.scss";

export const ConditionalCheckboxList: React.FC<IConditionalCheckboxList> = ({
  items,
  existingItemIds,
  name,
  required,
  label,
  onSelect,
  inputCol = 8,
  labelCol = 4
}) => {
  const { watch, setValue } = useFormContext();

  let selected: string[] = watch(name) || [];
  if (!Array.isArray(selected)) selected = [];

  const [selectedIds, setSelectedIds] = React.useState<string[]>(selected);
  const [disabledIds, setDisabledIds] = React.useState<string[]>([]);

  React.useEffect(() => {
    setSelectedIds(selected);
  }, [selected]);

  const toggleItem = (itemId: string) => {
    const isSelected = selectedIds.includes(itemId);
    let updatedSelected = [...selectedIds];
    let updatedDisabled = [...disabledIds];

    const found = items.find((it) => it.id.toString() === itemId);
    if (!found) return;
    const invalidCombos = found.invalidCombinationIds || [];

    if (isSelected) {
      updatedSelected = updatedSelected.filter((id) => id !== itemId);
      updatedDisabled = recalcDisabled(updatedSelected, updatedDisabled, items);
    } else {
      updatedSelected.push(itemId);
      updatedSelected = updatedSelected.filter((id) => !invalidCombos.includes(id));
      updatedDisabled = Array.from(new Set([...updatedDisabled, ...invalidCombos]));
      updatedSelected = updatedSelected.filter((id) => !updatedDisabled.includes(id));
      updatedDisabled = recalcDisabled(updatedSelected, updatedDisabled, items);
    }

    setSelectedIds(updatedSelected);
    setDisabledIds(updatedDisabled);
    setValue(name, updatedSelected);
    onSelect?.(updatedSelected);
  };

  if (existingItemIds) {
    return (
      <fieldset className="checkbox-list">
        <h6>
          {label}
          {required ? "*" : ""}
        </h6>
        {existingItemIds.map((eid) => {
          const found = items.find((it) => it.id === eid);
          if (!found) return null;
          return (
            <TooltipItem
              key={found.id}
              title={found.name}
              description={found.description || ""}
              showDisc
            />
          );
        })}
      </fieldset>
    );
  }

  return (
    <fieldset className="checkbox-list">
      <h6>
        {label}
        {required ? "*" : ""}
      </h6>

      {items.map((it) => {
        const itId = it.id.toString();
        const isChecked = selectedIds.includes(itId);
        const isDisabled = disabledIds.includes(itId);

        return (
          <div className="form-group row" key={itId}>
            <label
              htmlFor={itId}
              className={`col-${labelCol} col-form-label`}
              style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
            >
              {it.name}
            </label>

            <div className={`col-${inputCol}`}>
              <input
                type="checkbox"
                id={itId}
                checked={isChecked}
                disabled={isDisabled}
                onChange={() => toggleItem(itId)}
                style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
              />
            </div>
          </div>
        );
      })}
    </fieldset>
  );
};

function recalcDisabled(
  selectedIds: string[],
  prevDisabled: string[],
  items: ICheckboxListItem[]
) {
  let newDisabledSet = new Set<string>();

  selectedIds.forEach((sid) => {
    const found = items.find((it) => it.id.toString() === sid);
    if (found?.invalidCombinationIds) {
      found.invalidCombinationIds.forEach((comboId) => {
        newDisabledSet.add(comboId);
      });
    }
  });

  return Array.from(newDisabledSet);
}
