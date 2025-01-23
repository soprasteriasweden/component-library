import * as React from "react";
import { IConditionalCheckboxList } from "../../../../models/IFormInput";
import { Checkbox } from "../Checkbox/Checkbox";
import { TooltipItem } from "../TooltipItem/TooltipItem";
import { useFormContext } from "react-hook-form";

export const ConditionalCheckboxList: React.FC<IConditionalCheckboxList> = ({ items, existingItemIds, name, required, inputCol, labelCol, label, onSelect }) => {
    const { setValue, unregister } = useFormContext();
    const [selectedItemIds, setSelectedItemIds] = React.useState<string[]>([]);
    const [disabledItemIds, setDisabledItemIds] = React.useState<string[]>([]);

    const handleItemClick = (itemId: string, invalidItemIds: string[]) => {
        const isItemSelected = selectedItemIds.includes(itemId);

        const updatedSelectedItemIds = isItemSelected
            ? selectedItemIds.filter((id) => id !== itemId) 
            : [...selectedItemIds, itemId];

        const filteredSelectedItemIds = updatedSelectedItemIds.filter(
            (id) => !disabledItemIds.includes(id)
        );

        setSelectedItemIds(filteredSelectedItemIds);

        if (isItemSelected) {
            setValue(`${name}[${itemId}]`, undefined);
        } else {
            setValue(`${name}[${itemId}]`, itemId);
        }

        [...disabledItemIds, ...invalidItemIds].forEach((id) => {
            setValue(`${name}[${id}]`, undefined);
            unregister(`${name}[${id}]`);
        });

        if (onSelect) {
            onSelect(filteredSelectedItemIds);
        }

        if (isItemSelected) {
            const itemsToEnable = invalidItemIds.filter(
                (invalidId) =>
                    !filteredSelectedItemIds.some((selectedId) =>
                        items.find((item) => item.id.toString() === selectedId)?.invalidCombinationIds.includes(invalidId)
                    )
            );
            setDisabledItemIds(disabledItemIds.filter((id) => !itemsToEnable.includes(id)));
        } else {
            setDisabledItemIds([...new Set([...disabledItemIds, ...invalidItemIds])]);
            setSelectedItemIds((current) =>
                current.filter((id) => !invalidItemIds.includes(id))
            );
        }
    };

    return (
        <fieldset className="checkbox-list">
            <h6>{`${label}${required ? "*" : ""}`}</h6>
            {
                existingItemIds ?
                    existingItemIds.map((existingItemId) => {
                        const item = items.find((item) => item.id === existingItemId);
                        return (
                            <TooltipItem key={item?.id} title={item!.name} description={item!.description} showDisc />
                        );
                    })
                    : (
                        items.map((item) => (
                            <div key={item.id.toString()}>
                                <Checkbox
                                    label={item.name}
                                    tooltipDescription={item.description}
                                    id={item.id.toString()}
                                    value={item.id.toString()}
                                    name={`${name}[${item.id}]`}
                                    checked={selectedItemIds.includes(item.id.toString())}
                                    disabled={disabledItemIds.includes(item.id.toString())}
                                    onChange={() => handleItemClick(item.id.toString(), item.invalidCombinationIds)}
                                    labelCol={labelCol}
                                    inputCol={inputCol}
                                    inlineLabel
                                />
                            </div>
                        ))
                    )
            }
        </fieldset>
    );
};
