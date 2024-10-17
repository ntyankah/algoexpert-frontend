import { cn } from "@/lib/utils";

const styles = {
    checkbox: "w-5 h-5 rounded-[0.2em] border border-black shadow-custom flex justify-center items-center",
    isChecked: 'checkbox-checked'
}

type CheckBoxProps = {
    isChecked?: boolean;
};

export default function CheckBox({ isChecked = false }: CheckBoxProps) {
    return (
        <span className={cn(styles.checkbox, isChecked && styles.isChecked)}></span>
    );
}