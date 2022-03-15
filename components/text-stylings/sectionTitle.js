export default function SectionTitle({ children, size, spacing }) {
    return (
        <div className={`text-xl ${spacing}`}>
            <span className={`uppercase ${size} tracking-wider font-semibold`}>{children}</span>
        </div>
    )
}