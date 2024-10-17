type ColoredBallProps = {
    type: "success" | "warning" | "danger" | "white";
};

const styles = {
    'success': 'shadow-custom bg-success',
    'warning': 'shadow-custom bg-warning',
    'danger': 'shadow-custom bg-danger',
    'white': 'shadow-custom border border-[rgba(103, 114, 229, 0.3)]',
    'ball': 'size-5 rounded-full inline-block'
}

export default function ColoredBall({ type }: ColoredBallProps) {
    const variation = styles[type]
    return <span className={`${styles.ball} ${variation}`}></span>;
}
